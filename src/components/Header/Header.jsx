import { FaShieldAlt } from "react-icons/fa";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "./header.css";
import "../../index.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { MdMenuOpen, MdOutlineMenu, MdOutlineMailOutline, MdOutlineDarkMode } from "react-icons/md";
import { Search } from "../Search/search";
import { FaRegBell } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import "../../App.css";
import ProfilePic from "../../assets/images/profile.jpg";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const iconCss = {
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: "rgba(0,0,251,0.09)", // hover color
  },
  padding: "10px",
  margin: "4px",
};

export const Header = () => {
  // Profile Menu state
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const profileOpen = Boolean(profileAnchorEl);
  const handleProfileClick = (event) => setProfileAnchorEl(event.currentTarget);
  const handleProfileClose = () => setProfileAnchorEl(null);

  // Notification Menu state
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const notificationOpen = Boolean(notificationAnchorEl);
  console.log("Notification Open:", notificationOpen);
  const handleNotificationClick = (event) => setNotificationAnchorEl(event.currentTarget);
  console.log("Notification Anchor El:", notificationAnchorEl);
  const handleNotificationClose = () => setNotificationAnchorEl(null);

  // Sidebar Menu
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  // Dark/Light Mode
  const [mode, setMode] = useState(false);
  const handleMode = () => setMode(!mode);

  // Cart Menu (future use)
  const [cartOpen, setCartOpen] = useState(false);
  const handleCartClick = () => setCartOpen(!cartOpen);

  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <NavLink to="/dashboard">
          <div className="flex items-center h-16 w-40">
            <img
              src={Logo}
              alt="Logo"
              className="h-14 w-full object-contain mx-auto"
            />
          </div>
        </NavLink>

        {/* Sidebar Menu Button */}
        <Button variant="text" onClick={handleMenu}>
          {menu ? <MdOutlineMenu size={28} /> : <MdMenuOpen size={28} />}
        </Button>

        {/* Search Box */}
        <Search />
      </div>

      {/* Right Section */}
      <div className="flex flex-row gap-3 items-center">
        <div className="flex flex-row gap-1 pr-3">
          {/* Dark / Light Mode */}
          <IconButton sx={iconCss} onClick={handleMode}>
            {mode ? <CiLight size={22} /> : <MdOutlineDarkMode size={22} />}
          </IconButton>

          {/* Mail */}
          <IconButton sx={iconCss}>
            <MdOutlineMailOutline size={22} />
          </IconButton>

          {/* Cart */}
          <IconButton sx={iconCss} onClick={handleCartClick}>
            <IoCartOutline size={22} />
          </IconButton>

          {/* Notification */}
          <IconButton sx={iconCss} onClick={handleNotificationClick}>
            <FaRegBell size={22} />
          </IconButton>

          {/* Notification Menu */}
          <Menu
            anchorEl={notificationAnchorEl}
            id="notification-menu"
            open={notificationOpen}
            onClose={handleNotificationClose}
            PaperProps={{
              elevation: 3,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.15))",
                mt: 1.5,
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleNotificationClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              New Follower
            </MenuItem>
            <MenuItem onClick={handleNotificationClose}>
              <ListItemIcon>
                <FaShieldAlt />
              </ListItemIcon>
              Security Alert
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleNotificationClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Notification Settings
            </MenuItem>
          </Menu>
        </div>

        {/* Profile Section */}
        <div>
          <Button
            variant="text"
            onClick={handleProfileClick}
            className="flex items-center gap-2"
          >
            <Avatar src={ProfilePic} alt="Profile" />
            <div className="text-left">
              <h1 className="font-bold text-sm leading-tight">Abhishek Yadav</h1>
              <p className="text-xs text-gray-500">@abhishek_yadav</p>
            </div>
          </Button>

          {/* Profile Dropdown Menu */}
          <Menu
            anchorEl={profileAnchorEl}
            id="account-menu"
            open={profileOpen}
            onClose={handleProfileClose}
            PaperProps={{
              elevation: 3,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.15))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleProfileClose}>
              <Avatar /> My Account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleProfileClose}>
              <ListItemIcon>
                <FaShieldAlt />
              </ListItemIcon>
              Reset Password
            </MenuItem>
            <MenuItem onClick={handleProfileClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};
