import React from "react";

export const USDTIcon = () => {
    return <svg
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
            fill="#F9F9F9"
            stroke="#848484"
            strokeWidth={2} />
        <path
            transform="matrix(-1 0 0 1 37.676 15.824)"
            fill="url(#prefix__pattern0_usdt)"
            d="M0 0h21.41v21.41H0z" />
        <defs>
            <pattern
                id="prefix__pattern0_usdt"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <use xlinkHref="#prefix__image0_usdt" transform="scale(.00667)" />
            </pattern>
            <image
                id="prefix__image0_usdt"
                width={150}
                height={150}
                xlinkHref="data:image/png;base64,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" />
        </defs>
    </svg>;
};
