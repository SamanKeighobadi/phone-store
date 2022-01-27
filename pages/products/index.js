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
    <div className="pt-3 px-12">
      <div className="grid gap-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  place-content-center">
        {productList.map((product, index) => (
          <div key={index} className=" max-w-md shadow-lg  rounded-lg bg-red-50">
            <h4>{product.name}</h4>
            <Link href={"/product/"} as={`/products/${product.id}`} passHref>
              <button className="px-2 py-1 bg-blue-500 text-gray-50 font-medium rounded-lg">Buy now</button>
                    
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
