import React, { useState } from "react";

import ImageHandler from "../../Pages/ImageHandler";

const VehicleForm = ({ vehicleType }) => {
  const [name, setName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [ratePerHr, setRatePerHr] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-300 p-6 rounded-md shadow-md space-y-4 max-h-full dark:bg-gray-700"
    >
      <h2 className="text-2xl font-semibold mb-4">
        Add {vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1, -1)}
      </h2>

      <div className="flex ">
        <div className="w-48 h-32">
          <ImageHandler type={vehicleType} />
        </div>
        <div className="bg-gray-200 ml-8 px-6 py-5 rounded-md shadow-sm flex flex-col justify-around">
          <div className="">
            <label className="block text-sm font-medium text-gray-700">
              Model Name
            </label>
            <input
              placeholder="Dodge Challenger"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 px-2 py-1 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vehicle Number
            </label>
            <input
              placeholder="MH45AJ4848"
              type="text"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
              className="mt-1 px-2 py-1 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Rate per Hour
            </label>
            <input
              type="number"
              value={ratePerHr}
              onChange={(e) => setRatePerHr(e.target.value)}
              required
              className="mt-1 px-2 py-1 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white mt-5 py-1 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Save
      </button>
    </form>
  );
};

export default VehicleForm;
