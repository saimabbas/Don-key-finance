import { OnboardLayout } from "./OnboardLayout";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Onboard5Icon } from "./Onboard5Icon";
import { BYieldIcon } from "../../components/Icons/BYieldIcon";
import { TrueIcon } from "../../components/Icons/TrueIcon";
import { InvestmentCheckbox } from "./InvestmentCheckbox";
import { YearnIcon } from "../../components/Icons/YearnIcon";
import { EthereumIcon } from "../../components/Icons/EthereumIcon";
import { USDTIcon } from "../../components/Icons/USDTIcon";
import { AAVEIcon } from "../../components/Icons/AAVEIcon";
import { DAIicon } from "../../components/Icons/DAIicon";
import { SUSDIcon } from "../../components/Icons/SUSDIcon";
import { Link } from "react-router-dom";
import { getUserSettings, saveUserSettings } from "actions/userActions";
import { useUserSettings } from "hooks/useUserSettings";
import { useDispatch } from "react-redux";

export const Onboarding5 = () => {
    const [planned_investments, setPlannedInvestment] = useUserSettings(
        "planned_investments"
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserSettings(true));
    }, []);
    const handleSave = async () => {
        dispatch(saveUserSettings());
    };

    const hasInvestment = (val: string) => {
        return planned_investments.includes(val);
    };
    const toggle = (val: string) => () => {
        setPlannedInvestment((old) => {
            if(!old){
                return val;
            }
            const arr = old.split(",");
            const index = arr.indexOf(val);
            if (index > -1) {
                arr.splice(index, 1);
            } else {
                arr.push(val);
            }
            return arr.join(",");
        });
    };

    return (
        <OnboardLayout progress={60} icon={<Onboard5Icon />}>
            <div className="row">
                <div className="col-sm-10 col-12 mb-3 mb-sm-0">
                    <h3>Planned Investments</h3>
                    <p className="text-muted">
                        In which instruments do you plan to trade? Please select
                        one or more relevant answer
                    </p>
                    <div className="row">
                        <div className="col-12 col-lg-12 col-xl-6">
                            <InvestmentCheckbox
                                checked={hasInvestment("BYield")}
                                onClick={toggle("BYield")}
                                icon={<BYieldIcon />}
                                text="BYield"
                            />
                        </div>
                        <div className="col-12 col-lg-12 col-xl-6">
                            <InvestmentCheckbox
                                checked={hasInvestment("True")}
                                onClick={toggle("True")}
                                icon={<TrueIcon />}
                                text="True"
                            />
                        </div>
                        <div className="col-12 col-lg-12 col-xl-6">
                            <InvestmentCheckbox
                                checked={hasInvestment("Yearn")}
                                onClick={toggle("Yearn")}
                                icon={<YearnIcon />}
                                text="Yearn.finance"
                            />
                        </div>
                        <div className="col-12 col-lg-12 col-xl-6">
                            <InvestmentCheckbox
                                checked={hasInvestment("Ethereum")}
                                onClick={toggle("Ethereum")}
                                icon={<EthereumIcon />}
                                text="Ethereum"
                            />
                        </div>
                        <div className="col-12 col-lg-12 col-xl-6">
                            <InvestmentCheckbox
                                checked={hasInvestment("USDT")}
                                onClick={toggle("USDT")}
                                icon={<USDTIcon />}
                                text="USDT Coin"
                            />
                        </div>
                        <div className="col-12 col-lg-12 col-xl-6">
                            <InvestmentCheckbox
                                checked={hasInvestment("AAVE")}
                                onClick={toggle("AAVE")}
                                icon={<AAVEIcon />}
                                text="AAVE"
                            />
                        </div>
                        <div className="col-12 col-lg-12 col-xl-6">
                            <InvestmentCheckbox
                                checked={hasInvestment("DAI")}
                                onClick={toggle("DAI")}
                                icon={<DAIicon />}
                                text="DAI"
                            />
                        </div>
                        <div className="col-12 col-lg-12 col-xl-6">
                            <InvestmentCheckbox
                                checked={hasInvestment("sUSD")}
                                onClick={toggle("sUSD")}
                                icon={<SUSDIcon />}
                                text="sUSD"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <Link to={`/onboarding/6`} onClick={handleSave} className="onboard-next">
                    <FaChevronRight size={22} />
                </Link>
            </div>
        </OnboardLayout>
    );
};
