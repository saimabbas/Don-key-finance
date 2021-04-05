import React, { useEffect, useState } from "react";
import { getAuthToken, getNonce } from "../services/api";
import { AuthToken } from "../constants";
import { useHistory } from "react-router-dom";
import { useNotification } from "components/Notification";
import { useWeb3React } from "@web3-react/core";
import { walletconnect } from "connectors";

export const useWalletConnectHook = () => {
    const history = useHistory();
    const { showNotification } = useNotification();

    const { activate, library, account } = useWeb3React();

    const handleAuth = async (publicAddress: string) => {
        const nonce = await getNonce(publicAddress);

        const signature = await library.getSigner(account).signMessage(nonce);
      
        const {  token } = await getAuthToken(publicAddress, signature);
      
        localStorage.setItem(AuthToken, token);

        history.push("/myaccount");
        showNotification({
            msg: (
                <>
                    <p className="text-center">
                        WalletConnect Account Connected
                    </p>
                    <p className="text-center">{publicAddress}</p>
                </>
            ),
        });
    };

    useEffect(() => {
        if (library && account) {
            handleAuth(account);
        }
    }, [account, library]);

    const handleWalletConnect = () => {
        activate(walletconnect);
    };

    return { handleWalletConnect };
};
