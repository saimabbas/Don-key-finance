import React, { createContext, useContext, useMemo, useState } from "react";
import { Tooltip } from "./Tooltip";
import "./tooltip.scss";
const TooltipContext = createContext({});

const initialState = {
  anchorEl: null,
  rect: null,
  direction: null,
  msg: null,
  duration: null,
};

export const useTooltip = () =>  useContext(TooltipContext);

export const TooltipProvider = ({ children }) => {
  const [{ msg, rect, anchorEl, direction }, setState] = useState(initialState);

  const hideTooltip = () => {
    setState(initialState);
  };

  const showTooltip = ({ rect, anchorEl, direction, msg, duration }) => {
    if (typeof msg === "function") {
      msg = msg(hideTooltip);
    }
    setState({ rect, anchorEl, direction, msg, duration });
    if (typeof duration === "number") {
      setTimeout(() => {
        hideTooltip();
      }, duration);
    }
  };

  const getRect = () => {
    if (!msg) {
      return null;
    }
    if (!rect) {
      return anchorEl.getBoundingClientRect();
    }
    return rect;
  };

  const tooltipMethods = useMemo(() => {
    return {
      showTooltip,
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TooltipContext.Provider value={tooltipMethods}>
      {children}
      {msg && (
        <Tooltip rect={getRect()} direction={direction}>
          {msg}
        </Tooltip>
      )}
    </TooltipContext.Provider>
  );
};
