import React from "react";

export const YearnIcon = () => {
    return (
        <svg
            width={54}
            height={53}
            viewBox="0 0 54 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect
                x={-0.004}
                y={1.414}
                width={35.371}
                height={35.583}
                rx={9}
                transform="scale(-1 1) rotate(44.855 -13.496 -31.277)"
                fill="#FAFAFA"
                stroke="#A9A9A9"
                strokeWidth={2} />
            <path
                transform="matrix(-1 0 0 1 37.86 14.492)"
                fill="url(#prefix__pattern0_yearn)"
                d="M0 0h21.739v21.739H0z" />
            <defs>
                <pattern
                    id="prefix__pattern0_yearn"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use
                        xlinkHref="#prefix__image0_yearn"
                        transform="scale(.02)" />
                </pattern>
                <image
                    id="prefix__image0_yearn"
                    width={50}
                    height={50}
                    xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>
    );
};
