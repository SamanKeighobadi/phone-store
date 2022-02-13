import React from "react";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="container mt-6  h-96 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  ">
      <div className="py-4 px-6 ">
        <table className="w-full">
          <thead>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </thead>
          <tbody >
            <tr className=" text-center" >
              <td className="w-10 h-10">
                <Image
                  src="/images/iphone13pro.png"
                  alt=""
                  width={100}
                  height={100}
                  layout='fixed'
                />
              </td>
              <td>
                  IPhone 13 pro
              </td>
              <td>
                  999$
              </td>
              <td>
                  2
              </td>
              <td>
                  9999$
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="">
          <h1 className="text-xl font-bold pb-5 text-stone-800">Cart Total</h1>
          <div className="text-stone-800 font-semibold">
              <p>Subtotal: $990</p>
              <p className="py-2">Discount: $990</p>
              <p>Total: $991</p>
              <button className="uppercase bg-sky-600 p-2 mt-4 text-white ">
                  checkout now
              </button>
          </div>
      </div>
    </div>
  );
};

export default Cart;
