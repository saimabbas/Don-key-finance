import React from "react";

export const TrueIcon = () => {
    return (
        <svg
            width={54}
            height={53}
            viewBox="0 0 54 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g opacity={0.7}>
                <rect
                    x={-0.004}
                    y={1.414}
                    width={35.371}
                    height={35.583}
                    rx={9}
                    transform="scale(-1 1) rotate(44.855 -13.496 -31.277)"
                    fill="#F5F5F5"
                    stroke="#242424"
                    strokeWidth={2} />
                <path
                    transform="matrix(-1 0 0 1 37.676 15.824)"
                    fill="url(#prefix__pattern0_true)"
                    d="M0 0h21.41v21.41H0z" />
            </g>
            <defs>
                <pattern
                    id="prefix__pattern0_true"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use
                        xlinkHref="#prefix__image0_true"
                        transform="scale(.00667)" />
                </pattern>
                <image
                    id="prefix__image0_true"
                    width={150}
                    height={150}
                    xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>
    );
};
