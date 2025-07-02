import React from "react";
import { FaUserTie } from "react-icons/fa";
import VissonMission from "../components/VissonMission";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ClientSection3D from "../components/Home/ClientSection3D";
import PageTitle from "../components/PageTitle";
import { TbTargetArrow } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import Head from "next/head";
import LocalBusinessSEO from "../components/LocalBusinessSEO";

export const metadata = {
  title: "About Us | Techno Cool Associates",
  description:
    "Learn about Techno Cool Associates, your trusted HVAC partner in Bangladesh, offering expert HVAC engineering, installation, and maintenance services across Dhaka and beyond.",
  keywords:
    "About Techno Cool, HVAC company Bangladesh, HVAC engineering Dhaka, HVAC installation services Bangladesh, trusted HVAC partner Dhaka, HVAC maintenance Bangladesh, commercial HVAC company, industrial HVAC solutions Bangladesh",
  openGraph: {
    title: "About Us | Techno Cool Associates",
    description:
      "Learn about Techno Cool Associates, your trusted HVAC partner in Bangladesh, offering expert HVAC engineering, installation, and maintenance services across Dhaka and beyond.",
    url: "https://techno-cool-associates-clp.vercel.app/about",
    images: {
      url: "/seoImg.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Techno Cool Associates",
    description:
      "Learn about Techno Cool Associates, your trusted HVAC partner in Bangladesh, offering expert HVAC engineering, installation, and maintenance services across Dhaka and beyond.",
    images: "/seoImg.png",
  },
};

export default function about() {
  const message = [
    "The foundation of any organization should be based on relationship building.",
    "We are blessed with capable, caring professionals who go the extra mile to fulfill our corporate mission and meet their high personal standards.",
    "Our goal is to continue to provide a superior level of service that is recognized nationwide.",
    "Because, we know Quality matters.",
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
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.openGraph.url} />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={
            metadata.openGraph.images.url.startsWith("http")
              ? metadata.openGraph.images.url
              : `${metadata.openGraph.url}${metadata.openGraph.images.url}`
          }
        />
        <meta property="og:url" content={metadata.openGraph.url} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content={
            metadata.openGraph.images.url.startsWith("http")
              ? metadata.openGraph.images.url
              : `${metadata.openGraph.url}${metadata.openGraph.images.url}`
          }
        />
      </Head>

      <LocalBusinessSEO
        url={metadata.openGraph.url}
        phone="+8801XXXXXXXXX"
        image="/seoImg.png"
        sameAs={[
          "https://www.facebook.com/yourpage",
          "https://www.linkedin.com/yourpage",
        ]}
      />

      <div className="py-16 w-[80%] mx-auto">
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="lg:text-3xl text-2xl text-black font-bold">
            Who We Are
          </h1>
          <div className="text-left mt-3">
            <p className="lg:text-lg text-sm mt-2">
              TECHNO COOL ASSOCIATES is a leading engineering company in
              Bangladesh giving the best and comprehensive commercial HVAC
              (Heating, Ventilation and Air-Condition) solutions since 2003.
            </p>
            <p className="lg:text-lg text-sm mt-2">
              We expertise in design & drawing, consultancy, supply &
              installation support and after sales & maintenance in the field of
              HVAC. Products of supreme quality are imported from world renowned
              manufacturers to satisfy the requirement of project owners and
              technical personnel.
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

        <div className="flex flex-col items-center justify-center mt-16">
          <h1 className="lg:text-3xl text-2xl text-black font-bold">
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
            icon={<TbTargetArrow className="text-2xl" />}
            gradient={"bg-gradient-to-br from-[#06b6d4] to-cyan-300"}
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
            icon={<FaEye className="text-2xl" />}
            gradient={"bg-gradient-to-br from-[#9642e4] to-purple-300"}
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
            icon={<FaHandshake className="text-2xl" />}
            gradient={"bg-gradient-to-br from-[#22c55e] to-green-300"}
          />
        </div>

        <ClientSection3D />

        <div className="flex flex-col text-center justify-center mb-10 pt-8 ">
          <h1 className="lg:text-3xl text-2xl text-black font-bold">
            Our Expertise & Services
          </h1>

          <div className="text-left mt-10">
            <h1 className="text-lg font-semibold">Authorized Dealers</h1>
            <p>
              We are authorized dealers for DAIKIN (JAPAN) , LG (SOUTH KOREA) ,
              and DB (USA)
            </p>
            <div className="flex gap-5">
              <div>
                <img
                  src="/daikin.png"
                  className="w-36 border border-black/10 px-3 rounded-md mt-3"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="/lg.png"
                  className="w-28 border border-black/10 px-3 rounded-md mt-3"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="/usa.png"
                  className="w-28 border border-black/10 px-3 rounded-md mt-3"
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
              <div className="lg:w-[80%] w-[90%]">
                <img
                  src="/aw1.png"
                  className="w-full object-cover mt-3"
                  alt=""
                />
              </div>
              <div className="lg:w-[80%] w-[90%]">
                <img
                  src="/aw2.png"
                  className="w-full object-cover mt-3"
                  alt=""
                />
              </div>
              <div className="lg:w-[80%] w-[90%]">
                <img
                  src="/certificates.png"
                  className="w-full object-cover mt-3"
                  alt=""
                />
              </div>
            </div>
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
    </>
  );
}
