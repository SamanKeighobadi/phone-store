import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="">
      <nav className="sticky top-0 flex h-14 items-center justify-between bg-sky-600 px-5">
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
        <div className="relative grid h-10 w-10  place-content-center text-center">
          <Link href={"/shop-cart"} passHref>
            <div className="text-3xl text-white    ">
              <FiShoppingCart />
            </div>
          </Link>
          <div className="absolute top-0 right-0 grid h-5 w-5 place-content-center rounded-3xl bg-blue-800 text-xs shadow-lg">
            <span className=" rounded-full text-white  ">2</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
