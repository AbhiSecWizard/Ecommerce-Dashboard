import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar";
import { Outlet } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard";
export const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      
      {/* Navbar */}
      <Header />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar />
                 {/* <Dashboard/>   */}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <Outlet />
       </main>
         
      </div>
    </div>
  );
};
