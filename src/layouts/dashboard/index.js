import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideNav";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, socket } from "../../socket";
import { showSnackbar } from "../../redux/slices/app";



const DashboardLayout = () => {

  const dispatch = useDispatch()

  const {isLoggedIn} = useSelector((state) => state.auth)

  const {user_id} = useSelector((state) => state.auth);


  useEffect(()=>{

    if(isLoggedIn){
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };

      window.onload();

      if (!socket) {
        connectSocket(user_id);
      }


      socket.on("new_friend_request", (data) => {
        dispatch(
          showSnackbar({
            severity: "success",
            message: "New friend request received",
          })
        );
      });

      socket.on("request_accepted", (data) => {
        dispatch(
          showSnackbar({
            severity: "success",
            message: "Friend Request Accepted",
          })
        );
      });

      socket.on("request_sent", (data) => {
        dispatch(showSnackbar({ severity: "success", message: data.message }));
      });
    }

    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_sent");
     
    };

  },[isLoggedIn, socket])

  if(!isLoggedIn){
    return <Navigate to="/auth/login" />
  }

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
