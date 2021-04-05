import { getUserSettings, saveUserSettings } from "actions/userActions";
import { useUserSettings } from "hooks/useUserSettings";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FarmerKnoweldge } from "./FarmerKnoweldge";
import { Onboard5Icon } from "./Onboard5Icon";
import { OnboardLayout } from "./OnboardLayout";

const WalletIcon = () => {
    return (
        <svg
            width={51}
            height={50}
            viewBox="0 0 51 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#prefix__clip0)">
                <path
                    d="M37.023 12.5h7.227a3.125 3.125 0 013.125 3.125V37.5c0 1.726-1.4 3.125-3.125 3.125l-.977-1.56v-17.19c0-1.726-.422-2.148-2.148-2.148h-4.102V12.5z"
                    fill="silver"
                />
                <path
                    d="M47.224 38.462a3.126 3.126 0 01-2.974 2.163l-.977-1.56v-17.19c0-1.726-.422-2.148-2.148-2.148h-4.102v-2.989h6.114a3.124 3.124 0 013.125 3.125v18.75c.336 0 .659-.054.962-.151z"
                    fill="#B2B2B2"
                />
                <path
                    d="M10.849 12.5v7.227H3.533C1.858 19.727.5 17.392.5 15.717v-.184A3.034 3.034 0 013.533 12.5h7.316z"
                    fill="silver"
                />
                <path
                    d="M10.849 16.737v2.989H3.533C1.858 19.726.5 17.39.5 15.716v-.184c0-.35.06-.684.168-.997.23 1.44 1.633 2.202 2.957 2.202h7.224z"
                    fill="#B2B2B2"
                />
                <path
                    d="M13 9.375V6.934c0-.378.306-.684.684-.684H27.94c.378 0 .684.306.684.684v12.793H25.5v-9.668a.684.684 0 00-.684-.684H13z"
                    fill="#B6B6B6"
                />
                <path
                    d="M16.809 3.125h14.94v16.602h-3.124V6.934a.684.684 0 00-.684-.684H16.125V3.809c0-.378.306-.684.684-.684z"
                    fill="#D0D0D0"
                />
                <path
                    d="M31.75 3.125h3.125v16.602H31.75V3.125z"
                    fill="#B6B6B6"
                />
                <path
                    d="M38 19.727h-3.125V3.125h2.441c.378 0 .684.306.684.684v15.918zM25.5 10.059v9.668H9.875v-9.668c0-.378.306-.684.684-.684h14.257c.378 0 .684.306.684.684z"
                    fill="#D0D0D0"
                />
                <path
                    d="M9.875 16.738H25.5v2.989H9.875v-2.989z"
                    fill="#B6B6B6"
                />
                <path
                    d="M25.5 16.738h3.125v2.989H25.5v-2.989z"
                    fill="#ADADAD"
                />
                <path
                    d="M28.625 16.738h3.125v2.989h-3.125v-2.989z"
                    fill="#B6B6B6"
                />
                <path
                    d="M31.75 16.738h3.125v2.989H31.75v-2.989z"
                    fill="#ADADAD"
                />
                <path
                    d="M34.875 16.738H38v2.989h-3.125v-2.989zM22.375 19.727H13v-5.665l1.562-1.562h6.25l1.563 1.563v5.664z"
                    fill="#B6B6B6"
                />
                <path d="M13 16.738h9.375v2.012H13v-2.012z" fill="#ADADAD" />
                <path
                    d="M44.25 21.875V43.75c0 1.726-1.4 3.125-3.125 3.125h-37.5A3.125 3.125 0 01.5 43.75V15.625c0 .863.35 1.645.915 2.21a3.115 3.115 0 002.21.915h37.5a3.125 3.125 0 013.125 3.125z"
                    fill="#E6E6E6"
                />
                <path
                    d="M17.688 16.38a.754.754 0 110-1.509.754.754 0 010 1.51z"
                    fill="#DCDCDC"
                />
                <path
                    d="M47.375 30.664v-7.227c1.726 0 3.125 1.4 3.125 3.125v.977c0 1.726-1.4 3.125-3.125 3.125z"
                    fill="#B2B2B2"
                />
                <path
                    d="M6.643 46.875H3.625A3.125 3.125 0 01.5 43.75V15.625c0 .863.35 1.645.915 2.21a3.115 3.115 0 002.104.913V43.75c0 1.726 1.399 3.125 3.124 3.125z"
                    fill="#D7D7D7"
                />
                <path
                    d="M41.125 22.559v20.507a.684.684 0 01-.684.684H3.625l-.106-.003a30.235 30.235 0 00-.082-.003H3.43A3.126 3.126 0 01.5 40.625V18.75a3.125 3.125 0 003.125 3.125h36.816c.378 0 .684.306.684.684z"
                    fill="silver"
                />
                <path
                    d="M3.519 21.873v21.874a30.235 30.235 0 00-.082-.003H3.43A3.126 3.126 0 01.5 40.625V18.75a3.125 3.125 0 003.019 3.123z"
                    fill="#B2B2B2"
                />
                <path
                    d="M41.125 37.402h3.125v-2.93h-3.125v2.93zm0-9.18v2.93h3.125v-2.93h-3.125z"
                    fill="#D7D7D7"
                />
                <path
                    d="M41.125 31.152v-2.93h-5.566a2.15 2.15 0 00-2.149 2.15v4.882a2.15 2.15 0 002.149 2.148h5.566v-2.93H36.34v-3.32h4.785z"
                    fill="#B2B2B2"
                />
                <path
                    d="M47.375 35.938H35.56a.684.684 0 01-.684-.684V30.37c0-.377.306-.683.684-.683h11.816c1.726 0 3.125-1.4 3.125-3.125v6.25c0 1.725-1.4 3.124-3.125 3.124z"
                    fill="#E6E6E6"
                />
                <path
                    d="M38 33.568a.754.754 0 110-1.51.754.754 0 010 1.51z"
                    fill="#B2B2B2"
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path
                        fill="#fff"
                        transform="translate(.5)"
                        d="M0 0h50v50H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

const CarryBagIcon = () => {
    return (
        <svg
            width={37}
            height={50}
            viewBox="0 0 37 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity={0.6}>
                <path
                    d="M18.5 49.517h18l-.38-12.799-17.62-1.644-1.031 8.253 1.031 6.19z"
                    fill="#383838"
                />
                <path
                    d="M.881 36.718L.5 49.516h18V35.075L.881 36.718z"
                    fill="#575757"
                />
                <path
                    d="M18.5 0L17.47 1.58 18.5 2.9a6.119 6.119 0 016.112 6.112v4.623h2.901V9.013C27.513 4.043 23.47 0 18.5 0z"
                    fill="#383838"
                />
                <path
                    d="M9.488 9.013v4.623h2.902V9.013A6.119 6.119 0 0118.5 2.901V0c-4.97 0-9.013 4.043-9.013 9.013z"
                    fill="#575757"
                />
                <path
                    d="M36.12 36.72l-.737-24.76H18.5l-1.031 12.8L18.5 36.72h17.62z"
                    fill="#B2B2B2"
                />
                <path
                    d="M.883 36.72h17.619V11.96H1.62L.883 36.72z"
                    fill="#C7C7C7"
                />
                <path
                    d="M27.172 21.242H18.5l-1.031 4.546 1.031 4.545h8.672v-9.09z"
                    fill="#F1F1F1"
                />
                <path
                    d="M9.828 21.242H18.5v9.091H9.828v-9.09z"
                    fill="#F9F9F9"
                />
            </g>
        </svg>
    );
};

const PigyBankIcon = () => {
    return (
        <svg
            width={56}
            height={53}
            viewBox="0 0 56 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M55.12 26.673h-3.176a1.73 1.73 0 01-1.678-1.27 17.248 17.248 0 00-6.244-9.26.324.324 0 01-.13-.257v-4.638a.657.657 0 00-.658-.654 4.191 4.191 0 00-3.92 2.67.331.331 0 01-.414.192 17.575 17.575 0 00-5.478-.869h-.917c-1.394 3.231-15.32 3.303-16.748.154C7.173 13.87.468 21.102.5 29.89c.023 6.194 3.346 11.619 8.32 14.64.552.336.888.932.888 1.573v6.46c0 .24.197.435.44.435h5.38a.44.44 0 00.407-.266l1.838-4.293a1.865 1.865 0 011.805-1.371h12.189c.846 0 1.586.563 1.804 1.371l1.839 4.293a.44.44 0 00.406.266h5.38c.244 0 .441-.195.441-.436v-6.46c0-.643.34-1.238.894-1.575a17.463 17.463 0 003.773-3.092c1.643-1.784 3.945-2.833 6.384-2.833h1.134c.273 0 .51-.186.573-.449l.066-.277a45.874 45.874 0 001.247-10.625.584.584 0 00-.589-.58z"
                fill="#BEBEBE"
            />
            <path
                d="M21.842 15.336h-7.29a.296.296 0 00-.298.294v2.16c0 .162.133.294.297.294h9.544c-2.574 0-.592-1.053-2.253-2.748zM33.493 15.336H27.23c-1.66 1.695-.558 2.748-3.132 2.748h9.395a.296.296 0 00.297-.294v-2.16a.296.296 0 00-.297-.294z"
                fill="#959595"
            />
            <path
                d="M55.118 26.673h-3.175a1.76 1.76 0 01-.703-.146 45.87 45.87 0 01-1.224 9.152l-.066.277a.587.587 0 01-.572.45h-1.135c-2.405 0-4.709.994-6.32 2.762a17.466 17.466 0 01-13.29 5.7l-14.396-.013A17.62 17.62 0 017.997 44c.268.185.542.362.822.532.552.336.887.931.887 1.572v6.46c0 .24.198.436.441.436h5.38a.44.44 0 00.406-.266l1.839-4.293a1.865 1.865 0 011.805-1.371h12.188c.846 0 1.587.562 1.805 1.371l1.838 4.293c.07.161.23.266.407.266h5.38c.243 0 .44-.195.44-.436v-6.46c0-.643.34-1.239.895-1.576a17.465 17.465 0 003.773-3.091c1.642-1.784 3.945-2.833 6.383-2.833h1.135c.273 0 .51-.186.573-.45l.065-.276a45.878 45.878 0 001.247-10.626.584.584 0 00-.588-.579z"
                fill="#A9A9A9"
            />
            <path
                d="M24.098 18.083c5.046 0 9.137-4.048 9.137-9.041 0-4.994-4.09-9.042-9.137-9.042-5.046 0-9.137 4.048-9.137 9.042 0 4.993 4.09 9.041 9.137 9.041z"
                fill="#D2D2D2"
            />
            <path
                d="M25.806.156a8.976 8.976 0 012.985 6.686c0 4.993-4.09 9.041-9.137 9.041a9.281 9.281 0 01-1.709-.158 9.157 9.157 0 006.152 2.357c5.046 0 9.137-4.048 9.137-9.042 0-4.416-3.199-8.092-7.428-8.884z"
                fill="#C7C7C7"
            />
            <path
                d="M24.095 15.254c3.467 0 6.278-2.782 6.278-6.213s-2.81-6.213-6.278-6.213c-3.468 0-6.279 2.782-6.279 6.213s2.811 6.213 6.279 6.213z"
                fill="#B5B5B5"
            />
            <path
                d="M23.176 15.187c.3.043.607.066.92.066 3.467 0 6.278-2.782 6.278-6.213a6.162 6.162 0 00-1.86-4.415c.18.71.276 1.452.276 2.217 0 3.757-2.317 6.98-5.614 8.345z"
                fill="#A0A0A0"
            />
            <path
                d="M25.043 12.066h-1.888a.45.45 0 01-.452-.447V6.467a.45.45 0 01.452-.447h1.888c.25 0 .452.2.452.447v5.152a.45.45 0 01-.452.447z"
                fill="#D2D2D2"
            />
            <path
                d="M44.024 16.145a.324.324 0 01-.13-.258v4.11c0 .455.373.824.834.824.46 0 .833-.37.833-.825V17.46a17.458 17.458 0 00-1.537-1.314zM35.782 20.115a.833.833 0 001.075-.477l2.458-6.374a.331.331 0 01-.415.193c-.426-.14-.86-.264-1.3-.371L35.3 19.05a.822.822 0 00.481 1.064z"
                fill="#A9A9A9"
            />
        </svg>
    );
};

const HomeIcon = () => {
    return (
        <svg
            width={54}
            height={53}
            viewBox="0 0 54 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity={0.7}>
                <path
                    d="M36.39 4.137v10.725l9.31 9.33V4.137h-9.31z"
                    fill="#2D2D2D"
                />
                <path
                    d="M46.923 22.183v29.261H7.04v-29.26l19.978-19.86 19.906 19.86z"
                    fill="#777"
                />
                <path
                    d="M46.925 22.183v29.261H27.02V2.324l19.905 19.86z"
                    fill="#5A5A5A"
                />
                <path
                    d="M53.503 26.534l-2.195 2.198L27.02 4.398 2.734 28.732.54 26.534 27.021 0l26.482 26.534z"
                    fill="#EDEDED"
                />
                <path
                    d="M23.826 34.43v9.848h-9.31V34.43l4.655-3.887 4.655 3.887z"
                    fill="#D3D3D3"
                />
                <path
                    d="M14.516 26.652h9.31v7.775h-9.31v-7.775z"
                    fill="#EDEDED"
                />
                <path
                    d="M39.447 34.43v9.848h-9.31V34.43l4.655-3.887 4.655 3.887z"
                    fill="#BDBDBD"
                />
                <path
                    d="M30.137 26.652h9.31v7.775h-9.31v-7.775z"
                    fill="#D6D6D6"
                />
                <path
                    d="M27.017 21.645a4.142 4.142 0 004.138-4.147 4.142 4.142 0 00-4.138-4.146 4.142 4.142 0 00-4.138 4.146 4.142 4.142 0 004.138 4.147z"
                    fill="#D3D3D3"
                />
                <path d="M.5 49.89h53V53H.5v-3.11z" fill="#BABABA" />
                <path
                    d="M27.02 21.645v-8.293a4.147 4.147 0 010 8.293z"
                    fill="#BDBDBD"
                />
                <path d="M27.02 49.89H53.5V53H27.02v-3.11z" fill="#9B9B9B" />
                <path
                    d="M51.306 28.732L27.02 4.398V0L53.5 26.534l-2.195 2.198z"
                    fill="#D6D6D6"
                />
            </g>
        </svg>
    );
};

export const Onboarding7 = () => {
    const [planned_investments, setPlannedInvestment] = useUserSettings(
        "farmer_purpose"
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserSettings(true));
    }, []);
    const handleSave = async () => {
        dispatch(saveUserSettings());
    };

    const getChecked = (val: string) => {
        return planned_investments.includes(val);
    };
    const toggle = (val: string) => () => {
        setPlannedInvestment((old) => {
            if (!old) {
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
        <OnboardLayout progress={80} icon={<Onboard5Icon />}>
            <div className="row">
                <div className="col">
                    <h3>Purpose of Farmers</h3>
                    <p className="text-muted">
                        What best describes your primary purpose of farmers with
                        us?
                    </p>
                    <div className="d-flex flex-wrap">
                        <FarmerKnoweldge
                            hasCheckBox
                            className="p-5"
                            active={getChecked("returns")}
                            onClick={toggle("returns")}
                            icon={<WalletIcon />}
                        >
                            Short term returns
                        </FarmerKnoweldge>
                        <FarmerKnoweldge
                            hasCheckBox
                            className="p-5"
                            active={getChecked("revenues")}
                            onClick={toggle("revenues")}
                            icon={<CarryBagIcon />}
                        >
                            Additional revenues
                        </FarmerKnoweldge>
                        <FarmerKnoweldge
                            hasCheckBox
                            className="p-5"
                            active={getChecked("planning")}
                            onClick={toggle("planning")}
                            icon={<PigyBankIcon />}
                        >
                            Future planning
                        </FarmerKnoweldge>
                        <FarmerKnoweldge
                            hasCheckBox
                            className="p-5"
                            active={getChecked("home")}
                            onClick={toggle("home")}
                            icon={<HomeIcon />}
                        >
                            Saving for home
                        </FarmerKnoweldge>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end  mt-3 mt-sm-0">
                <Link
                    onClick={handleSave}
                    to={`/onboarding/8`}
                    className="onboard-next"
                >
                    <FaChevronRight size={22} />
                </Link>
            </div>
        </OnboardLayout>
    );
};
