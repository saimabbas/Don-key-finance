/* eslint-disable jsx-a11y/alt-text */
import React from "react";



export const ProtocolBar = ({  children }) => {
  return (
    <div className="protocol-list-wrapper">
      <ul className="protocol-list" id="protocolsList">
        <li className="protocol-list-item-header">Protocols</li>
        {children}
      </ul>
    </div>
  );
};
