import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import  api  from "../../auth/auth";
import { updateUserData } from '../../store/userSlice';
import { toast } from "react-toastify";

import noImage from "./assets/noImage.jpg";

function Setting() {
  const userData = useSelector(state => state.user.userData)
  const dispatch = useDispatch(); 
 
  const [imagePreview, setImagePreview] = useState(userData.profilePicture);

  const [detailsData, setDetailsData] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    phone: userData?.phone || "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  })

  const handleDetailsChange = (e) => {
    setDetailsData({
      ...detailsData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    })
  }

  const handlePictureUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if(file){ 
      const reader = new FileReader();
      reader.onloadend = () =>{
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }

    const data = new FormData();
    data.append('profileImage', file);
    uploadImage(data);
  }

  const uploadImage = async (data) =>{
      await api.post(`${process.env.REACT_APP_BASE_URL}/users/update-profile-picture`, data)
      .then((res) =>{ 
        const user = res.data.data;
        dispatch(updateUserData({user}));
        toast.success("Profile picture upload successfully",{
          className: "custom-toast-success",
          bodyClassName: "custom-toast-body",
          progressClassName: "custom-toast-progress",
        })
      })
  }


  const handleDetailsSubmit = async (e) => {
    e.preventDefault();
    
    await api.post(`${process.env.REACT_APP_BASE_URL}/users/update-user-data`, detailsData)
      .then((res) =>{ 
        const user = res.data.data;
        dispatch(updateUserData({user}));
        toast.success("Details updated successfully",{
          className: "custom-toast-success",
          bodyClassName: "custom-toast-body",
          progressClassName: "custom-toast-progress",
        })
    })
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // console.log("password data : ", passwordData);
  }
  return (
    <div className="">
      <h1 className="text-[28px] font-semibold ml-10 mt-4 dark:text-white">Profile settings</h1>

      <div className="flex flex-wrap flex-row gap-10 mt-8 ml-8">

        {/* profile picture */}
        <div className="flex justify-center items-center flex-col h-[300px] bg-gray-100 dark:bg-[#30303056]  border border-[#c0c4c5] border-1px rounded-[20px]">
          <div className="flex flex-col justify-center items-center py-[30px] px-[80px]">
            <img src={imagePreview ? imagePreview : noImage} 
            className="w-32 h-32 rounded-full " />
            <p className="font-semibold text-[20px] mt-2 dark:text-white">{`${userData.firstName} ${userData.lastName}`}</p>
          </div>
          <hr className="bg-[#c0c4c5] h-[2px] w-full" />
          <input
          type="file"
          id="profilePicture"
          name="profilePicture"
          accept="image/*"
          onChange={handlePictureUpload}
          hidden
          />
          <label htmlFor="profilePicture" className="text-blue-500 py-5 dark:text-blue-100 hover:cursor-pointer">Upload picture</label>
        </div>

        {/* profile details */}
        <div className="flex flex-grow flex-col mr-8 bg-gray-100 dark:bg-[#30303056] border border-[#c0c4c5] border-1px rounded-[20px]">
          <div className="mt-5 ml-7 mb-3 dark:text-white">
            <h1 className="font-semibold text-[20px]">Details</h1>
            <p>The information can be edited</p>
          </div>
          <hr className="bg-[#c0c4c5] h-[2px] w-full" />

          <div className="flex flex-row justify-around mt-4">
            <div className="mb-4 w-[300px]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={detailsData.firstName}
                onChange={handleDetailsChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-200"
                required
              />
            </div>

            <div className="mb-4 w-[300px]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
                htmlFor="lastName"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={detailsData.lastName}
                onChange={handleDetailsChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-200"
                required
              />
            </div>
          </div>

          <div className="flex flex-row justify-around mt-1">
            <div className="mb-4 w-[300px]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={detailsData.email}
                onChange={handleDetailsChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-200"
                required
              />
            </div>
            <div className="mb-4 w-[300px]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
                htmlFor="phone"
              >
                Phone number
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={detailsData.phone}
                onChange={handleDetailsChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-200"
                required
              />
            </div>
          </div>
          <hr className="bg-[#c0c4c5] h-[2px] w-full mt-4" />
          <div>
            <button className="bg-blue-500 px-4 py-1.5 mt-3 mb-3 ml-4 text-gray-100 rounded-lg "
              onClick={handleDetailsSubmit}
            >Save details</button>
          </div>
        </div>
      </div>

      {/* Password update */}
      <div className="flex flex-grow flex-col justify-start ml-8 mr-8 mt-10 bg-gray-100 dark:bg-[#30303056] border border-[#c0c4c5] border-1px rounded-[20px]">
        <div className="mt-5 ml-7 mb-3 dark:text-white">
          <h1 className="font-semibold text-[20px]">Password</h1>
          <p>Update password</p>
        </div>
        <hr className="bg-[#c0c4c5] h-[2px] w-full mb-5" />

        <div className="mb-3 ml-6 w-[500px]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
            htmlFor="oldPassword"
          >
            Old password
          </label>
          <input
            type="password"
            name="oldPassword"
            id="oldPassword"
            value={passwordData.oldPassword}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-200"
            required
          />
        </div>

        <div className="mb-4 ml-6 w-[500px]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
            htmlFor="newPassword"
          >
            New password
          </label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-200"
            required
          />
        </div>

        <div className="mb-3 ml-6 w-[500px]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
            htmlFor="confirmNewPassword"
          >
            Confirm new password
          </label>
          <input
            type="password"
            name="confirmNewPassword"
            id="confirmNewPassword"
            value={passwordData.confirmNewPassword}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-200"
            required
          />
        </div>

        <hr className="bg-[#c0c4c5] h-[2px] w-full mt-4" />
        <div>
          <button className="bg-blue-500 px-4 py-1.5 mt-3 mb-3 ml-4 text-gray-100 rounded-lg "
            onClick={handlePasswordSubmit}
          >Update</button>
        </div>
      </div>
    </div>
  );
}

export default Setting;
