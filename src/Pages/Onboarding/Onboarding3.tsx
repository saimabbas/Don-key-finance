import { getUserSettings, saveUserSettings } from "actions/userActions";
import clsx from "clsx";
import { useUserSettings } from "hooks/useUserSettings";
import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BuruCheckbox } from "./BuruCheckbox";
import { Onboard3Icon } from "./Onboard3Icon";
import { OnboardLayout } from "./OnboardLayout";

const Experience = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (val: string) => void;
}) => {
    return (
        <>
            {" "}
            <div className="d-flex">
                <div
                    onClick={() => onChange("few")}
                    className={clsx("selectable-item py-2 py-sm-3", {
                        active: value === "few",
                    })}
                >
                    1-10 times
                </div>

                <div
                    onClick={() => onChange("some")}
                    className={clsx("selectable-item py-2 py-sm-3", {
                        active: value === "some",
                    })}
                >
                    10-20 times
                </div>

                <div
                    onClick={() => onChange("many")}
                    className={clsx("selectable-item py-2 py-sm-3", {
                        active: value === "many",
                    })}
                >
                    20+ times
                </div>
            </div>
            <div className="d-flex align-items-center text-muted mt-2">
                <BuruCheckbox
                    checked={value === "never"}
                    onClick={() => {
                        onChange("never");
                    }}
                />
                <span className="ml-2">Never traded</span>
            </div>
        </>
    );
};

export const Onboarding3 = () => {
    const [equities, setEquities] = useUserSettings("exp_equities");
    const [cryptos, setCrypto] = useUserSettings("exp_crypto");
    const [leverage, setLeverage] = useUserSettings("exp_leveraged");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserSettings(true));
    }, []);
    const handleSave = async () => {
        dispatch(saveUserSettings());
    };

    return (
        <OnboardLayout
            title="Over th past three years, to what extent have you invested in/traded the following products?"
            icon={<Onboard3Icon />}
            progress={40}
        >
            <h3>Your Farmers Experience</h3>
            <p className="text-muted">
                Over th past three years, to what extent have you invested
                in/traded the following products?
            </p>

            <label className="onboard-label d-flex align-items-center">
                Equities{" "}
                <span className="text-muted ml-1 font-weight-normal">
                    (Stocks, ETFs)
                </span>
            </label>
            <Experience value={equities} onChange={setEquities} />
            <label className="onboard-label mt-4 d-flex align-items-center">
                Crypto Assets{" "}
                <span className="text-muted ml-1 font-weight-normal">
                    (Cryptocurrencies, Tokens)
                </span>
            </label>
            <Experience value={cryptos} onChange={setCrypto} />
  
            <label className="onboard-label mt-4 d-flex align-items-center">
                Leveraged Products{" "}
                <span className="text-muted ml-1 font-weight-normal">
                    (CFDs, Futures, Options)
                </span>
            </label>
            <Experience value={leverage} onChange={setLeverage} />
         
            <div className="d-flex justify-content-end">
                <Link onClick={handleSave} to={`/onboarding/4`} className="onboard-next">
                    <FaChevronRight size={22} />
                </Link>
            </div>
        </OnboardLayout>
    );
};
