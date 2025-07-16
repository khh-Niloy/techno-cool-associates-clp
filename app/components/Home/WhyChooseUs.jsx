import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import PageTitle from "../PageTitle";

export default function WhyChooseUs() {
  return (
    <>
      <div className="relative w-full h-[30rem]">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bgImage.jpg')" }}
        ></div>

        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 opacity-50"></div>

        {/* Content Layer */}
        <div className="relative z-10  py-16 flex flex-col items-center justify-center lg:w-[85%] w-[100%] mx-auto">
          <PageTitle
            width={"90%"}
            headTitle={"Why Choose Us"}
            subTitle={
              "Leading Bangladesh's HVAC Industry for 20 Years — Merging Global Standards with Local Expertise for Smart, Sustainable Air Solutions."
            }
            lgwidth={"50%"}
            white={true}
          />
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 w-[75%]">
            <div className="p-5 py-7 bg-[#a855f7]/65 text-white rounded-lg">
              <MdBusinessCenter
                className="p-3 bg-gradient-to-br from-[#9642e4] to-purple-300
                  text-5xl rounded-full text-white shadow-xl"
              ></MdBusinessCenter>
              <h1 className="text-sm mt-4">
                Maintaining honesty at every stage of business affairs.
              </h1>
            </div>
            <div className="p-5 py-7 bg-[#3b82f6]/65 text-white rounded-lg">
              <FaUserTie
                className="p-3 bg-gradient-to-br from-[#3b82f6] to-blue-300
                  text-5xl rounded-full text-white shadow-xl"
              ></FaUserTie>
              <h1 className="text-sm mt-4">
                Building strong, lasting relationships with our customers.
              </h1>
            </div>
            <div className="p-5 py-7 bg-[#06b6d4]/65 text-white rounded-lg">
              <AiOutlineSafety
                className="p-3 bg-gradient-to-br from-[#06b6d4] to-cyan-300
                  text-5xl rounded-full text-white shadow-xl"
              ></AiOutlineSafety>
              <h1 className="text-sm mt-4">
                Saving energy with inverter technology for efficient
                performance.
              </h1>
            </div>
            <div className="p-5 py-7 bg-[#22c55e]/65 text-white rounded-lg">
              <HiOutlineBadgeCheck
                className="p-3 bg-gradient-to-br from-[#22c55e] to-green-300
                  text-5xl rounded-full text-white shadow-xl"
              ></HiOutlineBadgeCheck>
              <h1 className="text-sm mt-4">
                Reliable service and warranty for lasting trust and support.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
