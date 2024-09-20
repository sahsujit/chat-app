import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import {useTheme} from '@mui/material/styles'
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();

  const {sideBar} = useSelector((state)=>state.app)

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
     <Chats/>
     <Box
     sx={{
      height:"100%",
      width: sideBar.open
              ? `calc(100vw - 740px )`
              : "calc(100vw - 420px )",
      backgroundColor:
      theme.palette.mode === "light"
        ? "#FFF"
        : theme.palette.background.paper,
     }}
     >
      <Conversation/>
      
     </Box>

     {
      sideBar.open && <Contact/>
     }

    </Stack>
  );
};

export default GeneralApp;
