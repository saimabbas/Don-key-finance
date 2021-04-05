import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { ProgressBar } from "react-bootstrap";
import "./BalanceBar.scss";
import BalanceBarListItem from "./BalanceBarListItem";
import icon from "../../images/balance-bar/icon.svg"
import smile from "../../images/balance-bar/smile.svg"

export default function BalanceBar() {
  const [isListingVisible, setIsListingVisible] = useState(false);

  function toggleListingView() {
    setIsListingVisible((prevState) => !prevState);
  }

  return (
    <div className="balance-card">
      <div id="balance-bar-title" className="d-flex justify-content-between">
        <div className="color-gray-76 fw-700 font-size-13">Balance bar</div>
        <div onClick={toggleListingView} className="cursor-pointer">
          {isListingVisible ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </div>
      </div>
      <div className="balance-bar-main ">
        <div className="cursor-pointer d-flex justify-content-between">
          <span className="fw-700 font-size-14">$1000000</span>
          <span className="fw-700 font-size-10">USDT</span>
        </div>
        <div className="margin-top-7">
          <ProgressBar
            now={60}
            variant="warning"
            style={{ minWidth: "206px", height: 5 }}
          />
        </div>
        <div className="d-flex justify-content-end">
          <span className="font-size-8 font-a7a7a7 fw-700 margin-t-4">
            MAX 254000
          </span>
        </div>
        <div className="fw-700 font-size-13" >
          APY 30%
        </div>
      </div>
      {isListingVisible && (
        <div
          className="balance-listing-container"
        >
          <BalanceBarListItem icon={icon}/>
          <BalanceBarListItem icon={smile}/>
        </div>
      )}
    </div>
  );
}
