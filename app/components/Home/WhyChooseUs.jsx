import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import PageTitle from "../PageTitle";

export default function WhyChooseUs() {
  return (
    <>
      <div className="py-16 flex flex-col items-center justify-center">
        <PageTitle
          width={"90%"}
          headTitle={"Why Choose Us"}
          subTitle={
            "Leading Bangladesh's HVAC Industry for 20 Years — Merging Global Standards with Local Expertise for Smart, Sustainable Air Solutions."
          }
        />
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 w-[75%]">
          <div className="p-5 py-7 bg-[#a855f7]/10 rounded-lg">
            <MdBusinessCenter
              className="p-3 bg-gradient-to-br from-[#9642e4] to-purple-300
                  text-5xl rounded-full text-white shadow-xl"
            ></MdBusinessCenter>
            <h1 className="text-sm mt-4">
              Maintaining honesty at every stage of business affairs.
            </h1>
          </div>
          <div className="p-5 py-7 bg-[#3b82f6]/10 rounded-lg">
            <FaUserTie
              className="p-3 bg-gradient-to-br from-[#3b82f6] to-blue-300
                  text-5xl rounded-full text-white shadow-xl"
            ></FaUserTie>
            <h1 className="text-sm mt-4">
              Building strong, lasting relationships with our customers.
            </h1>
          </div>
          <div className="p-5 py-7 bg-[#06b6d4]/10 rounded-lg">
            <AiOutlineSafety
              className="p-3 bg-gradient-to-br from-[#06b6d4] to-cyan-300
                  text-5xl rounded-full text-white shadow-xl"
            ></AiOutlineSafety>
            <h1 className="text-sm mt-4">
              Saving energy with inverter technology for efficient performance.
            </h1>
          </div>
          <div className="p-5 py-7 bg-[#22c55e]/10 rounded-lg">
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
    </>
  );
}
