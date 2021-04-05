import { getUserSettings, saveUserSettings } from "actions/userActions";
import { useUserSettings } from "hooks/useUserSettings";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CaryBagIcon } from "./CaryBagIcon";
import { FarmerKnoweldge } from "./FarmerKnoweldge";
import { Onboard3Icon } from "./Onboard3Icon";
import { OnboardLayout } from "./OnboardLayout";

const GraduationHat = () => {
    return (
        <svg
            width={79}
            height={70}
            viewBox="0 0 79 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity={0.4} clipPath="url(#prefix__clip21)" fill="#000">
                <path d="M11.98 47.848c0-2.67 1.754-4.925 4.182-5.775V20.828l-4.182-1.691L47.67 5.094l35.69 14.043L47.67 33.18 20.345 22.475v19.598c2.429.85 4.182 3.105 4.182 5.775 0 2.444-1.472 4.543-3.583 5.534l3.475 10.223-3.966 1.298-2.2-6.471-2.199 6.47-3.966-1.297 3.475-10.223c-2.11-.991-3.583-3.09-3.583-5.534z" />
                <path d="M47.668 37.599l18.82-7.411v5.354c0 5.846-8.09 10.254-18.82 10.254s-18.821-4.408-18.821-10.254v-5.355l18.82 7.412z" />
            </g>
            <defs>
                <clipPath id="prefix__clip21">
                    <path
                        fill="#fff"
                        transform="matrix(-1 0 0 1 78.297 0)"
                        d="M0 0h77.487v70H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
const CourseFilesIcon = () => {
    return (
        <svg
            width="55"
            height="43"
            viewBox="0 0 55 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.9046 0H16.8191C17.6649 0 18.4462 0.451794 18.8682 1.18472L20.9938 4.0884C21.4158 4.82133 22.1972 5.27312 23.0429 5.27312H54.4999V38.4249C54.4999 40.166 53.0883 41.5775 51.3472 41.5775H3.65264C1.91154 41.5775 0.5 40.166 0.5 38.4249V8.95066C0.5 6.51377 0.876495 4.0914 1.61622 1.76947C1.88721 0.727391 2.82793 0 3.9046 0Z"
                fill="#C6C6C6"
            />
            <path
                d="M46.922 4.73438H5.41406V22.2686H46.922V4.73438Z"
                fill="#EBF0F3"
            />
            <path
                opacity="0.4"
                d="M52.1355 1.57812H39.1212C38.1957 1.57812 37.3552 2.11813 36.9707 2.95991L34.7436 7.83382C34.359 8.6756 33.5186 9.21561 32.5931 9.21561H0.5V39.2147C0.5 40.9558 1.91154 42.3674 3.65264 42.3674H51.3474C53.0885 42.3674 54.5 40.9558 54.5 39.2147V3.94261C54.5 2.63681 53.4413 1.57812 52.1355 1.57812Z"
                fill="#3F3F3F"
            />
        </svg>
    );
};

const NoKnowledgeIcon = () => {
    return (
        <svg
            width={65}
            height={64}
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path opacity={0.4} fill="url(#noknowledge)" d="M.5 0h64v64H.5z" />
            <defs>
                <pattern
                    id="noknowledge"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use xlinkHref="#no_knowledge" transform="scale(.005)" />
                </pattern>
                <image
                    id="no_knowledge"
                    width={200}
                    height={200}
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};

export const Onboarding4 = () => {
    const [farmer_knowledge, setfarmer_knowledge] = useUserSettings<
        "professional" | "academicdegree" | "noknowledge" | "attendedcourses",
        "farmer_knowledge"
    >("farmer_knowledge");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserSettings(true));
    }, []);
    const handleSave = async () => {
        dispatch(saveUserSettings());
    };


    return (
        <OnboardLayout progress={50} icon={<Onboard3Icon />}>
            <div className="row d-flex flex-wrap  justify-content-center  justify-content-sm-start">
                <div className="col-12 col-sm-11 col-lg-12 col-xl-11 mb-3 mb-sm-1">
                    <h3>Farmers Knowledge</h3>
                    <p className="text-muted">
                        What is your level of farmer and educational knowledge?
                        Please select one or more relevant answers
                    </p>
                    <div className="d-flex flex-wrap  justify-content-center  justify-content-sm-center">
                        <FarmerKnoweldge
                            active={farmer_knowledge === "professional"}
                            onClick={() => setfarmer_knowledge("professional")}
                            icon={<CaryBagIcon />}
                        >
                            Professional certificate or relevant work experience
                        </FarmerKnoweldge>
                        <FarmerKnoweldge
                            active={farmer_knowledge === "academicdegree"}
                            onClick={() =>
                                setfarmer_knowledge("academicdegree")
                            }
                            icon={<GraduationHat />}
                        >
                            Academic degree in financial related field
                        </FarmerKnoweldge>
                        <FarmerKnoweldge
                            active={farmer_knowledge === "attendedcourses"}
                            onClick={() =>
                                setfarmer_knowledge("attendedcourses")
                            }
                            icon={<CourseFilesIcon />}
                        >
                            I have attended farmers courses
                        </FarmerKnoweldge>
                        <FarmerKnoweldge
                            active={farmer_knowledge === "noknowledge"}
                            onClick={() => setfarmer_knowledge("noknowledge")}
                            icon={<NoKnowledgeIcon />}
                        >
                            I have no financial knowledge
                        </FarmerKnoweldge>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <Link to={`/onboarding/5`} onClick={handleSave} className="onboard-next">
                    <FaChevronRight size={22} />
                </Link>
            </div>
        </OnboardLayout>
    );
};
