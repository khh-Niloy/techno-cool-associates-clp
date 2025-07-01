"use client";

import React, { useEffect, useState } from "react";
import AllProduct from "../components/Product/AllProduct";

export default function Products() {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto pb-20 lg:pt-12 pt-10 sm:pt-12">
      <div className="mb-12 text-center">
        <h1 className="text-center text-black font-bold lg:text-3xl text-2xl">
          Explore Our HVAC Products{" "}
        </h1>
        <p className="lg:text-sm text-xs mt-2">
          Find the Perfect Heating, Ventilation, and Air-Conditioning Solution
          Tailored <br /> to Your Specific Needs, Built on Two Decades of
          Expertise.
        </p>
      </div>

      <AllProduct />
    </div>
  );
}
