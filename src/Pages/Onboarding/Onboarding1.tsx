import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import clsx from "clsx";
import { OnboardLayout } from "./OnboardLayout";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useUserSettings } from "hooks/useUserSettings";
import { getUserSettings, saveUserSettings } from "actions/userActions";
import { useInputState } from "hooks/useInputState";
import moment from "moment";

export const Onboarding1 = () => {
    const [firstname, setFirstname] = useUserSettings("firstname");
    const [lastname, setLastName] = useUserSettings("lastname");
    const [middleName, setMiddleName] = useUserSettings("middlename");

    const [date, setDate] = useInputState("");
    const [month, setMonth] = useInputState("");
    const [year, setYear] = useInputState("");
    const [birthdate, setBirthDate] = useUserSettings("birthdate");
    const [gender, setGender] = useUserSettings("gender");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserSettings(true));
        return () => {
            dispatch(saveUserSettings());
        }
    }, []);
    useEffect(() => {
        if (birthdate) {
            setDate(moment(birthdate).date().toString());
            setMonth((moment(birthdate).month() + 1).toString());
            setYear(moment(birthdate).year().toString());
        }
    }, [birthdate]);
    const handleSave = async () => {
        const dateString = `${year}-${month}-${date}`;
        if(date && month && year){
            setBirthDate(
                moment.utc(dateString).format()
            );
        }
       
       
    };

    return (
        <OnboardLayout progress={20}>
            <h3>Your Profile</h3>
            <p>This should match your ID or Passport</p>
            <div className="container paddingSet">
                <div className="row">
                    <label className="onboard-label col-2 d-flex align-items-center">
                        Name
                    </label>
                    <div className="col-10 col-sm-4 col-sm-4">
                        <input
                            className="onboard-input"
                            placeholder="First Name"
                            type="text"
                            value={firstname}
                            onChange={setFirstname}
                        />
                    </div>
                    <div className="col-10 offset-2 offset-sm-0  mt-3 mt-sm-0  col-sm-4">
                        <input
                            className="onboard-input"
                            placeholder="Middle Name"
                            type="text"
                            value={middleName}
                            onChange={setMiddleName}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-10 col-sm-4 offset-2">
                        <input
                            className="onboard-input "
                            value={lastname}
                            onChange={setLastName}
                            type="text"
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <label className="onboard-label col-2 d-flex align-items-center">
                        Gender
                    </label>
                    <div className="col-5 col-sm-4">
                        <div
                            onClick={() => setGender("male")}
                            className={clsx("input-radio", {
                                active: gender === "male",
                            })}
                        >
                            Male
                        </div>
                    </div>
                    <div className="col-5 col-sm-4">
                        <div
                            onClick={() => setGender("female")}
                            className={clsx("input-radio", {
                                active: gender === "female",
                            })}
                        >
                            Female
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <label className="onboard-label col-2 d-flex align-items-center">
                        Birthday
                    </label>
                    <div className="col-10 col-sm-8">
                        <div className="row">
                            <div className="col-12 mt-xl-0  mt-3 col-xl-4">
                                <input
                                    className="onboard-input"
                                    placeholder="dd"
                                    type="number"
                                    maxLength={2}
                                    value={date}
                                    onChange={setDate}
                                />
                            </div>
                            <div className="col-12  mt-3 mt-xl-0 col-xl-4">
                                <input
                                    className="onboard-input"
                                    placeholder="mm"
                                    type="number"
                                    maxLength={2}
                                    value={month}
                                    onChange={setMonth}
                                />
                            </div>
                            <div className="col-12 mt-3 mt-2 mt-xl-0 col-xl-4">
                                <input
                                    className="onboard-input"
                                    type="number"
                                    placeholder="yyyy"
                                    maxLength={4}
                                    value={year}
                                    onChange={setYear}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end mt-5">
                    <Link onClick={handleSave} to={`/onboarding/2`} className="onboard-next">
                        <FaChevronRight size={22} />
                    </Link>
                </div>
            </div>
        </OnboardLayout>
    );
};
