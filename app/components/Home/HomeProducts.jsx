"use client";

import Link from "next/link";
import React from "react";
import AllProduct from "../Product/AllProduct";

export default function HomeProducts() {
  return (
    <>
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

        <AllProduct isHome={true} />

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
    </>
  );
}
