import { useEffect } from "react";
import { darkModeToggle } from "../../../store/darkModeSlice";
import { useDispatch, useSelector } from "react-redux";

const DarkMode = () => { 
  const darkMode = useSelector(state => state.darkMode.darkModeState);
  const dispatch = useDispatch();

  const toggle = () => { 
    dispatch(darkModeToggle()); 
  };

  useEffect(()=>{
    if(darkMode){
        document.body.classList.add("dark");
    }
    else{
      document.body.classList.remove("dark");
    }
  },[darkMode])

  return (
    <button
      class={`${
        darkMode ? "bg-slate-700 hover:bg-gray-600" : "bg-slate-100 hover:bg-gray-300"
      } w-12 h-12 rounded-md flex items-center justify-center`}
      onClick={toggle}
    >
      {darkMode ? (
        <span className="w-6 h-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#e3dddd"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="3.9839999999999995"
            >
              {" "}
              <g
                clip-path="url(#a)"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-miterlimit="10"
              >
                {" "}
                <path
                  d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  fill="#ffffff"
                  fill-opacity=".16"
                ></path>{" "}
                <path d="M12 19v4M12 1v4" stroke-linecap="round"></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="a">
                  {" "}
                  <path fill="#ffffff" d="M0 0h24v24H0z"></path>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g
                clip-path="url(#a)"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-miterlimit="10"
              >
                {" "}
                <path
                  d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  fill="#ffffff"
                  fill-opacity=".16"
                ></path>{" "}
                <path d="M12 19v4M12 1v4" stroke-linecap="round"></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="a">
                  {" "}
                  <path fill="#ffffff" d="M0 0h24v24H0z"></path>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
        </span>
      ) : (
        <span className="">
          <svg
            id="theme-toggle-dark-icon"
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
          </svg>
        </span>
      )}
    </button>
  );
};

export default DarkMode;