import React from "react";

export const EthereumIcon = () => {
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
                    fill="#F7F7F7"
                    stroke="#8C8C8C"
                    strokeWidth={2} />
                <path
                    transform="matrix(-1 0 0 1 35.813 13.035)"
                    fill="url(#prefix__pattern0_ether)"
                    d="M0 0h16.756v27.319H0z" />
            </g>
            <defs>
                <pattern
                    id="prefix__pattern0_ether"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use
                        xlinkHref="#prefix__image0_ether"
                        transform="scale(.01087 .00667)" />
                </pattern>
                <image
                    id="prefix__image0_ether"
                    width={92}
                    height={150}
                    xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>
    );
};
