import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
  const productList = [
    { id: 1, name: "A21", price: "$230", src: "" },
    { id: 2, name: "A21", price: "$230", src: "" },
    { id: 3, name: "A21", price: "$230", src: "" },
    { id: 4, name: "A21", price: "$230", src: "" },
    { id: 5, name: "A21", price: "$230", src: "" },
    { id: 6, name: "A21", price: "$230", src: "" },
  ];

  return (
    <div className="px-12 pt-3  font-sans">
      <div className="grid grid-cols-1  place-content-center gap-4 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3">
        {productList.map((product, index) => (
          <div
            key={index}
            className=" max-w-md rounded-lg bg-red-50 px-6 text-justify font-sans font-normal  text-gray-700 shadow-lg "
          >
            <Image alt="" width={100} height={100} src={"/images/img3.png"} />
            <h4>{product.name}</h4>
            <p className="">
              Quis elit exercitation fugiat laboris cillum irure consequat
              fugiat id dolore laborum occaecat ad elit.
            </p>
            <Link href={"/product/"} as={`/products/${product.id}`} passHref>
              <button className="my-2 rounded-lg bg-blue-500 px-2 py-1 font-medium text-gray-50">
                Buy now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
