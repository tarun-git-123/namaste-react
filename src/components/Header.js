import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import ThemeContext from "../utils/ThemeContext";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const {isDarkTheme,setDarkTheme} = useContext(ThemeContext);
  const dispatch = useDispatch();
  const handleLoginBtn = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    setDarkTheme(!isDarkTheme)
  };

  // console.log(isDarkMode);

  const onlineStatus = useOnlineStatus();

  // subscribing to the store using selector
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div
      className="flex justify-between shadow-lg h-21 ">
      <div className="logo-container">
        <img className="w-24 mb-2" src={LOGO_URL} />
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex">
          <li>
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
          </li>
          <li className="mx-4">Online Status: {onlineStatus ? "✔" : "🔴"}</li>
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-4 font-bold">
            <Link to="/cart">Cart ( {cartItem.length} items)</Link>
          </li>
          <button className="mr-4" onClick={handleLoginBtn}>
            {btnName}
          </button>
          <li className="mr-10 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
