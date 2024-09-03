import { useEffect, useState } from "react"
import VehicleCard from "./VehicleCard"
import api from '../../../auth/auth.js'

const AllVehicles = ({vehicleType}) =>{
    const [data, setData] = useState([]);
    useEffect(() =>{
         const fetchData = async () =>{
            await api.get(`${process.env.REACT_APP_BASE_URL}/vehicles/getAll`)
            .then((res) =>{
                console.log(res.data);
                setData(res.data.data);
            }) 
            .catch((error) =>{
                console.log("Error in getting vehicles data", error);
            })
         }

         fetchData();
    },[])
    return (
        <div className="ml-2 flex flex-wrap gap-4 overflow-y-auto">
            { data.map((vehicle) => (
                <div key={vehicle._id} className="w-[calc(20%-1rem)]">
                    <VehicleCard  
                        data={vehicle}
                        
                    />
                </div>
            ))}
        </div>
    )
}


export default AllVehicles