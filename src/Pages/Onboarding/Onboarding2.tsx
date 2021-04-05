import { FaChevronRight } from "react-icons/fa";
import { OnboardLayout } from "./OnboardLayout";
import React, { useEffect, useMemo, useState } from "react";
import { useAutocomplete } from "@material-ui/lab";
import { countries } from "./countries";
import { BuruCheckbox } from "./BuruCheckbox";
import { Link } from "react-router-dom";
import { useUserSettings } from "hooks/useUserSettings";
import { useDispatch } from "react-redux";
import { getUserSettings, saveUserSettings } from "actions/userActions";

function countryToFlag(isoCode: string) {
    return typeof String.fromCodePoint !== "undefined"
        ? isoCode
              .toUpperCase()
              .replace(/./g, (char) =>
                  String.fromCodePoint(char.charCodeAt(0) + 127397)
              )
        : isoCode;
}

export const Onboarding2 = () => {
    const [checked, setChecked] = useState(false);
    const [isPassVisible, setIsPassVisible] = useState(false);

    const [address, setAddress] = useUserSettings("address");

    const [city, setcity] = useUserSettings("city");
    const [postalcode, setpostalcode] = useUserSettings("postalcode");
    const [country, setCountry] = useUserSettings("country");
    const [passportNumber, setPassportNum] = useUserSettings("passportnum");

    const[streetnum, setStreetNum] = useUserSettings("streetNo");

    const[birth, setBirth] = useUserSettings("birthsameascitizen");


    const contValue = useMemo(() => {
     
        const index = countries.findIndex((val) => val.label === country);
        console.log(index);
        if (index === -1) {
            return null
        }
       
        return countries[index];
    }, [country]);
    const {
        getRootProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
        value,
    } = useAutocomplete({
        id: "use-autocomplete-demo",
        options: countries,
        value: contValue,

        onChange: (e, val) => {
            console.log(val)
            if(val){
                setCountry(val.label)
            }
        },

        getOptionLabel: (option) => option.label,
    });

    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserSettings(true));
    }, []);

    const handleSave = async () => {
        dispatch(saveUserSettings());
    };

    return (
        <OnboardLayout progress={30}>
            <h3>Your Address</h3>
            <div className="container">
                <div className="row mt-5">
                    <label className="onboard-label col-3 d-flex align-items-center">
                        Address
                    </label>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-12 mt-sm-1 mt-lg-0  col-md-6 col-lg-8 col-xl-9">
                                <input
                                    className="onboard-input"
                                    placeholder="Street"
                                    type="text"
                                    value={address}
                                    onChange={setAddress}
                                />
                            </div>
                            <div className="col-12 mt-3 mt-sm-1 mt-lg-0  col-md-6 col-lg-4 col-xl-3">
                                <input
                                    className="onboard-input"
                                    placeholder="No"
                                    type="text"
                                    value={streetnum}
                                    onChange={setStreetNum}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <label className="onboard-label col-3 d-flex align-items-center">
                        City
                    </label>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <input
                                    className="onboard-input "
                                    placeholder="City"
                                    type="text"
                                    value={city}
                                    onChange={setcity}
                                />
                            </div>
                            <div className="col-12 col-lg-6 mt-3 mt-sm-1 mt-lg-0">
                                <input
                                    className="onboard-input "
                                    placeholder="Postal Code"
                                    type="text"
                                    value={postalcode}
                                    onChange={setpostalcode}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <label className="onboard-label col-3 d-flex align-items-center">
                        Country
                    </label>
                    <div className="col-9">
                        <div className="position-relative">
                            <div {...getRootProps()}>
                                {value && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "25%",
                                            left: 15,
                                        }}
                                    >
                                        {countryToFlag(value.code)}
                                    </div>
                                )}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "25%",
                                        right: 30,
                                    }}
                                >
                                    <svg
                                        width="10"
                                        height="7"
                                        viewBox="0 0 10 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 7L0.5 0L9.5 0L5 7Z"
                                            fill="#222222"
                                        />
                                    </svg>
                                </div>
                                <input
                                    {...getInputProps()}
                                    className="onboard-input px-5 cursor-pointer"
                                    placeholder="Choose a Country"
                                    type="text"
                                    autoComplete="new-password"
                                />
                            </div>
                            {groupedOptions.length > 0 ? (
                                <ul
                                    className="onboard-input-list"
                                    {...getListboxProps()}
                                >
                                    {groupedOptions.map((option, index) => (
                                        <li
                                            {...getOptionProps({
                                                option,
                                                index,
                                            })}
                                        >
                                            {countryToFlag(option.code)}{" "}
                                            {option.label}
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-9 offset-3 d-flex mt-3">
                        <BuruCheckbox
                            checked={birth}
                            onClick={() => {
                                setBirth(val => !val)
                            }}
                            className="mr-2"
                        />
                        <div>
                            This country is both my birthplace and country of
                            citizenship
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <label className="onboard-label col-3 d-flex align-items-center">
                        Passport Number
                    </label>
                    <div className="col-9 position-relative">
                        <input
                            onChange={setPassportNum}
                            value={passportNumber}
                            className="onboard-input"
                            autoComplete="new-password"
                            type={isPassVisible ? "text" : "password"}
                        />
                        <button
                            onClick={() => setIsPassVisible((val) => !val)}
                            className="btn btn-buru-link"
                        >
                            {isPassVisible ? "Hide" : "Show"}
                        </button>
                    </div>
                    <div className="col-9 offset-3 text-muted mt-2">
                        This number must perain to your country of citizenship
                    </div>
                </div>
                <div className="row justify-content-end mt-5">
                    <Link
                        to={`/onboarding/3`}
                        onClick={handleSave}
                        className="onboard-next"
                    >
                        <FaChevronRight size={22} />
                    </Link>
                </div>
            </div>
        </OnboardLayout>
    );
};
