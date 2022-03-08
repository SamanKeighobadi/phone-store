import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const ProductId = () => {
  const router = useRouter();

  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 place-items-center  ">
      <div className="flex">
        {/* <Image
          alt=""
          src={"/images/iphone13pro.png"}
          width={500}
          height={500}

          layout="fixed"
        /> */}
      </div>
      <div className=" flex  flex-col justify-center  ">
        <h1 className="pb-4 xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl font-semibold text-stone-700">
          IPhone 13 Pro
        </h1>
        <p className="font-semibold px-1 text-stone-600 text-justify max-w-lg">
          Sit adipisicing laborum tempor anim do qui tempor. Tempor eiusmod elit
          laborum sunt mollit ipsum nulla anim laborum voluptate sunt elit
          ullamco do. Id magna esse nulla consequat cupidatat cillum aute dolore
          commodo eiusmod labore mollit excepteur. Ad amet in ullamco dolore
          elit aliquip consequat.
        </p>
        <div className="flex w-48 justify-around py-3">
          <div className="rounded-full border-2 ">
            <div className="m-1 h-8 w-8 cursor-pointer rounded-full bg-red-500"></div>
          </div>
          <div className="rounded-full border-2">
            <div className="m-1 h-8 w-8 cursor-pointer rounded-full bg-sky-500"></div>
          </div>
          <div className="rounded-full border-2">
            <div className="m-1 h-8 w-8 cursor-pointer rounded-full bg-stone-500"></div>
          </div>
        </div>

        <div>
          <p className="inline pr-3 text-3xl font-semibold text-stone-700">
            999$
          </p>
          <del className="inline text-lg font-semibold text-stone-700">
            1054$
          </del>
        </div>
        <div className="py-3">
          <button className="my-2 rounded-md bg-sky-500 px-2 py-1 font-medium text-gray-50" >Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
