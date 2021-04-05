import { useYFITokens } from "components/YFITokensProvider";
import { IToken } from "interfaces";
import React, { useEffect, useState } from "react";
import { api } from "services/api";
import { CryptoCurrencyInput } from "../CryptoCurrencyInput";
import { DownArrow } from "./DownArrow";
import { MTAIcon } from "./MTAIcon";
import { MUSDIcon } from "./MUSDIcon";

export const BalancerAddLiquidity = () => {

  const yfiTokens = useYFITokens();
  if(yfiTokens.length === 0){
    return <></>
  }
  return (
    <div>
      <CryptoCurrencyInput
      currencies={yfiTokens}
        noDropdown
        label="Input (Estimate)"
        name={"mUSD"}
        icon={<MUSDIcon />}
        placeholder="Amount"
      />
      <div className="arrow-wrapper justify-content-end">
        <div className="arrow-max">Max</div>
      </div>
      <CryptoCurrencyInput
        currencies={yfiTokens}
        noDropdown
        icon={<MTAIcon />}
        label="Input (Estimate)"
        name={"MTA"}
        placeholder="Amount"

      />
      <div className={`arrow-wrapper `}>
        <DownArrow />
        <div className="arrow-max">Max</div>
      </div>
      <CryptoCurrencyInput
        currencies={yfiTokens}
        icon={<MTAIcon />}
        label="Output (Estimate)"
        name={"0x003A"}
        placeholder="0"
      />
      <div className="actionprop_info">
        <div className="">Weight</div>
        <div>
          <div>
            <span className="text-dark">20,00%</span> mUSD
          </div>
          <div>
            {" "}
            <span className="text-dark">00,00%</span> {"  "} MTA
          </div>
        </div>
      </div>
    </div>
  );
};
