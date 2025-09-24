
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "./header.css";
import "../../index.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { Search } from "../Search/search";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import "../../App.css";
import ProfilePic from "../../assets/images/profile.jpg"
const iconCss = {
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: "rgba(0,0,251,0.09)", // hover color
  },
};

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [mode, setMode] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleMode = () => {
    setMode(!mode);
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

        {/* Menu Button */}
        <Button variant="text" onClick={handleMenu}>
          {menu ? <MdOutlineMenu size={28} /> : <MdMenuOpen size={28} />}
        </Button>

        {/* Search Box */}
        <Search />
      </div>

      {/* Right Section (Buttons) */}
      <div className="flex flex-row gap-3">
        <IconButton sx={iconCss} onClick={handleMode}>
          {mode ? <CiLight /> : <MdOutlineDarkMode />}
        </IconButton>

        <IconButton sx={iconCss}>
          <MdOutlineMailOutline />
        </IconButton>

        <IconButton sx={iconCss}>
          <IoCartOutline />
        </IconButton>

        <IconButton sx={iconCss}>
          <FaRegBell />
        </IconButton>
         
         <div>
             <div className="h-12 w-12 bg-blue-500 w-2 rounded-full relative flex flex-row items-center justify-center left-3 top-0 border-2 border-white">
               <img src={ProfilePic}alt="" className="h-10 w-10 rounded-full"/>
              </div>              
         </div>
      

      </div>
    </div>
  );
};
