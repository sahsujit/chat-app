import { Box, IconButton, Stack,  Typography } from '@mui/material'
import { ArrowLeft } from 'phosphor-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { UpdateSidebarType } from '../redux/slices/app'
import { useTheme } from "@mui/material/styles"

import Message from './Conversation/Message'

const StarredMessages = () => {
    const dispatch = useDispatch()
    const theme = useTheme();
   


    return (
        <Box sx={{ width: 320, maxHeight: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                <Box
                    sx={{
                        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                        width: "100%",
                        backgroundColor:
                            theme.palette.mode === "light"
                                ? "#F8FAFF"
                                : theme.palette.background,
                    }}
                >
                    <Stack
                        sx={{ height: "100%", p: 2 }}
                        direction="row"
                        alignItems={"center"}
                        spacing={3}
                    >
                        <IconButton
                            onClick={() => {
                                dispatch(UpdateSidebarType("CONTACT"))

                            }}
                        >
                            <ArrowLeft />
                        </IconButton>
                        <Typography variant="subtitle2">Starred</Typography>

                    </Stack>
                </Box>

               

                <Stack
                    sx={{
                        height: "100%",
                        position: "relative",
                        flexGrow: 1,
                        overflowY:"scroll"
                       
                    }}
                    spacing={3}
                   
                >

                   <Message/>
                </Stack>
            </Stack>
        </Box>
    )
}

export default StarredMessages