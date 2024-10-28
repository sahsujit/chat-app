import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material'
import { ArrowLeft } from 'phosphor-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { UpdateSidebarType } from '../redux/slices/app'
import { useTheme } from "@mui/material/styles"
import { faker } from '@faker-js/faker'
import { Shared_docs, Shared_links } from '../data'
import { DocMsg, LinkMsg } from './Conversation/MsgTypes'

const SharedMessages = () => {
    const dispatch = useDispatch()
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                        <Typography variant="subtitle2">Shared</Typography>

                    </Stack>
                </Box>

                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Media" />
                    <Tab label="Links" />
                    <Tab label="Docs" />
                </Tabs>

                <Stack
                    sx={{
                        height: "100%",
                        position: "relative",
                        flexGrow: 1,
                        overflowY: "scroll",
                    }}
                    spacing={3}
                    padding={value === 1 ? 1 : 3}
                >

                    {(() => {
                        switch (value) {
                            case 0:

                                return (
                                    <Grid container spacing={2}>
                                        {[0, 1, 2, 3, 4, 5, 6].map((el) => (
                                            <Grid item xs={4}>
                                                <img
                                                    src={faker.image.sports()}
                                                    alt={faker.internet.userName()}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                );
                            case 1:
                          return Shared_links.map((el)=><LinkMsg el={el}/>);

                            case 2:
                               return Shared_docs.map((el)=><DocMsg el={el}/>);

                            default:
                                break;
                        }
                    })()}

                </Stack>
            </Stack>
        </Box>
    )
}

export default SharedMessages