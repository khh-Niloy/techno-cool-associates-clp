import React from "react";
import { Clients } from "./Clients";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Banner() {
  return (
    <>
      <div
        className="w-full lg:h-[30rem] md:h-[52rem] h-[50rem] flex lg:flex-row flex-col bg-gradient-to-r
         from-[#015ed8] to-[#002595] relative"
        // className="w-full lg:h-[30rem] md:h-[52rem] h-[50rem] flex lg:flex-row flex-col bg-[#00b4f0] relative"
      >
        <div className="xl:w-[40%] lg:w-[50%] flex flex-col p-14 lg:px-24 lg:items-start items-center">
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
            {/* <h1 className="text-4xl text-[#00b4f0] font-bold">20+ Years</h1> */}
            <h1 className="text-lg text-black/80 leading-5.5 mt-1">
              of Experience in HVAC Systems
            </h1>
          </div>

          <h1 className="mt-7 text-white">Our Valued Clients</h1>
          <Clients />

          <div>
            <Link href={"/about"}>
              <Button className="mt-5 bg-white text-black hover:text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="xl:w-[60%] lg:w-[50%] pr-10">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="text-xl pt-7 translate-x-24  text-white font-light text-right lg:translate-y-12">
              Top HVAC solutions in Bangladesh
              <br />— proudly serving since 2003.
            </h1>
            <div className="xl:w-[60%] lg:w-[80%] w-[60%] relative h-64 mt-10">
              <img
                src="/prod.svg"
                alt=""
                className="lg:w-[100%] md:w-[60%] w-[75%] absolute lg:-top-16 -top-7 lg:right-12 lg:scale-110 right-0"
              />
              {/* <img
                src="/ac.svg"
                alt=""
                className="lg:w-[85%] md:w-[70%] w-full scale-125 lg:scale-100 absolute -top-8 md:left-0 lg:-left-6
                 -left-6 z-40"
              /> */}
              {/* 
              <img
                src="/snow.svg"
                alt=""
                className="w-[26%] absolute lg:top-5 top-0 contrast-150 z-20 opacity-85"
              />
              <img
                src="/snow.svg"
                alt=""
                id="l-top"
                className="lg:w-[17%] md:w-[16%] w-[20%] absolute top-0 -left-18 contrast-150 z-20 opacity-90"
              />
              <img
                src="/snow.svg"
                alt=""
                className="w-[23%] absolute top-16 -left-38 contrast-150 z-20 opacity-75"
              />
              <img
                src="/snow.svg"
                id="bottom-r"
                alt=""
                className="w-[20%] lg:w-[20%] md:w-[18%] absolute lg:top-38 md:top-32 top-30 right-2 contrast-150 z-20 opacity-85"
              />
              <img
                src="/snow.svg"
                id="r-top"
                alt=""
                className="lg:w-[10%] md:w-[16%] w-[22%] absolute -top-3 lg:-right-0 md:-right-12 -right-10 contrast-150 z-20 opacity-90"
              />
              <img
                src="/snow.svg"
                alt=""
                className="lg:w-[26%] md:w-[25%] w-[30%] absolute top-12 lg:-right-20 md:-right-32 -right-20 contrast-150 z-20 opacity-75"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
