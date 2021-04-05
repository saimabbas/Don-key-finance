import React from "react";
import clsx from "clsx";


export const TabItem = ({
    icon,
    text,
    active,
    onClick,
}: {
    icon: any;
    text: string;
    active?: boolean;
    onClick: () => void;
}) => {
    return (
        <div onClick={onClick} className={clsx("tab_item", { active })}>
            <span className="tab_item_icon">{icon}</span>
            <span className="tab_item_text">{text}</span>
        </div>
    );
};
