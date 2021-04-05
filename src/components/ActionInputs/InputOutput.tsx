import React, { useEffect, useState } from "react";
import { CryptoCurrencyInput } from "../CryptoCurrencyInput/CryptoCurrencyInput";
import { DownArrow } from "./DownArrow";
import { ICurrency, IToken } from "interfaces";
import { useYFITokens } from "components/YFITokensProvider";

export type IInputOutputPureProps<T extends ICurrency> = {
  input: {
    currencies: T[];
    selectedCurrency: T;
    onChangeCurrency: (val: T) => void;
    onChangeAmount?: (val: React.ChangeEvent<HTMLInputElement>) => void
    amount?: number | null;
    noDropDown?: boolean;
  };
  output?: {
    currencies: T[];
    selectedCurrency: T;
    onChangeCurrency: (val: T) => void;
    onChangeAmount?: (val: React.ChangeEvent<HTMLInputElement>) => void;
    amount?: number | null;
    noDropDown?: boolean;
  };
  noOutput?: boolean;
};

export const InputOutputPure = <T extends ICurrency>({
  input,
  output,
  noOutput,
}: IInputOutputPureProps<T>) => {
  return (
    <div>
      <CryptoCurrencyInput
        className="mt-4"
        label="Input"
        currencies={input.currencies}
        currency={input.selectedCurrency}
        onChange={input.onChangeCurrency}
        amount={input.amount}
        onChangeAmount={input.onChangeAmount}
        placeholder="Amount"
      />
      <div className={`arrow-wrapper ${noOutput ? "justify-content-end" : ""}`}>
        {!noOutput && <DownArrow />}
        <div className="arrow-max">Max</div>
      </div>
      {!noOutput && output && (
        <CryptoCurrencyInput
          label="Output (Estimate)"
          placeholder="0"
          amount={output.amount}
          currencies={output.currencies}
          noDropdown={output.noDropDown}
          currency={output.selectedCurrency}
          onChangeAmount={output.onChangeAmount}
          onChange={output.onChangeCurrency}
        />
      )}
    </div>
  );
};

export const InputOutput = ({ noOutput = false }) => {
  const yfiTokens = useYFITokens();

  const [selectedToken, setSelectedToken] = useState<IToken | null>();

  useEffect(() => {
    if (yfiTokens.length > 0) {
      setSelectedToken(yfiTokens[0]);
    }
  }, [yfiTokens]);
  if (!selectedToken) {
    return <></>;
  }

  return (
    <InputOutputPure
      input={{
        currencies: yfiTokens,
        selectedCurrency: selectedToken,
        onChangeCurrency: setSelectedToken,
      }}
      noOutput={noOutput}
      output={{
        currencies: yfiTokens,
        selectedCurrency: {
          ...selectedToken,
          tokenIcon: selectedToken.vaultIcon,
          tokenSymbol: selectedToken.symbol,
        },
        onChangeCurrency: setSelectedToken,
      }}
    />
  );
};
