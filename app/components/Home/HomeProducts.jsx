"use client";

import { Button } from "@/components/ui/button";
import { GlowingEffect } from "../../../components/ui/glowing-effect";
import { getAllProduct } from "@/lib/getAllProduct";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ModalButton } from "../ModalButton";

export default function HomeProducts() {
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

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto pb-20 lg:pt-12 pt-10 sm:pt-12">
      <div className="mb-12 text-center">
        <h1 className="text-center text-black font-bold lg:text-3xl text-2xl">
          Top 6 Preferred HVAC Solutions{" "}
        </h1>
        <p className="lg:text-sm text-xs mt-2">
          Discover the Top 6 HVAC Solutions That Have Optimized Environments
          Across Bangladesh <br /> and Become Absolute Favorites Among Our
          Clients.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 w-[90%] lg:w-[100%] mx-auto">
        {allProduct.slice(0, 6).map((e, index) => (
          <div
            key={index}
            className={`card card-compact rounded-2xl bg-base-100 hover:scale-[1.03] duration-300 transition-all shadow-xl text-black`}
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
              key={e._id}
              className={`p-4 text-black flex flex-col justify-between h-full`}
            >
              <h2 className="card-title">{e.productName}</h2>
              <p className="text-sm">Origin: {e.model}</p>
              <p className="line-clamp-2 text-sm mt-2">{e.shortDetails}</p>
              <div className=" text-white mt-3">
                <ModalButton />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-14">
        <Link href={"/products"}>
          <button
            className="px-5 py-2 font-medium cursor-pointer
           text-white rounded-md bg-blue-600 hover:bg-blue-700 duration-300 transition-all hover:shadow-xl"
          >
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
}
