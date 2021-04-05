import { useYFITokens } from "components/YFITokensProvider";
import React, {  } from "react";
import { CryptoCurrencyInput } from "../CryptoCurrencyInput";
import { DownArrow } from "./DownArrow";

export const CurveLiquidity = () => {


  const yfiTokens = useYFITokens();

  
  if(yfiTokens.length === 0){
    return <></>;
  }

  return (
    <div className="my-4">
      <CryptoCurrencyInput currencies={yfiTokens} label="Input" placeholder="Amount" />
      <div className="arrow-wrapper justify-content-end">
        <div className="arrow-max mr-1">Prev Output</div>
        <div className="arrow-max">Max</div>
      </div>
      <CryptoCurrencyInput
       currencies={yfiTokens}
        label="Input"
        placeholder="Amount"
      />
      <div className="arrow-wrapper justify-content-end">
        <div className="arrow-max">Max</div>
      </div>
      <CryptoCurrencyInput
         currencies={yfiTokens}
        label="Input"
        placeholder="Amount"
      />
       <div className="arrow-wrapper justify-content-end">
        <div className="arrow-max">Max</div>
      </div>
      <CryptoCurrencyInput
         currencies={yfiTokens}
        label="Input"
        placeholder="Amount"
      />
      <div className="arrow-wrapper my-1">
        <DownArrow />
        <div className="arrow-max">Max</div>
      </div>
      <CryptoCurrencyInput
        label="Output (Estimate)"
        multi
        placeholder="0"
        currencies={yfiTokens}
      />
    </div>
  );
};
