
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { login } from "../../store/userSlice";
import { updateAccessToken } from "../../store/authSlice";
import { useDispatch } from "react-redux";

const Login = () => { 
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/users/login`, data)
      .then((res) => {
        // console.log(res.data);
        return res?.data;
      })
      .then((res) => {
        // console.log(res);
        if (res?.data.user != null && res?.success) {
          const userData = res.data.user
          const accessToken = res.data.accessToken
          console.log(userData)
          dispatch(login({userData}))
          dispatch(updateAccessToken({accessToken}))
          navigate("/dashboard");
        } else {
          alert(res?.message);
        }
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      })
      .finally(() => {
        reset();
      });
  };

  return (
    // <div className="w-screen h-screen bg-gray-300 flex items-center justify-center">
    <div className="w-screen h-screen bg-gray-30 flex items-center justify-center">
      <div className="p-7 border-[3px] rounded-[20px] bg-gray-200 shadow-customShadow1 dark:border-none dark:shadow-customDarkShadow dark:bg-customBoxColor dark:text-slate-300">
        <div className="flex justify-center">
          <h1 className="font-bold text-[35px] text-gray-800 dark:text-slate-200">Login</h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          action="#"
          method="post"
          className="space-y-4 mt-2"
        >
          <div className="text-left">
            <label htmlFor="email" className="mb-2 dark:text-gray-400 text-lg">
              Email
            </label>
            <input
              id="email" 
              className="border p-3  bg-gray-50 dark:bg-gray-600 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
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
              className="border p-3 bg-gray-50 shadow-md dark:bg-gray-600 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
              type="password"
              placeholder="Password"
              required
              {...register("password", {})}
            />
          </div>
          <Link
            to={"/forgotPassword"}
            className="group text-blue-400 transition-all duration-100 ease-in-out"
            href="#"
          >
            <div className="text-right">
              <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Forget your password?
              </span>
            </div>
          </Link>
          <button
            className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
            type="submit"
          >
            LOG IN
          </button>
        </form>
        <div className="flex flex-col mt-4 items-center justify-center text-sm">
          <h3 className="dark:text-gray-300">
            Don't have an account?
            <Link
              to={"/register"}
              className="group text-blue-400 transition-all duration-100 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out m-2">
                Register
              </span>
            </Link>
          </h3>
        </div>
        <hr className="mt-1 h-0.5 bg-gray-400"></hr>
        <div className="flex items-center justify-center">
          <p>or </p>
        </div>
        <div
          id="third-party-auth"
          className="flex items-center justify-center mt-1 flex-wrap"
        >
          <button
            href="#"
            className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1 dark:bg-slate-400"
          >
            <img
              className="max-w-[25px]"
              src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
              alt="Google"
            />
          </button>
          <button
            href="#"
            className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1 dark:bg-slate-400"
          >
            <img
              className="max-w-[25px]"
              src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
              alt="Facebook"
            />
          </button>
        </div>
        <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm dark:text-slate-300">
          <p className="cursor-default">
            By signing in, you agree to our
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
              className="m-1 group text-blue-400 transition-all duration-100 ease-in-out"
              href="#"
            >
              <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Privacy Policy
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
