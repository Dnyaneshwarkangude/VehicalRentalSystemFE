import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import profile from "../assets/profile.svg";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const location = useLocation();
  const userData = useSelector((state) => state.user.userData);
  const isNewRideActive = location.pathname.startsWith("/dashboard/newRide");

  function capitalizeFirstLetter(name) {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
  return (
    <nav className="h-16 rounded-lg shadow-customShadow bg-gray-200 dark:shadow-customDarkShadow1 dark:bg-customBoxColor hover:bg-gra-300 flex justify-between">
      <div className="flex">
        {isNewRideActive && (
          <div className="flex items-center">
            <NavLink
              to={"newRide/newrideform"}
              className={({ isActive }) => `${
                isActive ? "shadow-customShadow border border-gray-300 dark:shadow-customDarkShadow1" : ""
              }        hover:shadow-customShadow bg-gray-100 rounded-md py-2 px-3 ml-16
                w-[150px] h-[43px] text-center dark:bg-gray-600 dark:text-slate-200 dark:border-none dark:hover:shadow-customDarkShadow1`}
            >
              New Ride
            </NavLink>

            <NavLink
              to={"newRide/qrform"}
              className={({ isActive }) => `${
                isActive ? "shadow-customShadow  border border-gray-300 dark:shadow-customDarkShadow1" : ""
              } hover:shadow-customShadow bg-gray-100 rounded-md py-2 px-3 ml-7
                w-[150px] h-[43px] text-center dark:bg-gray-600 dark:text-slate-200 dark:border-none dark:hover:shadow-customDarkShadow1`}
            >
              QR Code Forms
            </NavLink>
          </div>
        )}
      </div>

      <div className="flex items-center">
        {/* <span className="  font-semibold mr-4"> 
            Welcome {capitalizeFirstLetter(userData?.firstName)} {capitalizeFirstLetter(userData?.lastName)}
          </span> */}
        <div className="mr-4 rounded-lg shadow-md dark:shadow-customDarkShadow1">
          <DarkMode />
        </div>
        <div className="mr-4">
          <div className="bg-red-300 hover:bg-red-400 w-[55px] h-[55px] mr-2 rounded-full p-[12px] shadow-md dark:shadow-lg hover:cursor-pointer">
            <img src={profile} className=" h-10" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
