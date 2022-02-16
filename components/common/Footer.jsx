import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="  bg-sky-600">
        <div className="xs:grid-cols-1 mx-9 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center text-stone-100">
          <div className="py-4">
            <ul className="">
              <li>
                <h5 className="text-xl font-semibold pb-5">About</h5>
              </li>
              <li>Services</li>
              <li>Products</li>
              <li>Buy</li>
              <li>Sell</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h5 className="text-xl font-semibold pb-5">Help & Contact</h5>
              </li>
              <li>Contact us</li>
              <li>Seller Center</li>
              <li>News</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h6 className="text-xl font-semibold pb-5">Tools & apps</h6>
              </li>
              <li>Developers</li>
              <li>Site map</li>
              <li>Security center</li>
              <li>Policies</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-stone-200 py-2 text-center">Power by saman.keighobadi@gmail.com</p>
      </footer>
    </div>
  );
};

export default Footer;
