/* eslint-disable jsx-a11y/alt-text */
import clsx from "clsx";
import React from "react";
import { useToggle } from "../../hooks";
import Panel from "../Panel/Panel";
function drag(ev) {
  ev.dataTransfer.setData("protocol", ev.target.id);
}

const Protocol = ({
  name,
  onClose,
  openedPanel,
  showOnToolbar,
  description,
  website,
  icon
}) => {

  const [dragging, enableDragging, disableDragging] = useToggle(false);
  if (!showOnToolbar) {
    return null;
  }
  return (
    <li className={clsx("protocol-list-item", { dragging })}>
      <img
        src={icon}
        style={{maxWidth: 58}}
        draggable
        id={name}
        onDragStart={(e) => {
          drag(e);
          enableDragging();
        }}
        onMouseEnter={disableDragging}
      />
      <div className="protocol-list-item-tooltip">{name}</div>
      <Panel
        icon={icon}
        isOpen={openedPanel === name}
        onClose={onClose}
        title={name}
        url={website}
        desc={description}
      />
    </li>
  );
};

export default React.memo(Protocol);
