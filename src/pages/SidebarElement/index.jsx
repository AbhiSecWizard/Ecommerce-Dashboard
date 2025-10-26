import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { RiProductHuntFill } from "react-icons/ri";
import { MdTextsms } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";

import { NavLink } from 'react-router-dom'
export const SidebarElement = ()=>{
  
  const [activeTab,setActiveTab]= useState(false);
  const [isToggleSubMenu, setIsToggleSubMenu]= useState(false);
  const isOpenSubMenu = (index)=>{
    setActiveTab(!index)
    setIsToggleSubMenu(!isToggleSubMenu)
  }
  return (
    <div className="flex h-[calc(100vh-64px)]">
      <div className="flex flex-col w-64  bg-gray-900  p-1 rounded">
 {/* Dashboard */}
        <div className="h-auto bg-gray-900 text-white flex flex-col mt-2">
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <RiDashboardFill size={22} />
    <span className="text-lg">Dashboard</span>
    <span size={22} className="ml-auto"><MdKeyboardArrowRight/></span>
  </NavLink>
        </div>
    {/* Products */}
     <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2 ${activeTab===0 ? "active" : ""}`} onClick={()=>isOpenSubMenu(0)}>
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <RiProductHuntFill size={22} />
    <span className="text-lg">Products</span>
    <span size={22} className="ml-auto"><MdKeyboardArrowRight/></span>
  </NavLink>
        </div>
          <ul className={`flex flex-col  text-white p-2 ml-7 rounded-md ${activeTab===0 ? "open" : "close"}`}>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product List</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product View</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product Upload</NavLink></li>
      </ul>
        <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2 `}>
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <BsCartPlusFill size={22}/>
    <span className="text-lg">Orders</span>
    <span size={22} className="ml-auto"><MdKeyboardArrowRight/></span>
  </NavLink>
        </div>
        <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2`}>
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <MdTextsms size={22}/>
    <span className="text-lg">Messages</span>
    <span size={22} className="ml-auto"><MdKeyboardArrowRight/></span>
  </NavLink>
        </div>
     
         <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2 `}>
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <IoNotifications size={22}/>
    <span className="text-lg">Notificatoins</span>
    <span size={22} className="ml-auto"><MdKeyboardArrowRight/></span>
  </NavLink>
        </div>
         <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2`}>
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <IoMdSettings size={22}/>
    <span className="text-lg">Settings</span>
    <span size={22} className="ml-auto"><MdKeyboardArrowRight/></span>
  </NavLink>
        </div>
        <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2`}>
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <MdTextsms size={22}/>
    <span className="text-lg">Messages</span>
    <span size={22} className="ml-auto"><MdKeyboardArrowRight/></span>
  </NavLink>
        </div>
         <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2 `}>
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <IoNotifications size={22}/>
    <span className="text-lg">Notificatoins</span>
    <span size={22} className="ml-auto"><MdKeyboardArrowRight/></span>
  </NavLink>
        </div>
         <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2 `}>
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <IoMdSettings size={22}/>
    <span className="text-lg">Settings</span>
    <span size={22} className="ml-auto"><MdKeyboardArrowRight/></span>
  </NavLink>
        </div>
     <div className="h-full p-2">
       <div className="h-full bg-blue-300 text-white flex justify-center items-center font-bold text-2xl rounded-md hover:bg-blue-400 cursor-pointer">
         <h1>LOGOUT</h1>
     </div>
     </div>
  
  
      </div>
  
 <div className="h-full bg-gray-400 p-2 w-full">
  <div className="h-[475px] rounded flex justify-center">
       <div className="h-[480px] w-[800px] bg-amber-700 grid grid-cols-2 grid-rows-2 gap-2 p-2">
  <div className="bg-amber-500 w-full h-full rounded flex items-center justify-center">Box 1</div>
  <div className="bg-blue-900 w-full h-full rounded flex items-center justify-center">Box 2</div>
  <div className="bg-red-500 w-full h-full rounded flex items-center justify-center">Box 3</div>
  <div className="bg-green-500 w-full h-full rounded flex items-center justify-center">Box 4</div>
</div>

        <div className="ml-2 h-[480px] w-[calc(100%-700px)] bg-yellow-700 flex justify-center items-center ">
          </div>               
  </div>
  <div className="nevigation height-full w-full mt-2 relative">
    <div className="h-16 w-full bg-gray-300 flex justify-center items-center">

    </div>
  </div>
</div>

</div>
    )
}