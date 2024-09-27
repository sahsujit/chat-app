import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from "@mui/material/styles"
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search'
import { MagnifyingGlass, Plus } from 'phosphor-react'
import ChatElement from '../../components/ChatElement'
import { ChatList } from '../../data'
import CreateGroup from '../../sections/main/CreateGroup'

const Group = () => {
    const theme = useTheme()
    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () => {
      setOpenDialog(false);
    }
    const handleOpenDialog = () => {
      setOpenDialog(true);
    }
    return (
        <>
            <Stack direction="row" sx={{ width: "100%" }}>
                {/* Left */}
                <Box
                    sx={{
                        overflowY: "scroll",

                        height: "100vh",
                        width: 320,
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? "#F8FAFF"
                                : theme.palette.background,

                        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                    }}
                >
                    <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>

                        <Stack
                            alignItems={"center"}
                            justifyContent="space-between"
                            direction="row">
                            <Typography variant="h5">Groups</Typography>

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

                        <Stack
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            direction={"row"}
                        >
                            <Typography variant="subtitle2" sx={{}} component={Link}>
                                Create New Group
                            </Typography>
                            <IconButton
                            onClick={handleOpenDialog}
                            >
                                <Plus style={{ color: theme.palette.primary.main }} />
                            </IconButton>
                        </Stack>
                        <Divider />

                        <Stack sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>

                            <Stack spacing={2.4}>
                                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                                    Pinned
                                </Typography>
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

                        </Stack>

                    </Stack>

                </Box>

            </Stack>
            {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog} />}
        </>
    )
}

export default Group