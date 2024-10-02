import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const isLoggedIn = true

const MainLayout = () => {
  if(isLoggedIn){
    return <Navigate to="/app" />
  }
  return (
    <>
      <div>Main Layout</div>

      <Outlet />
    </>
  );
};

export default MainLayout;
