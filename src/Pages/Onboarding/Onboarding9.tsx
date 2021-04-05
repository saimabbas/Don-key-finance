import Select from "react-select";
import { FaChevronRight } from "react-icons/fa";
import { Onboard9Icon } from "./Onboard9Icon";
import { OnboardLayout } from "./OnboardLayout";
import { Link } from "react-router-dom";
import { getUserSettings, saveUserSettings } from "actions/userActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUserSettings } from "hooks/useUserSettings";
import { isEmpty } from "lodash";
const options = [
    {
        value: "Value",
        label: "value",
    },
    {
        value: "Value2",
        label: "value2",
    },
    {
        value: "Value3",
        label: "value3",
    },
];
const findItem = (val: string) => {
    const index = options.findIndex((item) => item.value === val);
    return index > -1 ? options[index] : null;
};
export const Onboarding9 = () => {
    const [income, setIncome] = useUserSettings("income_sources");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserSettings(true));
    }, []);
    const handleSave = async () => {
        dispatch(saveUserSettings());
    };

    const getSelectedOptions = () => {
        return income
            .split(",")
            .map(findItem)
            .filter((item) => item) as any[];
    };

    return (
        <OnboardLayout progress={100} icon={<Onboard9Icon />}>
            <h3>Your Financial Status</h3>
            <p className="my-3">Your sources of income</p>
            <p className="text-muted">
                Your answer is considered as the source of funds for your
                investments in BYield
            </p>

            <Select
                className="w-100"
                placeholder="Select One or More"
                isMulti
                value={getSelectedOptions()}
                options={options}
                onChange={(val) => {
               
                    const str = val.map((item) => item.value).join(",");
                    setIncome(str);
                }}
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

            <div className="d-flex justify-content-end mt-5 mt-sm-4">
                <Link
                    to={`/onboarding/10`}
                    onClick={handleSave}
                    className="onboard-next"
                >
                    <FaChevronRight size={22} />
                </Link>
            </div>
        </OnboardLayout>
    );
};
