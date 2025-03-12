
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Profile/Login'
import Register from './components/Profile/Register';
import ActiveRide from './components/Dashboard/ActiveRides'
import History from './components/Dashboard/History'
import NewRide from './components/Dashboard/NewRide'
import Setting from './components/Profile/Setting'  
import NewRideForm from './components/Dashboard/NewRideForm';
import QRForm from './components/Dashboard/QRForm';
import Vehicle from './components/Dashboard/Vehicles/Vehicles';
import AllVehicles from './components/Dashboard/Vehicles/AllVehicles';
import VehicleForm from './components/Dashboard/Vehicles/VehicleForm';
import ForgotPassword from './components/Profile/ForgotPassword';
import ErrorPage from './components/Pages/ErrorPage';
import ServerError from './components/Pages/ServerError';

import store, {persistor} from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import ProtectedRoute from './components/Pages/ProtectedRoute'
import Layout from './components/Profile/Layout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
  createRoutesFromElements( 
      < > 
         <Route exact path='/' element={<Layout children={<Login/>}/>} />
         <Route exact path='/forgotPassword' element={<Layout children={<ForgotPassword/>}/>}/>
         <Route exact path='/register' element={<Layout children={<Register/>}/>} />
         <Route exact path='/dashboard' element={<ProtectedRoute element={<Dashboard/>}/>}> 
               <Route path='' element={<Navigate to={'activeRide'}/>}/>
               <Route path='activeRide' element={<ActiveRide/>}/>
               <Route path='history' element={<History/>}/>
               <Route path='newRide' element={<NewRide/>}>
                  <Route path='' element={<Navigate to={'newrideform'}/>}/>
                  <Route path='newrideform' element={<NewRideForm/>}/>
                  <Route path='qrform' element={<QRForm/>}/>
               </Route>
               <Route path='vehicles' element={<Vehicle/>}>
                  <Route path='' element={<Navigate to={'all-vehicles'}/>} />
                  <Route path='add-vehicle' element={<VehicleForm/>}/>
                  <Route path='all-vehicles' element={<AllVehicles/>}/>
               </Route>
               <Route path='profile/setting' element={<Setting/>}/>
         </Route>

         <Route path='*' element={<ErrorPage/>}/>  
      </ >
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
         <RouterProvider router={router}/>
         <ToastContainer/>
      </PersistGate>
  </Provider> 
);
 