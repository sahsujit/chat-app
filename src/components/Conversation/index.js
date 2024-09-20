import { faker } from '@faker-js/faker';
import { Avatar, Box, Stack, styled, Badge, Typography, IconButton, Divider, TextField, InputAdornment, Tooltip, Fab } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {
    CaretDown,
    
    MagnifyingGlass,
    PaperPlaneTilt,
    Phone,
    Smiley,
    VideoCamera,
    Camera,
    File,
    Image,
    
  
    Sticker,
    User,
    LinkSimple
} from 'phosphor-react';
import React, { } from 'react'
import Message from './Message';
import EmojiPicker from 'emoji-picker-react';
import { ToggleSidebar } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';
// import { SimpleBarStyle } from '../Scrollbar';


const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));





const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px !important",
        paddingBottom: "12px !important",
    },
}));


const Actions = [
    {
        color: "#4da5fe",
        icon: <Image size={24} />,
        y: 102,
        title: "Photo/Video",
    },
    {
        color: "#1b8cfe",
        icon: <Sticker size={24} />,
        y: 172,
        title: "Stickers",
    },
    {
        color: "#0172e4",
        icon: <Camera size={24} />,
        y: 242,
        title: "Image",
    },
    {
        color: "#0159b2",
        icon: <File size={24} />,
        y: 312,
        title: "Document",
    },
    {
        color: "#013f7f",
        icon: <User size={24} />,
        y: 382,
        title: "Contact",
    },
];

const ChatInput = ({ openPicker, setOpenPicker }) => {
    const [openActions, setOpenActions] = React.useState(false);

    return (
        <StyledInput
            variant="filled"
            fullWidth
            placeholder="Write a message..."
            InputProps={{
                disableUnderline: true,
                startAdornment: (
                    <Stack sx={{ width: "max-content" }}>
                      <Stack
                        sx={{
                          position: "relative",
                          display: openActions ? "inline-block" : "none",
                        }}
                      >
                        {Actions.map((el) => (
                          <Tooltip placement="right" title={el.title}>
                            <Fab
                              onClick={() => {
                                setOpenActions(!openActions);
                              }}
                              sx={{
                                position: "absolute",
                                top: -el.y,
                                backgroundColor: el.color,
                              }}
                              aria-label="add"
                            >
                              {el.icon}
                            </Fab>
                          </Tooltip>
                        ))}
                      </Stack>
          
                      <InputAdornment>
                        <IconButton
                          onClick={() => {
                            setOpenActions(!openActions);
                          }}
                        >
                          <LinkSimple />
                        </IconButton>
                      </InputAdornment>
                    </Stack>
                  ),
                endAdornment: <InputAdornment>
                    <IconButton onClick={() => {
                        setOpenPicker(!openPicker);
                    }}>
                        <Smiley />
                    </IconButton>
                </InputAdornment>,



            }}
        />

    )
}

const Conversation = () => {
    const theme = useTheme()
    const [openPicker, setOpenPicker] = React.useState(false)
    const dispatch = useDispatch()

    return (
        <Stack
            height={"100%"}
            maxHeight={"100vh"}
            width={"auto"}
        >
            <Box
                p={2}
                width={"100%"}
                sx={{
                    backgroundColor:
                        theme.palette.mode === "light"
                            ? "#F8FAFF"
                            : theme.palette.background,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                }}
            >
                <Stack
                    alignItems={"center"}
                    direction={"row"}
                    sx={{ width: "100%", height: "100%" }}
                    justifyContent="space-between"
                >
                    <Stack
                        spacing={2}
                        direction={"row"}
                        onClick={()=>dispatch(ToggleSidebar())}
                    >
                        <Box>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                                variant="dot"
                            >
                                <Avatar
                                    alt={faker?.name.fullName()}
                                    src={faker.image.people()}
                                />
                            </StyledBadge>
                        </Box>

                        <Stack spacing={0.2}>
                            <Typography variant="subtitle2">
                                {faker?.name.fullName()}
                            </Typography>
                            <Typography variant="caption">Online</Typography>
                        </Stack>

                    </Stack>

                    <Stack direction={"row"} alignItems="centre" spacing={3}>

                        <IconButton>
                            <VideoCamera />
                        </IconButton>
                        <IconButton>
                            <Phone />
                        </IconButton>
                        <IconButton>
                            <MagnifyingGlass />
                        </IconButton>

                        <Divider orientation='vertical' flexItem />
                        <IconButton>
                            <CaretDown />
                        </IconButton>


                    </Stack>

                </Stack>

            </Box>

            <Box width={"100%"} sx={{
                position: "relative",
                flexGrow: 1,

                overflowY: "scroll",

                backgroundColor:
                    theme.palette.mode === "light"
                        ? "#F0F4FA"
                        : theme.palette.background,

                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            }}>

                <Message />



            </Box>

            <Box
                p={2}
                width={"100%"}
                sx={{
                    backgroundColor:
                        theme.palette.mode === "light"
                            ? "#F8FAFF"
                            : theme.palette.background,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                }}
            >
                <Stack
                    direction={"row"}
                    spacing={3}
                    alignItems={"centre"}

                >

                    {/* {chat input} */}

                    <Stack sx={{ width: "100%" }}>
                        <Box
                            style={{
                                zIndex: 10,
                                position: "fixed",
                                display: openPicker ? "inline" : "none",
                                bottom: 81,
                                right: 100,
                            }}
                        >

                            <EmojiPicker
                                theme={theme.palette.mode}
                            />
                        </Box>

                        <ChatInput

                            openPicker={openPicker}
                            setOpenPicker={setOpenPicker}
                        />
                    </Stack>

                    <Box sx={{
                        height: 48,
                        width: 48,
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5
                    }}>
                        <Stack sx={{ height: "100%" }}
                            alignItems={"center"}
                            justifyContent="center">
                            <IconButton>
                                <PaperPlaneTilt color='#fff' />
                            </IconButton>
                        </Stack>
                    </Box>



                </Stack>

            </Box>


        </Stack>
    )
}

export default Conversation