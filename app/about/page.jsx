import React from "react";
import { FaUserTie } from "react-icons/fa";
import VissonMission from "../components/VissonMission";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ClientSection3D from "../components/Home/ClientSection3D";

export default function about() {
  const message = [
    "The foundation of any organization should be based on relationship building.",
    "We are blessed with capable, caring professionals who go the extra mile to fulfill our corporate mission and meet their high personal standards.",
    "Our goal is to continue to provide a superior level of service that is recognized nationwide.",
    "Because, we know Quality matters.",
  ];

  return (
    <div className="py-16 w-[80%] mx-auto">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="lg:text-3xl text-2xl text-blue-600 font-semibold">
          Who We Are
        </h1>
        <div className="text-left mt-3">
          <p className="lg:text-lg text-sm mt-2">
            TECHNO COOL ASSOCIATES is a leading engineering company in
            Bangladesh giving the best and comprehensive commercial HVAC
            (Heating, Ventilation and Air-Condition) solutions since 2003.
          </p>
          <p className="lg:text-lg text-sm mt-2">
            We expertise in design & drawing, consultancy, supply & installation
            support and after sales & maintenance in the field of HVAC. Products
            of supreme quality are imported from world renowned manufacturers to
            satisfy the requirement of project owners and technical personnel.
          </p>

          <div className="p-3 px-5 rounded-xl bg-[#F2F2F3] mb-3 mt-5">
            <h1 className="text-lg font-medium">
              A Message from Our Chief Executive:
            </h1>
            <ul className="list-disc list-inside mt-1">
              {message.map((e, index) => (
                <li className="lg:text-lg text-sm" key={index}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="lg:text-3xl text-2xl font-semibold text-blue-600">
          Our Mission, Vision, & Values
        </h1>
        <p className="lg:text-sm text-xs text-center mt-2">
          Discover the core principles that drive our business and define our
          promise to you.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        <VissonMission
          color={"bg-[#06b6d4]/6"}
          headText={"Mission"}
          textColor={"text-[#20C0DC]"}
          list={[
            "Maintaining honesty in every stage of business affairs.",
            "Building up close relationship with customers.",
            "Earning reputation rather than profit making.",
          ]}
        />

        <VissonMission
          color={"bg-[#a855f7]/6"}
          headText={"Vission"}
          textColor={"text-[#A45EEB]"}
          list={[
            "To introduce High-Technology Air Conditioning Products.",
            "To focus on Environment Friendly Products.",
            "To save energy by introducing Inverter Technology.",
            "To achieve Customer Satisfaction.",
          ]}
        />

        <VissonMission
          color={"bg-[#22c55e]/6"}
          headText={"Values"}
          textColor={"text-[#3BCE6E]"}
          list={[
            "Standard Workmanship (DAIKIN, LG, GCHV)",
            "Standard Installation Materials",
            "Strict Supervision, Monitoring & Timely Completion",
            "Service & Warranty Commitment",
          ]}
        />
      </div>

      <ClientSection3D />

      <div className="flex flex-col text-center justify-center mb-10 pt-16 ">
        <h1 className="lg:text-3xl text-2xl font-semibold text-blue-600">
          Our Expertise & Services
        </h1>

        <div className="text-left mt-10">
          <h1 className="text-lg font-semibold">Authorized Dealers</h1>
          <p>
            We are authorized dealers for DAIKIN (JAPAN) , LG (SOUTH KOREA) ,
            and GCHV (CHINA)
          </p>
          <div className="flex gap-5">
            <div>
              <img
                src="/daikin.png"
                className="w-32 border border-black/10 px-3 rounded-md mt-3"
                alt=""
              />
            </div>
            <div>
              <img
                src="/lg.png"
                className="w-24 border border-black/10 px-3 rounded-md mt-3"
                alt=""
              />
            </div>
            <div>
              <img
                src="/gchv.png"
                className="w-16 border border-black/10 px-3 rounded-md mt-3"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="text-left mt-10">
          <h1 className="text-lg font-semibold">Awards & Certifications</h1>
          <p>
            Our commitment to excellence is recognized by our partners,
            demonstrated through our various dealer certificates and awards.
          </p>
          <div className="flex flex-col gap-5">
            <div className="lg:w-[50%] w-[90%]">
              <img src="/aw1.png" className="w-full object-cover mt-3" alt="" />
            </div>
            <div className="lg:w-[50%] w-[90%]">
              <img src="/aw2.png" className="w-full object-cover mt-3" alt="" />
            </div>
            <div className="lg:w-[50%] w-[90%]">
              <img src="/aw3.png" className="w-full object-cover mt-3" alt="" />
            </div>
          </div>
        </div>

        <div className="text-left mt-10">
          <h1 className="text-lg font-semibold">Consultants</h1>
          <p>
            We have worked with a network of renowned consultants from around
            the world , including WSP (Australia) , IBS Gulf Design (India &
            World Wide) , DDA (Singapore) , and Design Consultancy Services
            (England).
          </p>
        </div>

        <div className="text-left mt-10">
          <h1 className="text-lg font-semibold">Our Impact</h1>
          <p>
            We have successfully completed more than 100+ Completed Projects,
            20+ Years of Expertise since the inception of our company.
          </p>
        </div>

        <div className="mt-10 flex gap-3 justify-center">
          <Link href={"/previous-work"}>
            <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
              View Our Projects
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
