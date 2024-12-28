import React from "react";
import Home from "../pages/Home";
import { Outlet } from "react-router-dom";

const RootRouter = () => {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
};

export default RootRouter;
