import { IStoreState } from "interfaces";
import { LoadingPage } from "Pages/LoadingPage";
import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { RouteProps } from "react-router-dom";

export const withAuth = (element?: RouteProps["children"]) => {
  if (!element) {
    return element;
  }
  const NewComp = () => {
    const isLoggedIn = useSelector(
      (state: IStoreState) => state.auth.isLoggedIn
    );


    return (
      <>
        {!isLoggedIn && createPortal(<LoadingPage />, document.body)}
        {element}
      </>
    );
  };
  return <NewComp />;
};
