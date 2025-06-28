import { Button } from "@/components/ui/button";
import React from "react";
import PageTitle from "../components/PageTitle";

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

  const consultants = [
    {
      consultant: "WSP, Australia",
      project: "Microsoft Dhaka Office",
    },
    {
      consultant: "IBS Gulf Design, India & World Wide",
      project: "Standard Chartered Bank",
    },
    {
      consultant: "DDA, Singapore",
      project: "Elegant Group",
    },
    {
      consultant: "Design Consultancy Services, England",
      project: "British Council, Chittagong",
    },
    {
      consultant: "Utility Professionals, Bangladesh",
      project: "British Council, Dhaka",
    },
    {
      consultant: "AVE Engineers & Consultant Ltd",
      project: "Chairman Residence, Bashundhara of UCC Group",
    },
    {
      consultant: "Air-Tech Engineers & Consultants",
      project: "Australian High Commission, Dhaka",
    },
    {
      consultant: "KAYMONTO & PARTNERS",
      project: "Citybank NA, Motijheel Branch",
    },
  ];

  return (
    <div className="py-6 sm:py-8 md:py-12 lg:w-[80%] w-[85%] mx-auto">
      <PageTitle
        headTitle={"100+ Completed Projects, 20+ Years of Expertise"}
        subTitle={
          "Delivering Advanced HVAC Solutions Across Diverse Industries in Bangladesh."
        }
      />

      <div>
        <p>
          We have successfully completed more than 100 projects since our
          inception. We engage with a variety of industries by providing
          advanced HVAC solutions. Our systems have been installed in a wide
          range of buildings and our services have been acquired by various
          industries, including:
        </p>
        <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
          {sectors.map((e, index) => (
            <Button
              key={index}
              className="bg-[#F2F2F3] text-black font-normal hover:bg-[#e9e9e9] hover:border
             hover:border-black/10"
            >
              {e}
            </Button>
          ))}
        </div>

        <div className="mt-14">
          <PageTitle
            headTitle={"Consultants We Worked With"}
            subTitle={"Our Esteemed Consulting Partners Across Key Projects"}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-black font-medium">
                <th></th>
                <th>Consultants</th>
                <th>Associated Projects</th>
              </tr>
            </thead>
            <tbody>
              {consultants.map(({ consultant, project }, index) => (
                <tr key={index} className="hover:bg-base-300">
                  <th>{index + 1}</th>
                  <td>{consultant}</td>
                  <td>{project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-10 pt-20">
        <PageTitle
          lgwidth={"60%"}
          width={"90%"}
          headTitle={"Our Featured Projects"}
          subTitle={
            "We partner with renowned engineering and design firms from around the world to deliver excellence on every project."
          }
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 ">
          {works.map((e, index) => (
            <div
              key={index}
              className={`card card-compact bg-base-100 hover:scale-[1.03] duration-300 transition-all shadow-lg text-black`}
            >
              <figure className="h-[10rem] drop-shadow-xl relative">
                <img
                  className="object-cover rounded-t-lg w-full h-[10rem]"
                  src={e.image}
                  alt={e.image}
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
