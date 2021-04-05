import React from "react";

export const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          opacity={0.9}
          d="M.5 1L8 8.5m0 0l7.5 7.5M8 8.5L15.5 1M8 8.5L.5 16"
          stroke="#252525"
          strokeLinecap="round"
        />
      </svg>
    );
};
