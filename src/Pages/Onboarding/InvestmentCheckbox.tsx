import React from "react";
import { BuruCheckbox } from "./BuruCheckbox";

export const InvestmentCheckbox = ({
    icon,
    text,
    checked,
    onClick,
}: {
    icon: React.ReactNode;
    text: string;
    checked?: boolean;
    onClick?: () => void;
}) => {
    return (
        <div className="investment_box" onClick={onClick}>
            <span className="d-flex">
                <span className="investment_box_icon">{icon}</span>
                <span className="investment_box_text">{text}</span>
            </span>
            <span>
                <BuruCheckbox checked={checked} onClick={() => { }} />
            </span>
        </div>
    );
};
