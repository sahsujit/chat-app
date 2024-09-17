import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideNav";

const DashboardLayout = () => {

  return (
    <>
      <Stack direction="row">
        <SideBar />
        <Outlet />
      </Stack>

    </>
  );
};

export default DashboardLayout;
