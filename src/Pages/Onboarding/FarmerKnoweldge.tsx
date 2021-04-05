import React from "react";
import clsx from "clsx";
import { BuruCheckbox } from "./BuruCheckbox";
export const FarmerKnoweldge = ({
    icon,
    children,
    active,
    onClick,
    className,
    hasCheckBox,
}: {
    icon: React.ReactElement;
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
    className?: string;
    hasCheckBox?: boolean;
}) => {
    return (
        <div
            className={clsx(
                "selectable-item selectable-item-withicon",
                {
                    active,
                },
                className
            )}
            onClick={onClick}
        >
            {hasCheckBox && (
                <div style={{ position: "absolute", top: 5, right: 5 }}>
                    <BuruCheckbox checked={active} />
                </div>
            )}
            <div className="selectable-item_icon">{icon}</div>

            <div className="selectable-item_text">{children}</div>
        </div>
    );
};
