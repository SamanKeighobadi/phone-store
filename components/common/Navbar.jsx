import React from "react";

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
        <div className="relative text-center">
          <span>card icon</span>
          <div className="absolute top-0 left-0 w-5 h-5 bg-blue-800 rounded-3xl shadow-lg grid place-content-center">
            <span className=" text-white rounded-full text-sm ">2</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
