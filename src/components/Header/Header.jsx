import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "./header.css";
import "../../index.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";
import { Search } from "../Search/search";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlineDarkMode } from "react-icons/md";
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
  padding: "13px",
  margin: "6px",
};

export const Header = () => {
  // Profile Menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAccClose = () => {
    setAnchorEl(null);
  };

  // Sidebar Menu
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  // Dark/Light Mode
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
  };

  // Cart Menu (alag handler banaya)
  const [cartOpen, setCartOpen] = useState(false);
  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <NavLink to="/dashboard">
          <div className="relative flex items-end h-16 w-48 bg-transparent overflow-hidden rounded">
            <img
              src={Logo}
              alt="Logo"
              className="h-16 w-auto object-contain mb-1 mx-auto scale-200"
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
      <div className="flex flex-row gap-3">
        <div className="flex flex-row gap-1 pr-3">
          {/* Dark / Light Mode */}
          <IconButton sx={iconCss} onClick={handleMode}>
            {mode ? <CiLight /> : <MdOutlineDarkMode />}
          </IconButton>

          {/* Mail */}
          <IconButton sx={iconCss}>
            <MdOutlineMailOutline />
          </IconButton>

          {/* Cart */}
          <IconButton sx={iconCss} onClick={handleCartClick}>
            <IoCartOutline />
          </IconButton>

          {/* Notification */}
          <IconButton sx={iconCss}>
            <FaRegBell />
          </IconButton>
        </div>

        {/* Profile Section */}
        <Button variant="text">
          <div
            className="flex flex-row items-center gap-2 pr-4"
            onClick={handleClick}
          >
            {/* Dropdown Menu */}
     <Menu
  anchorEl={anchorEl}
  id="account-menu"
  open={open}
  onClose={handleAccClose}
  slotProps={{
    paper: {
      elevation: 0,
      sx: {
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
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
    },
  }}
  transformOrigin={{ horizontal: "right", vertical: "top" }}
  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
>
  <MenuItem onClick={handleAccClose}>
    <Avatar /> Profile
  </MenuItem>
  <MenuItem onClick={handleAccClose}>
    <Avatar /> My account
  </MenuItem>
  <Divider />
  <MenuItem onClick={handleAccClose}>
    <ListItemIcon>
      <PersonAdd fontSize="small" />
    </ListItemIcon>
    Add another account
  </MenuItem>
  <MenuItem onClick={handleAccClose}>
    <ListItemIcon>
      <Settings fontSize="small" />
    </ListItemIcon>
    Settings
  </MenuItem>
  <MenuItem onClick={handleAccClose}>
    <ListItemIcon>
      <Logout fontSize="small" />
    </ListItemIcon>
    Logout
  </MenuItem>
</Menu>
            {/* Profile Avatar */}
            <div className="h-12 w-12 bg-blue-500 rounded-full relative flex flex-row items-center justify-center left-3 top-0 border-2 border-white ">
              <img src={ProfilePic} alt="" className="h-10 w-10 rounded-full" />
            </div>

            {/* Profile Info */}
            <div className="cursor-pointer flex flex-col relative left-3 top-1 items-center justify-center">
              <h1 className="font-bold text-sm">Abhishek Yadav</h1>
              <p className="text-xs text-gray-500">@abhishek_yadav</p>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};
