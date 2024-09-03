
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"; 
import Navbar from "./Navbar/Navbar";

const Dashboard = () => { 
  return ( 
    <div className="flex h-screen w-screen dark:bg-custombgBlack">
      <div className="mt-2 ml-1">
        <Sidebar />
      </div>

      <div className="ml-2 mt-2 mr-1 w-full"> 
        <div className="">
          <Navbar/>
        </div> 
        <div className="rounded-lg shadow-customShadow bg-gray-200 dark:shadow-customDarkShadow dark:bg-customBoxColor h-[550px] mt-2.5 px-2 py-1 overflow-y-auto">
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
