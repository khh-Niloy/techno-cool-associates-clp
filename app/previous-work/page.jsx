import { Button } from "@/components/ui/button";
import React from "react";

export default function work() {
  const sectors = [
    "Hospital & Healthcare",
    "Pharmaceutical & Chemical",
    "Garments & Textiles",
    "Commercial Buildings",
    "Residential Buildings",
    "Media, Data Centre and IT",
    "Education & Financial Institutes",
  ];

  const works = [
    {
      place: "QA Tower, Banani",
      image: "/w1.jpg",
    },
    {
      place: "Tusuka Fashion MD's Residence, Nikunjo",
      image: "/w2.jpg",
    },
    {
      place: "Banglalink Call Centre, Uttara",
      image: "/w3.jpg",
    },
    {
      place: "South East Sweaters, Dakkin Khan",
      image: "/w4.png",
    },
    {
      place: "Rangdhanu Media Limited, Gulshan",
      image: "/w6.png",
    },
    {
      place: "British Council Dhaka, Fuller Road",
      image: "/w7.png",
    },
    {
      place: "Cassiopea Sweaters Ltd. Elegant, Gazipur",
      image: "/w9.png",
    },
    {
      place: "Afroza Begum Shoily Residence, Gulshan 2",
      image: "/w10.png",
    },
    {
      place: "Standard Chartered Bank all branches",
      image: "/w11.png",
    },
    {
      place: "Palmal Tower, Gulshan 1",
      image: "/w12.png",
    },
    {
      place: "Hadi Tower, Gulshan 2",
      image: "/w13.png",
    },
    {
      place: "IUB Auditorium, Bashundhara",
      image: "/w15.png",
    },
    {
      place: "Arham Tower, Uttara",
      image: "/w16.png",
    },
    {
      place: "Arcadia Shopping Mall, Sylhet",
      image: "/w17.png",
    },
    {
      place: "Sheikh Hasina Software & Technology Park, Jessore",
      image: "/w8.png",
    },
    {
      place: "Yokohama Labels & Printing (BD) Co. Ltd., Narayanganj",
      image: "/w5.png",
    },
    {
      place: "Ali Ahmed Chunka Auditorium, Narayanganj",
      image: "/w14.png",
    },
  ];

  return (
    <div className="py-6 sm:py-8 md:py-12 w-[80%] mx-auto">
      <div className="flex flex-col items-center justify-center mb-10 pt-10">
        <h1 className="lg:text-3xl text-2xl font-semibold">
          100+ Completed Projects, 20+ Years of Expertise
        </h1>
        <p className="lg:text-sm text-xs text-center mt-2">
          Delivering Advanced HVAC Solutions Across Diverse Industries in
          Bangladesh.
        </p>
      </div>

      <div className="">
        <p>
          We have successfully completed more than 100 projects since our
          inception. We engage with a variety of industries by providing
          advanced HVAC solutions. Our systems have been installed in a wide
          range of buildings and our services have been acquired by various
          industries, including:
        </p>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {sectors.map((e) => (
            <Button
              className="bg-[#F2F2F3] text-black font-normal hover:bg-[#e9e9e9] hover:border
             hover:border-black/10"
            >
              {e}
            </Button>
          ))}
        </div>

        <h1 className="mt-10 text-lg font-medium mb-4">
          Consultants We Worked With
        </h1>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>WSP, Australia:</strong> Project: Microsoft Dhaka Office
          </li>
          <li>
            <strong>IBS Gulf Design, India & World Wide:</strong> Project:
            Standard Chartered Bank
          </li>
          <li>
            <strong>DDA, Singapore:</strong> Project: Elegant Group
          </li>
          <li>
            <strong>Design Consultancy Services, England:</strong> Project:
            British Council, Chittagong
          </li>
          <li>
            <strong>Utility Professionals, Bangladesh:</strong> Project: British
            Council, Dhaka
          </li>
          <li>
            <strong>AVE Engineers & Consultant Ltd:</strong> Project: Chairman
            Residence, Bashundhara of UCC Group
          </li>
          <li>
            <strong>Air-Tech Engineers & Consultants:</strong> Project:
            Australian High Commission, Dhaka
          </li>
          <li>
            <strong>KAYMONTO & PARTNERS:</strong> Project: Citybank NA,
            Motijheel Branch
          </li>
        </ol>
      </div>

      <div className="flex flex-col items-center justify-center mb-10 pt-20">
        <h1 className="lg:text-3xl text-2xl font-semibold">
          Our Featured Projects
        </h1>
        <p className="lg:text-sm text-xs text-center mt-2">
          We partner with renowned engineering and design firms from <br />{" "}
          around the world to deliver excellence on every project.
        </p>

        <div className="grid grid-cols-4 gap-5 mt-10">
          {works.map((e) => (
            <div
              className={`card card-compact bg-base-100 hover:scale-[1.03] duration-300 transition-all shadow-lg text-black`}
            >
              <figure className="h-[10rem] drop-shadow-xl relative">
                <img
                  className="object-cover rounded-t-lg w-full h-[10rem]"
                  src={e.image}
                  // alt="Shoes"
                />
              </figure>
              <div
                key={e._id}
                className={`p-4 text-black flex flex-col justify-between`}
              >
                <h2 className="">{e.place}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
