import React, { useEffect, useState } from "react";
import { CryptoCurrencyInput } from "../CryptoCurrencyInput";
import {IToken} from "interfaces";
import { useYFITokens } from "components/YFITokensProvider";

const UpDownArrow = (props: any) => {
  return (
    <svg
      width={31}
      height={25}
      viewBox="0 0 31 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.3} fillRule="evenodd" clipRule="evenodd" fill="#C6C6C6">
        <path d="M23.422 22.727a1.04 1.04 0 01-.757-.333 1.173 1.173 0 01-.313-.804V1.136c0-.301.113-.59.313-.803.2-.213.473-.333.757-.333.284 0 .556.12.757.333.2.213.313.502.313.803V21.59c0 .302-.113.59-.313.804a1.04 1.04 0 01-.757.333z" />
        <path d="M24.179 24.666c-.1.106-.217.19-.348.247a1.016 1.016 0 01-.82 0 1.069 1.069 0 01-.347-.247l-6.422-6.818a1.175 1.175 0 01-.314-.804c0-.302.113-.591.314-.805.201-.213.474-.333.758-.333.284 0 .557.12.758.333l5.663 6.016 5.664-6.016c.2-.213.473-.333.758-.333.284 0 .556.12.757.333.201.213.314.503.314.805 0 .301-.113.59-.314.804l-6.421 6.818z" />
      </g>
      <g opacity={0.3} fillRule="evenodd" clipRule="evenodd" fill="#C6C6C6">
        <path d="M8.433 2.273c.284 0 .557.12.757.333.2.213.314.502.314.804v20.454c0 .301-.113.59-.314.803a1.04 1.04 0 01-.757.333 1.04 1.04 0 01-.756-.333 1.173 1.173 0 01-.314-.803V3.41c0-.302.113-.59.314-.804.2-.213.473-.333.756-.333z" />
        <path d="M7.676.334c.1-.106.218-.19.348-.247a1.016 1.016 0 01.82 0c.13.057.248.141.348.247l6.421 6.818c.201.213.314.503.314.804 0 .302-.113.591-.314.805a1.041 1.041 0 01-.758.333c-.284 0-.556-.12-.757-.333L8.434 2.745 2.771 8.761a1.04 1.04 0 01-.758.333 1.04 1.04 0 01-.758-.333 1.174 1.174 0 01-.314-.805c0-.301.113-.59.314-.804L7.676.334z" />
      </g>
    </svg>
  );
};

export const CurveInput = ({
    noPrev= false
}) => {

  const yfiTokens = useYFITokens();

  const [selectedToken, setSelectedToken] = useState<IToken | null>();

  useEffect(() => {

    if (yfiTokens.length > 0) {
      setSelectedToken(yfiTokens[0]);
    }
  }, [yfiTokens])
  if(!selectedToken){
    return <></>;
  }
  return (
    <div>
      <CryptoCurrencyInput
        className="mt-4"
        label="Input"
        placeholder="Amount"
        currencies={yfiTokens}
        currency={selectedToken}
        onChange={setSelectedToken}
      />
      <div className="arrow-wrapper">
        <UpDownArrow />
        <div className="d-flex">
         {!noPrev && <div className="arrow-max mr-1">Prev Output</div>}
          <div className="arrow-max">Max</div>
        </div>
      </div>
      <CryptoCurrencyInput
        label="Output (Estimate)"
        placeholder="0"
        currencies={yfiTokens}
        noDropdown
        currency={{...selectedToken, tokenIcon: selectedToken.vaultIcon,tokenSymbol: selectedToken.symbol}}
        onChange={setSelectedToken}
      />
    </div>
  );
};
