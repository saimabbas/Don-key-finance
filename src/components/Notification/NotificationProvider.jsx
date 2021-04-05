import React, { createContext, useContext, useState } from "react";
import { Notification } from "./Notification";

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [content, setContent] = useState(null);
  const showNotification = ({ msg, duration = 3000, type }) => {
    setContent({ msg, duration, type });
    setTimeout(() => {
      setContent(null);
    }, duration);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {content && <Notification variant={content.type}>{content.msg}</Notification>}
    </NotificationContext.Provider>
  );
};

/**
 * useNotification
 * 
 * @param {*} { children }
 * @return {{showNotification: (val: any) => void}}  
 *
 */
export const useNotification = () => useContext(NotificationContext);
