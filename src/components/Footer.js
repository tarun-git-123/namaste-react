import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-blue-600 text-white flex justify-center items-center h-[50px] text-center">
        <p>@Copywrite 2024 Tarun</p>
    </div>
  );
};

export default Header;
