import React, { useState } from "react";
import axios from "axios";
import api from "../../../auth/auth";

import ImageHandler from "../../Pages/ImageHandler";

const VehicleForm = () => {
  const vehicleType = "Cars";
  const [loading, setLoading] = useState(false)

  const [modelName, setModelName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [ratePerHr, setRatePerHr] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    if(!image){
      alert('Please select an image.')
      return;
    }

    const data = new FormData();
    data.append('modelName', modelName)
    data.append('vehicleNumber', vehicleNumber)
    data.append('ratePerHr', ratePerHr)
    data.append('vehicleType', vehicleType)
    data.append('image', image) 

    try {
      setLoading(true)

      await api.post(`${process.env.REACT_APP_BASE_URL}/vehicles/addNewVehicle`, data)
      .then((response) =>{
        console.log(response.data)
      })
      .catch((error) =>{
        console.error('Error adding vehicle:', error);
        alert('Failed to add vehicle. Please try again.');
      })
      
    } catch (error) {
      // console.error('Error adding vehicle:', error);
      // alert('Failed to add vehicle. Please try again.');
    }
    finally{
      setLoading(false)
      setImage(null)
      setModelName("")
      setRatePerHr("")
      setVehicleNumber("") 
      setPreview(false)
    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-300 p-6 rounded-md shadow-md space-y-4 max-h-full dark:bg-neutral-600"
    >
      <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
        Add {vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1, -1)}
      </h2>

      <div className="flex ">
        <div className="w-52">
          <ImageHandler type={vehicleType} setImage={setImage} preview={preview}/> 
        </div>
        <div className="bg-gray-200 dark:bg-neutral-500 ml-10 px-6 py-5 rounded-md shadow-sm flex flex-col justify-around">
          <div className="">
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Model Name
            </label>
            <input
              placeholder="Dodge Challenger"
              type="text"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              required
              className="mt-1 px-2 py-1 block w-full bg-gray-50 border dark:bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Vehicle Number
            </label>
            <input
              placeholder="MH45AJ4848"
              type="text"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
              className="mt-1 px-2 py-1 block w-full bg-gray-50 border dark:bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Rate per Hour
            </label>
            <input
              type="number"
              value={ratePerHr}
              onChange={(e) => setRatePerHr(e.target.value)}
              required
              className="mt-1 px-2 py-1 block w-full bg-gray-50 border dark:bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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