import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  let [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (data) => {
    if (data.password != confirmPassword) {
      alert("Password and ConfirmPassword do not match!");
      return;
    }

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/users/register`, data)
      .then((response) => {
        console.log("User Register !");
        alert("Registered successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error : ", error);
      })
      .finally(() => {
        reset();
      });
  }; 
  return (
    <div className="w-screen h-screen  flex items-center justify-center">
      <div className="px-9 py-4 border-[3px] rounded-[20px] bg-gray-200 dark:bg-gray-800 shadow-customShadow1">
        <div className="flex justify-center">
          <h1 className="font-bold text-[35px] text-gray-800 dark:text-slate-200">Register</h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          action="#"
          method="post"
          className="space-y-4 mt-4"
        >
          <div className="flex">
            <div className="text-left w-[200px]">
              <label
                htmlFor="firstName"
                className="mb-2 dark:text-gray-400 text-lg"
              >
                First Name
              </label>
              <input
                id="firstName"
                className="border bg-gray-50 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="text"
                placeholder="First Name"
                required
                {...register("firstName", {
                  pattern: {
                    value: /^[a-zA-Z][a-zA-Z'-]*$/,
                    message: "*Invalid Name",
                  },
                })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-[14px]">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="text-left w-[200px] ml-6">
              <label
                htmlFor="lastName"
                className="mb-2 dark:text-gray-400 text-lg"
              >
                Last Name
              </label>
              <input
                id="lastName"
                className="border bg-gray-50 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="text"
                placeholder="Last Name"
                required
                {...register("lastName", {
                  pattern: {
                    value: /^[a-zA-Z][a-zA-Z'-]*$/,
                    message: "*Invalid Last Name",
                  },
                })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-[14px]">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="text-left">
            <label htmlFor="email" className="mb-2 dark:text-gray-400 text-lg">
              Email
            </label>
            <input
              id="email"
              className="border bg-gray-50 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
              type="email"
              placeholder="Email"
              required
              {...register("email", {
                pattern: {
                  value: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
                  message: "*Invalid Email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-[14px]">{errors.email.message}</p>
            )}
          </div>
          <div className="text-left">
            <label
              htmlFor="password"
              className="mb-2 dark:text-gray-400 text-lg"
            >
              Password
            </label>
            <input
              id="password"
              className="border bg-gray-50 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
              type="password"
              placeholder="Password"
              required
              {...register("password", {
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                  message: "*Invalid password",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-[14px]">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="text-left">
            <label
              htmlFor="confirmPassword"
              className="mb-2 dark:text-gray-400 text-lg"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              className="border bg-gray-50 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
              type="password"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
            type="submit"
          >
            SIGN UP
          </button>
        </form>

        <div className="flex flex-col mt-4 items-center justify-center text-sm">
          <h3>
            <span className="cursor-default dark:text-gray-300">
              Already registered?
            </span>
            <Link
              to={"/"}
              className="group text-blue-400 transition-all duration-100 ease-in-out"
              href="#"
            >
              <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Log In
              </span>
            </Link>
          </h3>
        </div>

        <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm dark:text-slate-200">
          <p className="cursor-default">
            By registering, you agree to our
            <a
              className="group text-blue-400 transition-all duration-100 ease-in-out"
              href="#"
            >
              <span className="m-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Terms
              </span>
            </a>
            and
            <a
              className="group text-blue-400 transition-all duration-100 ease-in-out"
              href="#"
            >
              <span className="m-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Privacy Policy
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
