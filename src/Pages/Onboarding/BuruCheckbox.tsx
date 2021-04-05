import clsx from "clsx";
import React from "react";

export const BuruCheckbox = ({
    className,
    checked,
    onClick,
}: {
    className?: string;
    checked?: boolean;
    onClick?: () => void;
}) => {
    return (
        <div

            onClick={onClick}
            className={clsx("burucheckbox",className)}
        >
            {checked && (
                <svg
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.187 0.776812C12.9273 0.517104 12.5063 0.517104 12.2465 0.776812L4.2796 8.74381L1.21724 5.68146C0.957563 5.42175 0.536545 5.42177 0.276812 5.68146C0.0171044 5.94114 0.0171044 6.36215 0.276812 6.62186L3.80938 10.1544C4.06899 10.4141 4.49031 10.4139 4.74981 10.1544L13.187 1.71724C13.4467 1.45756 13.4466 1.03652 13.187 0.776812Z"
                        fill="#FFCA00"
                    />
                </svg>
            )}
        </div>
    );
};
