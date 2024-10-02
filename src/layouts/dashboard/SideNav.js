import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import AntSwitch from "../../components/AntSwitch";

import Logo from "../../assets/Images/logo.ico";

import useSettings from "../../hooks/useSettings";
import { Nav_Buttons, Nav_Setting, Profile_Menu } from "../../data";
import { faker } from '@faker-js/faker';
import { useNavigate } from "react-router-dom";



const getPath = (index) => {
  switch (index) {
    case 0:
      return "/app";

    case 1:
      return "/group";

    case 2:
      return "/call";

    case 3:
      return "/settings";

    default:
      break;
  }
};

const SideBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const { onToggleMode } = useSettings();

  const [selectedTab, setSelectedTab] = useState(0)


  // const handleChangeTab = (index) => {
  //   dispatch(UpdateTab({ tab: index }));
  //   navigate(getPath(index));
  // };

  return (
    <Box
      sx={{
        height: "100vh",
        width: 100,

        backgroundColor:
          theme.palette.mode === "light"
            ? "#F0F4FA"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        py={3}

        alignItems={"center"}
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Stack alignItems={"center"} spacing={4}>
          <Box
            sx={{
              height: 64,
              width: 64,
              borderRadius: 1.5,
              backgroundColor: theme.palette.primary.main,
            }}
            p={1}
          >
            <img src={Logo} alt="Tawk" />
          </Box>
          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems={"center"}
            spacing={3}
          >
            {Nav_Buttons.map((el) => {
              return el.index === selectedTab ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  p={1}
                >
                  <IconButton
                    onClick={() => {
                      setSelectedTab(el.index);

                    }}
                    sx={{ width: "max-content", color: "#ffffff" }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelectedTab(el.index);
                    navigate(getPath(el.index))
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#080707"
                        : theme.palette.text.primary,
                  }}
                >
                  {el.icon}
                </IconButton>
              );
            })}
            <Divider sx={{ width: 48 }} />
            {Nav_Setting.map((el) => {
              return el.index === selectedTab ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  p={1}
                >
                  <IconButton
                    onClick={() => {
                      setSelectedTab(el.index);
                    }}
                    sx={{ width: "max-content", color: "#ffffff" }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelectedTab(el.index);
                    navigate(getPath(3))

                    // dispatch(UpdateTab(el.index));
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#080707"
                        : theme.palette.text.primary,
                  }}
                >
                  {el.icon}
                </IconButton>
              );
            })}
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <AntSwitch
            defaultChecked={theme.palette.mode === "dark"}
            onChange={onToggleMode}
          />
          {/* Profile Menu */}
          {/* <ProfileMenu /> */}
          <Avatar
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            src={faker.image.people()} />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el, index) => (
                <MenuItem key={index}
                  onClick={handleClose}
                >
                  <Stack

                    onClick={() => {
                      if (index === 0) {
                        navigate("/profile");
                      }
                      else if (index === 1) {
                        navigate("/settings");
                      }
                      else {
                        navigate("/auth/login");

                      }
                    }}
                    sx={{ width: 100 }}
                    direction="row"
                    alignItems={"center"}
                    justifyContent="space-between"
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>{" "}
                </MenuItem>
              ))}
            </Stack>
          </Menu>

        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
