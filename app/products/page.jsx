"use client";

import { Button } from "@/components/ui/button";
import { GlowingEffect } from "../../components/ui/glowing-effect";
import { getAllProduct } from "@/lib/getAllProduct";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ModalButton } from "../components/ModalButton";

export default function Products() {
  const [allProduct, setallProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://techno-cool-associates-clp.vercel.app/products.json"
      );
      const data = await res.json();
      setallProduct(data);
      //   return data;
    };
    fetchData();
  }, []);

  //   const allProduct = await getAllProduct();

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto pb-20 lg:pt-12 pt-10 sm:pt-12">
      <div className="mb-12 text-center">
        <h1 className="text-center font-semibold lg:text-3xl text-2xl">
          Explore Our HVAC Products{" "}
        </h1>
        <p className="lg:text-sm text-xs mt-2">
          Find the Perfect Heating, Ventilation, and Air-Conditioning Solution
          Tailored <br /> to Your Specific Needs, Built on Two Decades of
          Expertise.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 w-[90%] lg:w-[100%] mx-auto">
        {allProduct.map((e) => (
          <div
            className={`card card-compact bg-base-100 hover:scale-[1.03] duration-300 transition-all shadow-xl text-black`}
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
                className="object-cover rounded-t-lg w-full h-[10rem] bg-black/10"
                // src={e.image}
                // alt="Shoes"
              />
            </figure>
            <div
              key={e._id}
              className={`p-4 text-black flex flex-col justify-between h-full`}
            >
              <h2 className="card-title">{e.productName}</h2>
              <p className="text-sm">Origin: {e.model}</p>
              <p className="line-clamp-2 text-sm mt-2">{e.shortDetails}</p>
              <div className=" text-white mt-2">
                {/* <Link href={""} className="w-full">
                  <button
                    className="hover:bg-[#FF2727] bg-[#191A23] text-white
                    rounded-lg w-full py-2 mt-3 font-normal cursor-pointer text-sm active:scale-95 transition-all"
                  >
                    See More
                  </button>
                </Link> */}
                <ModalButton />
              </div>
            </div>
            {/* <div>
                <h2 className="text-lg font-medium">
                  {e.productName}{" "}
                  <span className="text-sm font-normal">{e?.more}</span>
                </h2>
                <p className="line-clamp-2 text-sm mt-1">Model: {e?.model}</p>
              </div>
              <span className="text-sm font-normal">{e?.shortDetails}</span>
              <ModalButton /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
