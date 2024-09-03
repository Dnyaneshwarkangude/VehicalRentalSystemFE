


// const VehicleCard = ({data}) =>{

//     return (
//         <div className="dark:bg-neutral-500 w-[200px] h-[220px] rounded-md flex flex-col">
//             <img src={data.vehicleImage}/>
//             <p>Model : {data.modelName}</p>
//             <p>rate : {data.ratePerHr}</p>
//         </div>
//     )
// }

// export default VehicleCard;


import { useState } from "react";
import api from '../../../auth/auth.js';

const VehicleCard = ({ data, onVehicleUpdate, onVehicleDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        modelName: data.modelName,
        ratePerHr: data.ratePerHr,
    });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleDelete = async () => {
        try {
            await api.delete(`${process.env.REACT_APP_BASE_URL}/vehicles/delete/${data.id}`);
            onVehicleDelete(data.id);
        } catch (error) {
            console.log("Error deleting vehicle", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`${process.env.REACT_APP_BASE_URL}/vehicles/update/${data.id}`, formData);
            setIsEditing(false);
            onVehicleUpdate(data.id, formData);
        } catch (error) {
            console.log("Error updating vehicle", error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="dark:bg-neutral-500 bg-gray-400 w-[215px] h-[330px] shadow-md rounded-md flex flex-col p-2">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="modelName"
                        value={formData.modelName}
                        onChange={handleChange}
                        className="mb-2 p-1"
                        placeholder="Model Name"
                    />
                    <input 
                        type="text"
                        name="ratePerHr"
                        value={formData.ratePerHr}
                        onChange={handleChange}
                        className="mb-2 p-1"
                        placeholder="Rate per Hour"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-1 rounded-md">
                        Save
                    </button>
                </form>
            ) : (
                <>
                    <img src={data.vehicleImage} alt={data.modelName} className="h-[120px] mb-2"/>
                    <p className="text-center dark:text-white text-[20px]">{data.modelName}</p>
                    <p className="dark:text-white mt-2">Rate : {data.ratePerHr} /Hr</p>
                    <p className="dark:text-white">Number : {data.vehicleNumber}</p>
                    {/* {data.availability ? <h3 className="bg-green-500">Available</h3> : <h3>Unavailable</h3>} */}
                    <div
                    className={`inline-block w-[100px] text-center mt-2 px-2 py-1 text-white text-sm font-medium rounded-full ${
                    data.availability ? 'bg-blue-600' : 'bg-red-500'
                    }`}
                    >
                        {data.availability ? 'Available' : 'Unavailable'}
                    </div>
                    <div className="flex justify-center mt-4">
                        <button onClick={handleEdit} className="bg-indigo-700 text-white w-[50px] p-1 rounded-md">
                            Edit
                        </button>
                        <button onClick={handleDelete} className="bg-slate-900 text-white w-[70px] ml-4 p-1 rounded-md">
                            Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default VehicleCard;
