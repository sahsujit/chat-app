import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import { SimpleBarStyle } from "../../components/Scrollbar";


import React from 'react'
import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from "../../components/Search";
import { ChatList } from '../../data';
import ChatElement from '../../components/ChatElement';

const Chats = () => {
    const theme = useTheme()
    return (
       
        <>
           <Box
        sx={{
          position: "relative",
          height: "100%",
          width: 320 ,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,

          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* {!isDesktop && (
          // Bottom Nav
          <BottomNav />
        )} */}

        <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
          <Stack
            alignItems={"center"}
            justifyContent="space-between"
            direction="row"
          >
            <Typography variant="h5">Chats</Typography>

            <Stack direction={"row"} alignItems="center" spacing={1}>
              <IconButton
                // onClick={() => {
                //   handleOpenDialog();
                // }}
                sx={{ width: "max-content" }}
              >
                {/* <Users /> */}
              </IconButton>
              <IconButton sx={{ width: "max-content" }}>
                <CircleDashed />
              </IconButton>
            </Stack>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>
          <Stack spacing={1}>
            <Stack direction={"row"} spacing={1.5} alignItems="center">
              <ArchiveBox size={24} />
              <Button variant="text">Archive</Button>
            </Stack>
            <Divider />
          </Stack>
          <Stack sx={{ flexGrow: 1, overflowY:"scroll", height: "100%" }}>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                {/* <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  Pinned
                </Typography> */}
                {/* Chat List */}
                {ChatList.filter((el) => el.pinned).map((el, idx) => {
                  return <ChatElement {...el} />;
                })}
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  All Chats
                </Typography>
                {/* Chat List */}
                {ChatList.filter((el) => !el.pinned).map((el, idx) => {
                  return <ChatElement {...el} />;
                })}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
        </>
    )
}

export default Chats