import React from "react";
import "./LoadingPage.scss"
import { Loader } from "components/Loader/Loader";

export const LoadingPage = () => {
  return (
    <div
      className="loadingpage"
    >
      <Loader />
    </div>
  );
};
