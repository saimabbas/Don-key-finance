import React from "react";
import { createPortal } from "react-dom";

export const Tooltip = ({ direction, rect = {}, children }) => {
  const getTooltipStyles = () => {
    if (!rect.top && !rect.left) {
      return {};
    }
    switch (direction) {
      case "right": {
        return {
          top: rect.top + rect.height / 2,
          transform: `translate(0,-50%)`,
          left: rect.left + rect.width + 10,
        };
      }
      case "bottom": {
        return {
          top: rect.top + rect.height + 10,
          transform: `translate(-50%, 0)`,
          left: rect.left + rect.width / 2,
        };
      }
      case "left": {
        return {
          top: rect.top + rect.height / 2,
          transform: `translate(-100%,-50%)`,
          left: rect.left - 10,
        };
      }
      case "top": {
        return {
          top: rect.top - 10,
          transform: `translate(-50%,-100%)`,
          left: rect.left + rect.width / 2,
        };
      }
      default: {
        return { top: rect.top, left: rect.left };
      }
    }
  };

  return createPortal(
    <div
      style={{
        position: "fixed",
        zIndex: 100,
        borderRadius: 4,
        ...getTooltipStyles(),
      }}
      className={`bg-dark text-white p-3 tooltip--${direction}-center`}
    >
      {children}
    </div>,
    document.body
  );
};
