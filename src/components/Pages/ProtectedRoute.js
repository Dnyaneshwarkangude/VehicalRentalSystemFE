import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({element}) =>{
    const status = useSelector(state => state.user.status)

    return status ? element : <Navigate to='/' />
    
}


export default ProtectedRoute;