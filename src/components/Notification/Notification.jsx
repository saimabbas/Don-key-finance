import React from "react";
import { createPortal } from "react-dom";
import   "./notification.scss";

export const Notification = ({children, variant="green"}) => {

    return createPortal(
        <div className={`notification notification-${variant}`}>
            {children}
        </div>, document.body
    );
}