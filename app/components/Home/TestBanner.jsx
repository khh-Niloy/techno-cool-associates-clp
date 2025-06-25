import React from "react";
import { Clients } from "./Clients";
import { Button } from "@/components/ui/button";

export default function TestBanner() {
  // #001C71
  // #0057C9

  //   #019DF4
  // #0066F7
  return (
    // <div className="w-full h-[30rem] bg-gradient-to-r from-[#019DF4] to-[#0066F7] relative">
    <div className="w-full h-[30rem] flex bg-gradient-to-r from-[#015ed8] to-[#002595] relative">
      <div className="w-[40%] flex flex-col p-14 px-24">
        <div className="">
          <h2 className="text-3xl text-white font-semibold text-left">
            Best HVAC Solutions,
          </h2>
          <h2 className="text-3xl text-white font-semibold">
            with Techno Cool
          </h2>
        </div>

        <div className="bg-white shadow-2xl px-7 pb-4 pt-3 text-left rounded-xl rounded-br-[3rem] w-[14rem] mt-3">
          <h1 className="text-4xl text-blue-600 font-bold">20+ Years</h1>
          <h1 className="text-lg text-black/80 leading-5.5 mt-1">
            of Experience in HVAC Systems
          </h1>
        </div>

        <h1 className="mt-7 text-white">Our Valued Clients</h1>
        <Clients />

        <div>
          <Button className="mt-5 bg-white text-black hover:text-white">
            Learn More About Us
          </Button>
        </div>
      </div>

      <div className="w-[60%] pr-10">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <h1 className="text-xl pt-7  text-white font-light text-right translate-y-6">
            Top HVAC solutions in Bangladesh
            <br />— proudly serving since 2003.
          </h1>
          <div className="w-[60%] relative h-64 mt-10">
            <img
              src="/ac2.svg"
              alt=""
              className="w-[55%] absolute top-0 right-12"
            />
            <img
              src="/ac.svg"
              alt=""
              className="w-[85%] absolute -top-8 -left-6 z-40"
            />
            <img
              src="/snow.svg"
              alt=""
              className="w-[26%] absolute top-5 contrast-150 z-20 opacity-85"
            />
            <img
              src="/snow.svg"
              alt=""
              className="w-[17%] absolute top-0 -left-18 contrast-150 z-20 opacity-90"
            />
            <img
              src="/snow.svg"
              alt=""
              className="w-[23%] absolute top-16 -left-38 contrast-150 z-20 opacity-75"
            />
            <img
              src="/snow.svg"
              alt=""
              className="w-[20%] absolute top-38 right-2 contrast-150 z-20 opacity-85"
            />
            <img
              src="/snow.svg"
              alt=""
              className="w-[10%] absolute -top-3 -right-0 contrast-150 z-20 opacity-90"
            />
            <img
              src="/snow.svg"
              alt=""
              className="w-[26%] absolute top-12 -right-20 contrast-150 z-20 opacity-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
