import { SetButton } from "components/ActionUI/SetButton";
import { usePanel } from "components/Panel/Panel";
import { getWeb3 } from "helpers/helpers";
import { ICurrencyWithAddress, IProtocol } from "interfaces";
import React, { useEffect, useState } from "react";
import { api } from "services/api";
import Web3 from "web3";
import { InputOutputPure } from "./InputOutput";




export const UniswapSwapToken = ({

}: {
    lastProtocol: IProtocol;
    protocol: IProtocol;
}) => {
    const [currencies, setCurrencies] = useState<ICurrencyWithAddress[]>([]);
    const [inputCurrency, setInputCurrency] = useState<ICurrencyWithAddress | null>(
        null
    );
    const [outputCurrency, setOutputCurrency] = useState<ICurrencyWithAddress | null>(
        null
    );
    const [{ midPrice, invertedMidPrice }, setPriceRatio] = useState({ midPrice: '0', invertedMidPrice: '0' });
    const [inputAmount, setInputAmount] = useState<number | string>('');
    const [outputAmount, setOutPutAmount] = useState<number | string>('');
    const { enableBlur, disableBlur } = usePanel();
    useEffect(() => {
        (async () => {
            enableBlur()
            try {
                const res = await api.get("/api/v1/protocols/uni");
                const data = res.data.data;
                const curr = data.tokens.map((item: any) => {
                    return {
                        tokenSymbol: item.symbol,
                        tokenIcon: item.logoURI,
                        apy_apyOneMonthSample: 10,
                        address: item.address
                    } as ICurrencyWithAddress;
                });
                setCurrencies(curr);
                setInputCurrency(curr[0]);
                setOutputCurrency(curr[1]);
            } finally {
                disableBlur()
            }
        })()
    }, []);


    useEffect(() => {
        (async () => {
            if (inputCurrency && outputCurrency) {
                const resp = await api.post("/api/v1/protocols/uni", { address1: inputCurrency.address, address2: outputCurrency.address });
                setPriceRatio(resp.data.data);
            }
        })()
    }, [inputCurrency, outputCurrency])

    if (!inputCurrency || !outputCurrency) {
        return <></>;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputAmount((e.target.value))
        if (e.target.value === "") {
            setOutPutAmount('')
        } else {
            setOutPutAmount(parseFloat(e.target.value) * parseFloat(invertedMidPrice));
        }
    }
    const handleOutputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOutPutAmount((e.target.value))
        if (e.target.value === "") {
            setInputAmount('')
        } else {
            setInputAmount(parseFloat(e.target.value) * parseFloat(midPrice));
        }

    }

    return (
        <div className="action-wrapper">
            <InputOutputPure
                input={{
                    currencies,
                    onChangeCurrency: setInputCurrency,
                    selectedCurrency: inputCurrency,
                    amount: inputAmount as number,
                    onChangeAmount: handleInputChange
                }}
                output={{
                    currencies,
                    onChangeCurrency: setOutputCurrency,
                    selectedCurrency: outputCurrency,
                    amount: outputAmount as number,
                    onChangeAmount: handleOutputChange
                }}
            />
            <SetButton
                action="SwapToken"
            />
        </div>
    );
};
