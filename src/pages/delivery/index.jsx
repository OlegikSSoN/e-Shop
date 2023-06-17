import React, { useRef, useState } from "react";
import Products from "@/components/products";

const Delivery = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center text-3xl font-bold my-12">
        <h2 className="text-3xl font-extrabold mt-2">Доставка</h2>
        <div className="col-span-3">
          <img src="/NovaPoshta.png" width={600} alt="" />
          <img src="/Ukrposhta.png" width={600} alt="" />
        </div>
      </div>
    </>
  );
};

export default Delivery;
