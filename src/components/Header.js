import{LOGO_URL} from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {

  const[btnNameReact, setBtnNameReact]= useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  //Subscribing to Store
  const cartItems = useSelector((store)=>store.cart.items);

    return (
      <div className="flex justify-between bg-orange-200 shadow-lg ">
        <div className="logo-container">
          <Link to="/">
            <img
              className="w-56 px-4 m-3 h-40"
              src={LOGO_URL}></img>
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about"> About Us </Link>
            </li>
            <li className="px-4">
              <Link to="/contact"> Contact Us </Link>
            </li>
            <li className="px-4">
              <Link to="/grocery"> Grocery </Link>
            </li>
            <li className="px-4 font-bold text-xl">
              <Link to="/cart">🛒 - ({cartItems.length})</Link>
            </li>
            <button className="login" onClick={()=>{
              btnNameReact == "Login" ? setBtnNameReact("Logout") : 
              setBtnNameReact("Login");
              }}>{btnNameReact}
            </button>

              <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
};


export default Header;