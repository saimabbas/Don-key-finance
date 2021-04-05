import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { doLogin } from "./actions/authActions/authActions";
import { NotificationProvider } from "./components/Notification/NotificationProvider";
import { TooltipProvider } from "./components/TooltipProvider";
import { AuthToken } from "./constants";
import Routes from "./routes/Routes";
import { getAuthTokenForPublicAddress } from "./services/api";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
function getLibrary(provider) {
    return new Web3Provider(provider);
}
function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (typeof window !== "undefined" && window.ethereum) {
            window.ethereum.on("accountsChanged", async function (accounts) {
                // Time to reload your interface with accounts[0]!
                const { token, user } = await getAuthTokenForPublicAddress(
                    accounts[0]
                );
                localStorage.setItem(AuthToken, token);
                dispatch(doLogin(user));
            });
        }
    }, [dispatch]);
    return (
        <div>
            <Web3ReactProvider getLibrary={getLibrary}>
                <NotificationProvider>
                    <TooltipProvider>
                        <Routes />
                    </TooltipProvider>
                </NotificationProvider>
            </Web3ReactProvider>
        </div>
    );
}

export default App;
