import React from "react";

export default function Banner() {
  // #001C71
  // #0057C9

  //   #019DF4
  // #0066F7
  return (
    // <div className="w-full h-[28rem] bg-gradient-to-r from-[#019DF4] to-[#0066F7] relative">
    <div className="w-full h-[30rem] bg-gradient-to-r from-[#015ed8] to-[#002595] relative">
      <div className="h-full w-full mx-auto flex flex-col items-center justify-center">
        <div className="pt-7 w-[50%] flex justify-center items-center gap-10  text-center">
          <div>
            <h1 className="text-3xl flex flex-col gap-3 text-white font-semibold text-left">
              TECHNO COOL
              <span className="text-xl font-light">
                Your Partner for the Best <br />{" "}
                <span className="translate-y-3">HVAC Solutions</span>
              </span>
            </h1>
          </div>
          <div className="bg-white shadow-2xl px-7 py-4 text-left rounded-xl rounded-bl-[3rem]">
            <span className="text-4xl text-blue-600 font-bold">20 Years</span>{" "}
            <br />{" "}
            <span className="text-xl text-black/80">
              of Experience in <br /> HVAC Systems
            </span>
          </div>
        </div>
        <div className="w-[35%] relative h-64 mt-10">
          <img
            src="/ac2.svg"
            alt=""
            className="w-[55%] absolute top-0 right-12"
          />
          <img
            src="/ac.svg"
            alt=""
            className="w-[85%] absolute -top-8 -left-6 z-50"
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
  );
}
