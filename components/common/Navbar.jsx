import React from "react";
import {FiShoppingCart} from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-blue-600 h-14 sticky top-0 flex items-center justify-between px-5">
        <ul className="flex   text-white ">
          <li className="py-1 px-2">Home</li>
          <li className="py-1 px-2">Products</li>
          <li className="py-1 px-2">About </li>
          <li className="py-1 px-2">Contact </li>
        </ul>
        <div className="relative text-center w-10 h-10  grid place-content-center">
          <div className="text-3xl text-white    "><FiShoppingCart /></div>
          <div className="absolute top-0 right-0 w-5 h-5 text-xs bg-blue-800 rounded-3xl shadow-lg grid place-content-center">
            <span className=" text-white rounded-full  ">2</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
