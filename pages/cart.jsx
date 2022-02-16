import React from "react";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="container mt-12  h-96   ">
      <div className="flex   ">
        <table className="mx-5 grow text-zinc-700 shadow-lg">
          <thead className="text-center">
            <th className="px-6">Product</th>
            <th className="px-6">Name</th>
            <th className="px-6">Price</th>
            <th className="px-6">Quantity</th>
            <th className="px-6">Total</th>
          </thead>
          <tbody>
            <tr className="pb-5 text-center">
              <td>
                <Image
                  src={"/images/iphonE13pro.png"}
                  alt=""
                  width={150}
                  height={150}
                  layout="fixed"
                />
              </td>
              <td>IPhone 13 pro</td>
              <td>$999</td>
              <td>1</td>
              <td>$999</td>
            </tr>
            <tr className="pb-5 text-center">
              <td>
                <Image
                  src={"/images/iphonE13pro.png"}
                  alt=""
                  width={150}
                  height={150}
                  layout="fixed"
                />
              </td>
              <td>IPhone 13 pro</td>
              <td>$999</td>
              <td>1</td>
              <td>$999</td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col justify-between capitalize h-48 text-zinc-700 ">
          <h5 className="text-lg font-semibold">commodity prices: $89</h5>
          <h5 className="text-lg font-semibold">shipping: $10</h5>
          <h5 className="text-lg font-semibold">total: $99</h5>
          <button className="duration-0 hover:duration-150 rounded-md bg-sky-600 py-2  text-white transition hover:bg-sky-700">
            Purches
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
