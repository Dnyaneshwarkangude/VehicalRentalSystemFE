import { useState } from "react";

import VehicleForm from "./VehicleForm";
import AllVehicles from "./AllVehicles";

const Vehicle = () => { 
  const [selectedType, setSelectedType] = useState('cars');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleDropdownChange = (event) => {
    setSelectedType(event.target.value);
  };
 

  return ( 
    <div className="">
      <div className="mt-1 ml-2">
        <select
          value={selectedType}
          onChange={handleDropdownChange}
          className="bg-white px-2 py-1 rounded-md border-none font-semibold shadow-md hover:cursor-pointer"
        >
          <option value="Cars">Cars</option>
          <option value="Bikes">Bikes</option>
        </select>

        <button
          onClick={() => setIsFormVisible(true)}
          className="bg-white px-3 py-1 ml-12 rounded-md border-none font-semibold shadow-md"
        >
          Add New Vehicle
        </button>

        <button
          onClick={() => setIsFormVisible(false)}
          className="bg-white px-3 py-1 ml-12 rounded-md border-none font-semibold shadow-md"
        >
          Show Vehicles
        </button>
      </div>

      <div className="mt-4">
      {isFormVisible && <VehicleForm vehicleType={selectedType} />}
      {!isFormVisible && <AllVehicles vehicleType={selectedType}/>}
      </div>
    </div>
  ); 
};

export default Vehicle;
