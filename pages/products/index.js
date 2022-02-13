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
      <div className="text-center">
        <h1 className="pb-5 text-5xl font-bold text-zinc-800">Our Phone Store</h1>
        <p className="font-semibold px-44 text-lg  leading-loose py-4 ">
          Labore elit dolor nostrud commodo adipisicing tempor enim duis aute
          esse occaecat tempor. In cillum duis ullamco proident sunt enim. Ut id
          culpa sit cillum proident dolore aliqua incididunt. Officia veniam
          eiusmod cillum eu incididunt cupidatat proident aliquip ipsum cillum
          labore commodo.
        </p>
      </div>
      <div className="grid grid-cols-1  place-content-center gap-5 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {productList.map((product, index) => (
          <div
            key={index}
            className=" max-w-md rounded-lg bg-stone-50 px-6 text-justify font-sans font-normal text-gray-700 shadow-lg transition  delay-100 duration-100   hover:-translate-y-1"
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
            <div className="flex items-center justify-between py-3">
              <div>
                <Link
                  href={"/product/"}
                  as={`/products/${product.id}`}
                  passHref
                >
                  <button className="my-2 rounded-md bg-sky-500 px-2 py-1 font-medium text-gray-50">
                    See more
                  </button>
                </Link>
                
              </div>
              <div>
                <p className="inline pr-3 text-lg">999$</p>
                <del className="inline text-xs">1054$</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
