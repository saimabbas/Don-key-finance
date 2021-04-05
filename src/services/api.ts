import axios from "axios";
import { AuthToken } from "../constants";
import { getWeb3 } from "helpers/helpers";


export const api = axios.create({
  baseURL: "https://api.by.finance",
  transformRequest: [...axios.defaults.transformRequest as any, (data,headers) => {
    const token =localStorage.getItem(AuthToken)
    if(token){
      headers["Authorization"] = `Bearer ${token}`
    }
    return data
  }]
});

export const getNonce = async (publicAddress: string) => {
  const res = await api.post("/api/v1/nonce", {
    walletAddress: publicAddress,
  });
  const {
    data: { data },
  } = res;
  return data.nonce;
};


export const getAuthToken = async (publicAddress: string, signature: string) => {
  const resps = await api.post("/api/v1/login", {
    signature,
    walletAddress: publicAddress,
  });
  const { token } = resps.data.data;
  const user = resps.data.user;
  return {
    token,
    user,
  };
};


export const getAuthTokenForPublicAddress = async (publicAddress: string) => {
  const nonce = await getNonce(publicAddress);
  const web3 = await getWeb3();
  //@ts-ignore
  const signature = await web3.eth.personal.sign(nonce, publicAddress);

  return await getAuthToken(publicAddress, signature);
};