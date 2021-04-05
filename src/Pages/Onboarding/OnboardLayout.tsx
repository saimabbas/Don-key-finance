import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Logo } from "./Logo";
import React from "react";
import { OnboardingIcon } from "./OnboardingIcon";
import { CloseIcon } from "./CloseIcon";
const OnboardProgress = ({ progress }: { progress: number }) => {
    return (
        <div className="onboard-progress">
            <div className="onboard-icon onboard-icon--prev">
                <FaChevronLeft />
            </div>
            <div className="progress-back d-flex">
                <div
                    style={{ width: `${progress}%` }}
                    className="progress-front"
                ></div>
                <div className="progress-text">
                    <span className="font-weight-bold mr-1">{progress}% </span>
                    Completed Profile
                </div>
            </div>
            <div className="onboard-icon onboard-icon--next">
                <FaChevronRight />
            </div>
        </div>
    );
};

export const OnboardLayout = ({
    children,
    title = "A few clicks away from creating your profile",
    icon = <OnboardingIcon />,
    progress 
}: {
    children: React.ReactNode;
    title?: string;
    icon?: React.ReactElement;
    progress?: number
}) => {
    return (
        <div className="onboardlayout">
            <div className="container-fluid">
                <div className="row wrapperonboard">
                    <div className="onboard-sidebar col-sm-4 ">
                        <div className="p-4 py-5">
                            <Logo />
                        </div>
                        <div className="px-5 py-2   d-flex justify-content-center">
                            <p className="font-weight-bold">{title} </p>
                        </div>
                        <div className="onboard_icon d-flex justify-content-center">
                            {icon}
                        </div>
                    </div>
                    <div className="col-sm-8 onboard-main">
                        <div className="logosecond  p-2  p-sm-4 py-5">
                            <Logo />
                        </div>
                        <CloseIcon className="closeicon cursor-pointer" />
                        <div className="onboard-wrapper">{children}</div>
                        <div className="progress-wrapper">
                            {typeof progress !== "undefined" && <OnboardProgress progress={progress} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
