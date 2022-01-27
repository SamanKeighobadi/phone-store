import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-blue-600 h-14 sticky top-0 flex items-center justify-between px-5">
        <ul className="flex   text-white ">
          <Link href={"/"}>
            <a className="py-1 px-2">Home</a>
          </Link>
          <Link href={"/products"}>
            <a className="py-1 px-2">Products</a>
          </Link>
          <Link href={"/about"}>
            <a className="py-1 px-2">About </a>
          </Link>
          <Link href={"/contact"}>
            <a className="py-1 px-2">Contact </a>
          </Link>
        </ul>
        <div className="relative text-center w-10 h-10  grid place-content-center">
         <Link href={"/shop-cart"} passHref>
         <div className="text-3xl text-white    ">
            <FiShoppingCart />
          </div>
         </Link>
          <div className="absolute top-0 right-0 w-5 h-5 text-xs bg-blue-800 rounded-3xl shadow-lg grid place-content-center">
            <span className=" text-white rounded-full  ">2</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
