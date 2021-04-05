import { useAutocomplete } from "@material-ui/lab";
import { getUserSettings, saveUserSettings } from "actions/userActions";
import { useUserSettings } from "hooks/useUserSettings";
import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Onboard5Icon } from "./Onboard5Icon";
import { OnboardLayout } from "./OnboardLayout";

const options = [
    {
        value: "high",
        label: "High",
    },
    {
        value: "moderate",
        label: "Moderate",
    },
    {
        value: "low",
        label: "Low",
    },
];

const findItem = (val: string) => {
    const index = options.findIndex((item) => item.value === val);
    return index > -1 ? options[index] : null;
};

export const Onboarding8 = () => {
    const [risk_limit, setRiskLimit] = useUserSettings("risk_limit");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserSettings(true));
    }, []);
    const handleSave = async () => {
        dispatch(saveUserSettings());
    };




    return (
        <OnboardLayout progress={90} icon={<Onboard5Icon />}>
            <div className="row">
                <div className="col-12 col-sm-9">
                    <h3>Your Attitude to Risk</h3>
                    <p className="text-muted">
                        How much do you plan to deposit into your BYield account
                        over the course of the year?
                    </p>
                    <div className="row">
                        <div className="col-12">
                            <Select
                                value={risk_limit ? findItem(risk_limit) : null}
                                onChange={(val) => {
                                    if (val) {
                                        setRiskLimit(val.value);
                                    }
                                }}
                                placeholder="Please Select"
                                options={options}
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary50: "rgba(255,202,0,0.5)",
                                        primary75: "rgba(255,202,0,0.75)",
                                        primary25: "rgba(255,202,0,0.25)",
                                        primary: "rgba(255,202,0,1)",
                                        danger: "#222",
                                        dangerLight: "rgba(255,202,0,0.2)",
                                    },
                                })}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end  mt-5 mt-sm-4">
                <Link onClick={handleSave} to={`/onboarding/9`} className="onboard-next">
                    <FaChevronRight size={22} />
                </Link>
            </div>
        </OnboardLayout>
    );
};
