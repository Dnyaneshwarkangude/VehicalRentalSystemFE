import { useState } from "react";
 
import { Outlet, NavLink } from "react-router-dom";

const Vehicle = () => {  
  const [selectedType, setSelectedType] = useState('cars'); 

  const handleDropdownChange = (event) => {
    setSelectedType(event.target.value);
  }; 

  return ( 
    <div className="">
      <div className="mt-1 ml-2">
        <select
          value={selectedType}
          onChange={handleDropdownChange}
          className="bg-white dark:bg-neutral-500 dark:text-white px-2 py-1 rounded-md border-none font-semibold shadow-md hover:cursor-pointer"
        >
          <option value="Cars">Cars</option>
          <option value="Bikes">Bikes</option>
        </select>

        <NavLink to={"add-vehicle"} 
          className="bg-white dark:bg-neutral-500 dark:text-white px-3 py-1 ml-12 rounded-md border-none font-semibold shadow-md"
        >
          Add New Vehicle
        </NavLink>

        <NavLink to={"all-vehicles"} 
          className="bg-white dark:bg-neutral-500 dark:text-white px-3 py-1 ml-12 rounded-md border-none font-semibold shadow-md"
        >
          Show Vehicles
        </NavLink> 
      </div>

      <div className="mt-4 overflow-y-auto"> 
        <Outlet/>
      </div>
    </div>
  ); 
};

export default Vehicle;
