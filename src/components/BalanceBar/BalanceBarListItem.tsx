import React from "react";

export default function BalanceBarListItem(props: { icon: string }) {
  const { icon } = props;
  return (
    <div className="font-a7a7a7 d-flex justify-content-between balance-li">
      <span className="fw-400 font-size-10">
        <img src={icon} className="balance-li-icon" />
        DAI
      </span>
      <span className="fw-400 font-size-8">15.03.01</span>
      <span className="fw-400 font-size-10">SWAP</span>
      <span className="fw-400 font-size-8">$15000</span>
    </div>
  );
}
