import React from "react";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="container mt-6  h-96   ">
      <div>
        <table className="text-zinc-700 shadow-lg mx-5">
          <thead className="text-center">
            <th className="px-6">Product</th>
            <th className="px-6">Name</th>
            <th className="px-6">Price</th>
            <th className="px-6">Quantity</th>
            <th className="px-6">Total</th>
          </thead>
          <tbody>
            <tr className="text-center pb-5">
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
              <td>
                1
              </td>
              <td>$999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
