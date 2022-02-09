import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
  const productList = [
    { id: 1, name: "Samsung A21", price: "$230", src: "" },
    { id: 2, name: "Samsung A21s", price: "$230", src: "" },
    { id: 3, name: "Samsung A42", price: "$230", src: "" },
    { id: 4, name: "IPhone 13Pro", price: "$230", src: "" },
    { id: 5, name: "IPhone 13", price: "$230", src: "" },
    { id: 6, name: "IPhone 13 Pro Max", price: "$230", src: "" },
  ];

  return (
    <div className="my-12 px-12  pt-3 font-sans">
      <div className="grid grid-cols-1  place-content-center gap-5 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {productList.map((product, index) => (
          <div
            key={index}
            className=" max-w-md rounded-lg bg-stone-50 px-6 text-justify font-sans font-normal text-gray-700 shadow-lg transition  delay-100 hover:-translate-y-1   duration-100"
          >
            <Image
              alt=""
              width={500}
              height={500}
              src={"/images/iphone13pro.png"}
            />
            <h4 className="py-1 text-xl font-semibold text-stone-700">
              {product.name}
            </h4>
            <p className="py-3">
              Quis elit exercitation fugiat laboris cillum irure consequat
              fugiat id dolore laborum occaecat ad elit.
            </p>
            <div className="py-3 flex items-center justify-between">
              <div>
                <Link
                  href={"/product/"}
                  as={`/products/${product.id}`}
                  passHref
                >
                  <button className="my-2 rounded-md bg-sky-500 px-2 py-1 font-medium text-gray-50">
                    Buy now
                  </button>
                </Link>
                <button className="my-2 rounded px-2 py-1">see more</button>
              </div>
              <div>
                <p className="inline pr-3 text-lg">999$</p>
                <del className="text-xs inline">1054$</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
