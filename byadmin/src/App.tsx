import React from "react";
import { Routes } from "routes";
import { ToastProvider } from "react-toast-notifications";
function App() {


  return (
    <div className="by__root">
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </div>
  );
}

export default App;
