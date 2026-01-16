import { BsCartPlusFill } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { RiProductHuntFill } from "react-icons/ri";
import { MdTextsms } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import { NavLink } from 'react-router-dom'
import './index.css'
import Button from '@mui/material/Button';
import { Dashboard } from "../Dashboard";
export const SidebarElement = ()=>{


  const [activeTab, setActiveTab] = useState(null); 
  const [isToggleSubMenu,setIsToggleSubMenu]= useState(false);

  
  const isOpenSubMenu = (index)=>{
      // 👇 agar wahi tab dubara click hua, to toggle karo
      if(activeTab === index){
        setIsToggleSubMenu(prev => !prev);
      } else {
        setActiveTab(index);
        setIsToggleSubMenu(true);
      }
      console.log("Active Tab:", index);
      console.log("isToggleSubMenu:", !isToggleSubMenu);
      
  }
    return (
    <div className="flex h-[calc(100vh-64px)] transition-all">
       <div className="flex flex-col w-64  bg-gray-900  p-1 rounded overflow-y-auto custom-scroller">
 {/* Dashboard */}
        <div className="h-auto bg-gray-900 text-white flex flex-col mt-2">
  <NavLink 
    to="/dashboard" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <RiDashboardFill size={22} />
    <span className="text-lg">Dashboard</span>
    <span size={22} className={`ml-auto`}><MdKeyboardArrowRight/></span>
  </NavLink>
        </div>
     <div className={`h-auto bg-gray-900  text-white flex flex-col mt-2 `} onClick={()=>isOpenSubMenu(0)} >
  <NavLink 
    to="product" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <RiProductHuntFill color={`${activeTab == 0 && isToggleSubMenu ? "blue":""}`} size={22}/>
    <span className="text-lg">Products</span>
    <span size={22} className={`ml-auto transition-transform duration-300 ${activeTab == 0 && isToggleSubMenu ? "rotate-90":""}`}><MdKeyboardArrowRight/></span>
  </NavLink>
        </div>
  <ul className={`flex flex-col  text-white p-2 ml-7 rounded-md ${activeTab===0 && isToggleSubMenu ? 'open' : 'close'}`}>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product List</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product View</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product Upload</NavLink></li>
      </ul>
      {/* Orders */}
        <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2 `}  onClick={()=>isOpenSubMenu(1)} >
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <BsCartPlusFill color={`${activeTab == 1 && isToggleSubMenu ? "blue":""}`} size={22}/>
    <span className="text-lg">Orders</span>
    <span size={22} className={`ml-auto transition-transform duration-300 ${activeTab == 1 && isToggleSubMenu ? "rotate-90":""}`}><MdKeyboardArrowRight/></span>
  </NavLink>
     <ul className={`flex flex-col  text-white p-2 ml-7 rounded-md ${activeTab===1 && isToggleSubMenu ? 'open' : 'close'}`}>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product List</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product View</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product Upload</NavLink></li>
      </ul>
        </div>
      {/* massages */}
        <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2`} onClick={()=>isOpenSubMenu(2)}>
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <MdTextsms color={`${activeTab == 2 && isToggleSubMenu ? "blue":""}`} size={22}/>
    <span className="text-lg">Messages</span>
    <span size={22} className={`ml-auto transition-transform duration-300 ${activeTab == 2 && isToggleSubMenu ? "rotate-90":""}`}><MdKeyboardArrowRight/></span>
  </NavLink>
  <ul className={`flex flex-col  text-white p-2 ml-7 rounded-md ${activeTab===2 && isToggleSubMenu ? 'open' : 'close'}`}>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product List</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product View</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product Upload</NavLink></li>
      </ul>
        </div>
     
         <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2 `} onClick={()=>isOpenSubMenu(3)}>
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <IoNotifications color={`${activeTab == 3 && isToggleSubMenu ? "blue":""}`} size={22}/>
    <span className="text-lg">Notificatoins</span>
    <span size={22} className={`ml-auto transition-transform duration-300 ${activeTab == 3 && isToggleSubMenu ? "rotate-90":""}`}><MdKeyboardArrowRight/></span>
  </NavLink>
    <ul className={`flex flex-col  text-white p-2 ml-7 rounded-md ${activeTab===3 && isToggleSubMenu ? 'open' : 'close'}`}>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product List</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product View</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product Upload</NavLink></li>
      </ul>
  
        </div>
         <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2`} onClick={()=>isOpenSubMenu(4)}>
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <IoMdSettings color={`${activeTab == 4 && isToggleSubMenu ? "blue":""}`} size={22}/>
    <span className="text-lg">Settings</span>
    <span size={22} className={`ml-auto transition-transform duration-300 ${activeTab == 4 && isToggleSubMenu ? "rotate-90":""}`}><MdKeyboardArrowRight/></span>
  </NavLink>
     <ul className={`flex flex-col  text-white p-2 ml-7 rounded-md ${activeTab===4 && isToggleSubMenu ? 'open' : 'close'}`}>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product List</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product View</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product Upload</NavLink></li>
      </ul>
  
        </div>
        <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2`}onClick={()=>isOpenSubMenu(5)} >
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <MdTextsms color={`${activeTab == 5 && isToggleSubMenu ? "blue":""}`} size={22}/>
    <span className="text-lg">Messages</span>
    <span size={22} className={`ml-auto transition-transform duration-300 ${activeTab == 5 && isToggleSubMenu ? "rotate-90":""}`}><MdKeyboardArrowRight/></span>
  </NavLink>
  <ul className={`flex flex-col  text-white p-2 ml-7 rounded-md  ${activeTab===5 && isToggleSubMenu ? 'open' : 'close'}`}>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product List</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product View</NavLink></li>
        <li className=" hover:bg-gray-800 pl-4 py-3 rounded-md"><NavLink to="#">Product Upload</NavLink></li>
      </ul>
        </div>
         <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2 `} onClick={()=>isOpenSubMenu(6)}>
  <NavLink 
    to="#" 
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <IoNotifications color={`${activeTab == 6 && isToggleSubMenu ? "blue":""}`} size={22}/>
    <span className="text-lg">Notificatoins</span>
    <span size={22} className={`ml-auto transition-transform duration-300 ${activeTab == 6 && isToggleSubMenu ? "rotate-90":""}`}><MdKeyboardArrowRight/></span>
  </NavLink>
        </div>
         <div className={`h-auto bg-gray-900 text-white flex flex-col mt-2 `}>
  <NavLink 
    to="#"
    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-md transition"
  >
    <IoMdSettings color={`${activeTab == 7 && isToggleSubMenu ? "blue":""}`} size={22}/>
    <span className="text-lg">Settings</span>
    <span size={22} className={`ml-auto transition-transform duration-300 ${activeTab == 7 && isToggleSubMenu ? "rotate-90":""}`}><MdKeyboardArrowRight/></span>
  </NavLink>
        </div>
     <div className="h-full p-2">
       <div className="h-full bg-blue-300 text-white flex justify-center items-center font-bold text-2xl rounded-md hover:bg-blue-400 cursor-pointer">
         <h1>LOGOUT</h1>
     </div>
     </div>
  
  
      </div>

</div>
    )
}