import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Outlet } from "react-router-dom"
import { Sidebar } from "../Sidebar/index.jsx"
// import { DashboardDrop } from "../../components/MainContents/DashboardDrop/index.jsx" 
export const MainLayout = ()=>{
return (  
<div>

 
     <Header />
      <Outlet />
 
      <Sidebar/>     
  </div>
)
}
