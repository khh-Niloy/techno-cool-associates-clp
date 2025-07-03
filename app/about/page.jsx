import React from "react";
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
import Image from "next/image";

export const metadata = {
  title: "About Us | HVAC, VRF, VRV Experts | Techno Cool Associates",
  description:
    "Learn about Techno Cool Associates, Bangladesh’s trusted HVAC engineering company specializing in VRF, VRV, Daikin, LG, DB air conditioning systems, chillers, ducts, central AC, FCUs, AHUs, and industrial air conditioning services.",
  keywords:
    "HVAC, VRF, VRV, Daikin, LG, DB, AC, Air Conditioning, Chiller, Duct, Industrial AC, Central AC, FCU, AHU, Commercial Air Conditioning, Fresh Air, HVAC Bangladesh, HVAC Dhaka, VRF systems, VRV Bangladesh, Daikin HVAC dealer",
  openGraph: {
    title: "About Us | Techno Cool Associates | HVAC Bangladesh",
    description:
      "Meet Techno Cool Associates — leaders in HVAC, VRF/VRV systems, and air conditioning solutions in Bangladesh. Trusted partner for Daikin, LG, DB, chillers, ducts, and commercial AC.",
    url: "https://techno-cool-associates-clp.vercel.app/about",
    images: {
      url: "/seoImg.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | HVAC, VRF, Chiller Experts | Techno Cool Associates",
    description:
      "Bangladesh’s leading HVAC engineering firm specializing in VRF/VRV systems, Daikin, LG, and DB air conditioning, chillers, FCU, AHU, and duct systems.",
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

      <main className="py-16 w-[80%] mx-auto">
        <section className="flex flex-col items-center justify-center mb-10">
          <h2 className="lg:text-3xl text-2xl text-black font-bold">
            Who We Are
          </h2>
          <div className="text-left mt-3">
            <p className="lg:text-lg text-sm mt-2">
              TECHNO COOL ASSOCIATES is a leading engineering company in
              Bangladesh delivering comprehensive commercial{" "}
              <strong>HVAC</strong> (Heating, Ventilation, and Air Conditioning)
              solutions since 2003. We specialize in cutting-edge{" "}
              <strong>Commercial Air Conditioning</strong> and{" "}
              <strong>Industrial AC</strong> systems tailored for modern
              commercial and industrial facilities.
            </p>

            <p className="lg:text-lg text-sm mt-2">
              Our services span design & drawing, consultancy, supply &
              installation, and after-sales maintenance, ensuring end-to-end
              support for all HVAC needs. We also offer high-performance{" "}
              <strong>Fresh Air Systems</strong> to enhance indoor air quality
              and energy efficiency in your facilities. All our products come
              from world-renowned manufacturers, meeting the highest standards
              for quality and reliability.
            </p>

            <div className="p-3 px-5 rounded-xl bg-[#F2F2F3] mb-3 mt-5">
              <h2 className="text-lg font-medium">
                A Message from Our Chief Executive:
              </h2>
              <ul className="list-disc list-inside mt-1">
                {message.map((e, index) => (
                  <li className="lg:text-lg text-sm" key={index}>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center justify-center mt-16">
          <h1 className="lg:text-3xl text-2xl text-black font-bold">
            We’re a Trusted Name in HVAC Engineering
          </h1>
          <p className="lg:text-sm text-xs text-center mt-2">
            Discover the core principles that drive our business and define our
            promise to you.
          </p>
        </div>

        <section className="grid lg:grid-cols-3 grid-cols-1 gap-5">
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
        </section>

        <ClientSection3D />

        <section className="flex flex-col text-center justify-center mb-10 pt-8 ">
          <h2 className="lg:text-3xl text-2xl text-black font-bold">
            Our Expertise & Services
          </h2>

          <div className="text-left mt-10">
            <h2 className="text-lg font-semibold">Authorized Dealers</h2>
            <h1>
              We are authorized dealers for <strong>DAIKIN (JAPAN)</strong> ,{" "}
              <strong strong>LG (SOUTH KOREA)</strong> , and{" "}
              <strong>DB (USA)</strong>
            </h1>
            <div className="flex gap-5">
              <Image
                src="/daikin.png"
                alt="Daikin HVAC Authorized Dealer in Bangladesh"
                title="Daikin HVAC Authorized Dealer in Bangladesh"
                width={150}
                height={80}
                className="w-36 border border-black/10 px-3 rounded-md mt-3"
              />
              <Image
                src="/lg.png"
                alt="LG Air Conditioning Systems Dealer Bangladesh"
                title="LG Air Conditioning Systems Dealer Bangladesh"
                width={130}
                height={70}
                className="w-28 border border-black/10 px-3 rounded-md mt-3"
              />
              <Image
                src="/usa.png"
                alt="DB HVAC Products Supplier Bangladesh"
                title="DB HVAC Products Supplier Bangladesh"
                width={130}
                height={70}
                className="w-28 border border-black/10 px-3 rounded-md mt-3"
              />
            </div>
          </div>

          <section className="text-left mt-10">
            <h2 className="text-lg font-semibold">Awards & Certifications</h2>
            <p>
              Our commitment to excellence is recognized by our partners,
              demonstrated through our various dealer certificates and awards.
            </p>
            <div className="flex flex-col gap-5">
              <div className="lg:w-[80%] w-[90%]">
                <Image
                  src="/aw1.png"
                  alt="Techno Cool Associates receives Daikin Best Dealer Award"
                  title="Techno Cool Associates receives Daikin Best Dealer Award"
                  width={800}
                  height={400}
                  className="w-full object-cover mt-3"
                />
              </div>
              <div className="lg:w-[80%] w-[90%]">
                <Image
                  src="/aw2.png"
                  alt="Daikin Authorized Dealer Recognition for Techno Cool Associates"
                  title="Daikin Authorized Dealer Recognition for Techno Cool Associates"
                  width={800}
                  height={400}
                  className="w-full object-cover mt-3"
                />
              </div>
              <div className="lg:w-[80%] w-[90%]">
                <Image
                  src="/certificates.png"
                  alt="Daikin, LG, DB Authorized Dealer certificate of dealership for Techno Cool Associates"
                  title="Daikin, LG, DB Authorized Dealer certificate of dealership for Techno Cool Associates"
                  width={800}
                  height={400}
                  className="w-full object-cover mt-3"
                />
              </div>
            </div>
          </section>

          <section className="mt-14">
            <PageTitle
              headTitle={"Consultants We Worked With"}
              subTitle={"Our Esteemed Consulting Partners Across Key Projects"}
            />
          </section>

          <section className="overflow-x-auto">
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
          </section>

          <section className="text-left mt-10">
            <h2 className="text-lg font-semibold">Our Impact</h2>
            <p>
              We have successfully completed more than 100+ Completed Projects,
              20+ Years of Expertise since the inception of our company.
            </p>
          </section>

          <section className="mt-10 flex gap-3 justify-center">
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
          </section>
        </section>
      </main>
    </>
  );
}
