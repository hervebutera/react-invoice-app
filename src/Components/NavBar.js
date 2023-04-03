import logo from "../Assets/imgs/logo.jpg";
import sun from "../Assets/imgs/sun.png";
import user from "../Assets/imgs/user.png";
import moon from "../Assets/imgs/moon.png";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeToggleHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="flex flex-row lg:flex-col">
      <img className="w-14 z-10" src={logo} alt="logo" />
      <div className="w-screen  h-14  bg-sideBar_light_background dark:bg-sideBar_dark_background -ml-6 lg:-mt-14 lg:ml-0 lg:w-14 lg:h-screen lg:rounded-r-xl">
        <div className="float-right w-26 lg:float-none lg:w-14 lg:h-26 lg:absolute lg:bottom-0">
          <div className="flex flex-row   lg:flex-col ">
            <img
              className="w-5 h-5 m-4 cursor-pointer"
              src={theme === "light" ? moon : sun}
              onClick={themeToggleHandler}
              alt="theme icon"
            />
            <div className=" py-4 px-5 border-l border-l-profileImg_separator lg:border-l-0 lg:border-t lg:border-t-profileImg_separator  lg:px-4">
              <img className="w-6" src={user} alt="user"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;