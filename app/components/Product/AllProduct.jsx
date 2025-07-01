"use client";

import React, { useEffect, useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ModalButton } from "../ModalButton";

export default function AllProduct({ isHome }) {
  const [allProduct, setallProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        // "https://techno-cool-associates-clp.vercel.app/allProduct.json"
        "http://localhost:3000/allProduct.json"
      );
      const data = await res.json();
      setallProduct(data);
    };
    fetchData();
  }, []);

  const prodArr = isHome === true ? allProduct.slice(1, 7) : allProduct;

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 w-[90%] lg:w-[100%] mx-auto">
      {prodArr.map(
        ({ productName, shortDes, image, model, BrandedProduct }, index) => (
          <div
            key={index}
            className={`rounded-2xl card card-compact bg-base-100 hover:scale-[1.03] duration-300 transition-all shadow-xl text-black`}
          >
            <GlowingEffect
              blur={0}
              borderWidth={2}
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <figure className="h-[10rem] drop-shadow-xl relative">
              <div
                className="object-cover rounded-2xl w-full h-[10rem] mt-5 mx-3 bg-black/10"
                // src={e.image}
                // alt="Shoes"
              />
            </figure>
            <div
              key={productName}
              className={`p-4 text-black flex flex-col justify-between h-full`}
            >
              <h2 className="card-title">{productName}</h2>
              {/* <p className="text-sm">Origin: {e.model}</p> */}
              <p className="line-clamp-2 text-sm mt-2">{shortDes}</p>
              <div className=" text-white mt-3">
                <ModalButton
                  image={image}
                  model={model}
                  BrandedProduct={BrandedProduct}
                  productName={productName}
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
