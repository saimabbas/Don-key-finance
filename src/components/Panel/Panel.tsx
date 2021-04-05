/* eslint-disable jsx-a11y/alt-text */
import clsx from "clsx";
import React, { createContext, useContext, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ActionsUI } from "../ActionUI/ActionsUI";
import { useGraphMethods } from "../GraphProvider/GraphProvider";
import { SquareLine } from "../SquareLine/SquareLine";
import { useToggle } from "hooks";
import { Loader } from "components/Loader/Loader";

export type IPanelContext = {
  enableBlur: () => void;
  disableBlur: () => void;
}

const PanelContext = createContext<IPanelContext | null>(null);

export const usePanel = () => useContext(PanelContext) as IPanelContext;

const Panel = ({ isOpen, title, onClose, icon, url, desc }: any) => {
  const { getSelectedProtocol, divRef, getProtocol } = useGraphMethods();
  const selectedProtocol = getSelectedProtocol();
  const [selectedAction, setSelectedAction] = useState(null);
  const renderActionSelector = () => {
    if (selectedProtocol && selectedProtocol.lastProtocol) {
      const protocol = getProtocol(selectedProtocol.protocol);
      const lastprotcol = getProtocol(selectedProtocol.lastProtocol);

      return (
        <div className="panel_action">
          <div className="panel_action_img">
            <img className="img-fluid" src={lastprotcol.base64} />
          </div>
          <SquareLine color={lastprotcol.edgeColor} />
          {selectedAction ? (
            <div
              className="action_select"
              style={{
                color: "#fff",
                border: "none",
                background: `linear-gradient(to right, ${lastprotcol.edgeColor}, ${protocol.edgeColor})`,
              }}
            >
              {selectedAction}
            </div>
          ) : (
            <div className="action_select">Select action</div>
          )}
          <SquareLine color={protocol.edgeColor} />
          <div className="panel_action_img">
            <img className="img-fluid" src={protocol.base64} />
          </div>
        </div>
      );
    }
    return null;
  };

  const renderActions = () => {
    if (selectedProtocol && selectedProtocol.lastProtocol) {
      const protocol = getProtocol(selectedProtocol.protocol);

      const lastprotcol = getProtocol(selectedProtocol.lastProtocol);
      return (
        <ActionsUI
          onSelect={setSelectedAction}
          selectedAction={selectedAction}
          icon={icon}
          protocol={protocol}
          lastProtocol={lastprotcol}
        />
      );
    }
    return null;
  };

  const getPosition = () => {
    if (!divRef.current) {
      return {};
    }
    const rect = divRef.current.getBoundingClientRect();
    return { top: rect.top, bottom: 0, height: `calc(100% - ${rect.top}px)` };
  };

  const [isBlurred, enableBlur, disableBlur] = useToggle();
  const memoizedArgs = useMemo(() => {
    return { enableBlur, disableBlur };
  }, []);
  return createPortal(
    <PanelContext.Provider value={memoizedArgs}>
      <div
        className={clsx("panel", { panel_open: isOpen, })}
        style={getPosition()}
      >
        {isBlurred && <Loader style={{position: 'absolute', top: "-10%", left: "50%", transform: "translateX(-50%) scale(0.5)", zIndex: 100 }} />}
        <div className={clsx("d-flex  flex-column flex-val-1",{ "blur-2": isBlurred})}>
        <div className="panel_header">
          <div className="d-flex align-items-center">
            <h2>{title}</h2>
            <div className="panel_icon">
              <img className="img-fluid" src={icon} />
            </div>
          </div>
          <button onClick={onClose} id="close" className="btn_close">
            X
          </button>
          <div>
            <a
              className="panel_link"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {url}
            </a>
          </div>
          {/* <div className="desc panel-desc">{desc}</div> */}
          <div className="d-flex justify-content-center">
            {renderActionSelector()}
          </div>

          <div className="panel-triangle">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.37222 16.2436L9.5002 1.98614L17.6282 16.2436H1.37222Z"
                stroke="#C5C5C5"
              />
              <path
                d="M2.27344 15.668L16.7383 15.6914L17.4486 16.809L16.8659 19.1284H2.08203L1.46484 16.8304L2.27344 15.668Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        {renderActions()}
        </div>
        {/* <div className="panel_footer">
        <button className="btn btn_cancel">Cancel</button>
        <button className="btn btn_delete">Delete</button>
        <input type="submit" className="btn btn_save" value="Save" />
      </div> */}
      </div>
    </PanelContext.Provider>,
    document.body
  );
};




export default Panel;
