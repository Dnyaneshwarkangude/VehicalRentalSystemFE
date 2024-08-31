import React from "react";
import { NavLink } from "react-router-dom"; 
import Logout from "../Profile/Logout";
import { useSelector } from "react-redux";

import activeRide from "./assets/activeRide.svg";
import activeRideWhite from './assets/activeRideWhite.svg' 
import history from "./assets/history.png";
import historyWhite from './assets/historyWhite.png'
import vehicle from "./assets/vehicle.png"
import vehicleWhite from './assets/vehicleWhite.png'
import plus from "./assets/plus.svg";
import plusWhite from './assets/plusWhite.svg'
import profile from "./assets/profile.svg"; 
import setting from "./assets/setting.png"; 
import settingWhite from './assets/settingWhite.png'
import dashboard from "./assets/dashboard.svg";
import dashboardWhite from './assets/dashboardWhite.svg'

function Sidebar() { 
  const isDark = useSelector(state => state.darkMode.darkModeState)

  return (
    <aside
      className="rounded-lg shadow-customShadow bg-gray-200 dark:shadow-customDarkShadow1 dark:bg-customBoxColor hover:bg-gra-300 h-[625px] w-[180px] left-2 top-2 flex flex-col"
    >
      <h1 className="text-[20px] font-bold mt-3 ml-2 py-1 px-3 w-[160px] bg-red-100 rounded-lg shadow-customShadow dark:shadow-customDarkShadow1">
        Vehicle Rental
      </h1>
      <div className="mt-8 w-[170px]">
        <div className="p-1 flex items-center">
          <img src={isDark ? dashboardWhite : dashboard} className={`${isDark ? 'w-[30px] h-[30px]' : ''}`} />
          <label className="font-bold text-[20px] ml-2 dark:text-slate-100">Dashboard</label>
        </div>
        <div className="mt-2 flex flex-col"> 
          <NavLink
            to={"newRide"}
            className={({ isActive }) => `${
              isActive ? " shadow-customShadow bg-gray-100 dark:shadow-customDarkShadow1" : ""
            }
            flex items-center rounded-lg hover:shadow-customShadow mt-2 ml-3 px-3 py-2 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-customBoxColor dark:hover:shadow-customDarkShadow1`}
          >
            <img src={isDark ? plusWhite : plus} className="w-6 h-6" />
            <span className="ml-2 dark:text-slate-200">New Ride</span>
          </NavLink>
          <NavLink
            to={"activeRide"}
            className={({ isActive }) =>
              `${
                isActive ? "shadow-customShadow bg-gray-100 dark:shadow-customDarkShadow1" : ""
              } flex items-center rounded-lg hover:shadow-customShadow mt-2 ml-3 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-customBoxColor dark:hover:shadow-customDarkShadow1`
            }
          >
            <img src={isDark ? activeRideWhite : activeRide} className={`w-8 h-8 ${isDark ? 'w-[24px] h-[24px] ml-2.5 mr-1' : 'ml-1.5'}`} />
            <span className="py-2 ml-1 dark:text-slate-200">Active Rides</span>
          </NavLink>
          <NavLink
            to={"history"}
            className={({ isActive }) =>
              `${
                isActive ? "shadow-customShadow bg-gray-100 dark:shadow-customDarkShadow1" : ""
              } flex items-center rounded-lg hover:shadow-customShadow mt-2 ml-3 px-3 py-2 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:shadow-customDarkShadow1 dark:bg-customBoxColor `
            }
          >
            <img src={isDark ? historyWhite : history} className="w-[22px]" />
            <span className="ml-[10px] dark:text-slate-200">History</span>
          </NavLink> 
          <NavLink
            to={"vehicles"}
            className={({ isActive }) =>
              `${
                isActive ? "shadow-customShadow bg-gray-100 dark:shadow-customDarkShadow1" : ""
              } flex items-center rounded-lg hover:shadow-customShadow mt-2 ml-3 px-3 py-2 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:shadow-customDarkShadow1 dark:bg-customBoxColor `
            }
          >
            <img src={isDark ? vehicleWhite : vehicle} className="w-[27px]" />
            <span className="ml-[8px] dark:text-slate-200">Vehicles</span>
          </NavLink>
        </div>
      </div>

      <div className="mt-12 w-[170px]">
        <div className="p-1 flex items-center">
          <img src={profile} className="w-8 h-8 ml-0.5" />
          <label className="font-bold text-[20px] ml-2 dark:text-slate-200">
            Profile
          </label>
        </div>
        <div className="flex flex-col">
        <NavLink
            to={"profile/setting"}
            className={({ isActive }) =>
              `${
                isActive ? "shadow-customShadow bg-gray-100 dark:shadow-customDarkShadow1" : ""
              } flex items-center rounded-lg hover:shadow-customShadow px-3 py-2 mt-6 ml-3 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:shadow-customDarkShadow1 dark:bg-customBoxColor `
            }
          >
            <img
              src={isDark ? settingWhite : setting}
              className="h-[22px] w-[22px]"
            />
            <span className="ml-3 dark:text-slate-200">Setting</span>
          </NavLink>  
          
          <Logout />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
