import axios from "axios";
import { prisma } from "./database";
import { IJob } from "./IJob";

const PancakeTokens = prisma.pancakeSwapTokens;
const PancakePairs = prisma.pancakeSwapPairs;

const findItem = <T>(arr: T[], callback: (val: T) => boolean) => {
  const index = arr.findIndex(callback);
  if (index > -1) {
    return arr[index];
  }
  return null;
};

export const PancakeCronJob: IJob = {
  schedule: "*/3 * * * *",
  JobName: "Pancake Cron Job",
  runOnStart: true,
  job: async () => {
	await PancakePairs.deleteMany();
    const [res1, res2] = await Promise.all([
      axios.get("https://api.pancakeswap.finance/api/v1/price"),
      axios.get("https://api.pancakeswap.finance/api/v1/stat"),
      PancakeTokens.deleteMany(),
    ]);
   
    const prices = res1.data.prices;
    const tokens = Object.keys(prices);
    const panTokens = tokens.map((name) => {
      const data = {
        lastUpdated: new Date(),
        name,
        price: prices[name],
      };
      return data;
    });
    await PancakeTokens.createMany({ data: panTokens });
    const dbTokens = await PancakeTokens.findMany();
    console.log("Starting Pairs");
    const tradePairs = res2.data.trade_pairs;
	const allPairs = tradePairs.map((pair: any) => {
	
		const base_symbol = pair.base_symbol;
		const quote_symbol = pair.quote_symbol;
		const exists1 = findItem(dbTokens, (item) => item.name === base_symbol);
		const exists2 = findItem(dbTokens, (item) => (item.name = quote_symbol));
		if (exists1 && exists2) {
		  const data = {
			lastUpdated: new Date(),
			base_symbol: exists1.id,
			quote_symbol: exists2.id,
			last_price: pair.last_price,
			pair_contract: pair.swap_pair_contract,
		  };
		  return data;
		}
		return null;
	}).filter((item: any) => !!item);
	await PancakePairs.createMany({data: allPairs});
  },
};
