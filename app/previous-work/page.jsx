import { Button } from "@/components/ui/button";
import React from "react";
import PageTitle from "../components/PageTitle";
import Head from "next/head";
import LocalBusinessSEO from "../components/LocalBusinessSEO";

export const metadata = {
  title: "Previous Work | Techno Cool Associates",
  description:
    "Discover Techno Cool Associates’ portfolio of successful HVAC projects across Bangladesh, showcasing expert installation, maintenance, and engineering solutions for commercial and industrial clients.",
  keywords:
    "Techno Cool projects, HVAC portfolio Bangladesh, HVAC installation projects Dhaka, commercial HVAC work, industrial HVAC solutions Bangladesh, HVAC case studies, HVAC engineering projects BD",
  openGraph: {
    title: "Previous Work | Techno Cool Associates",
    description:
      "Discover Techno Cool Associates’ portfolio of successful HVAC projects across Bangladesh, showcasing expert installation, maintenance, and engineering solutions for commercial and industrial clients.",
    url: "https://techno-cool-associates-clp.vercel.app/previous-work",
    images: {
      url: "/seoImg.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Previous Work | Techno Cool Associates",
    description:
      "Discover Techno Cool Associates’ portfolio of successful HVAC projects across Bangladesh, showcasing expert installation, maintenance, and engineering solutions for commercial and industrial clients.",
    images: "/seoImg.png",
  },
};

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
      product: "417 TR, DAIKAN VRV Air Conditioning System ",
    },
    {
      place: "Tusuka Fashion MD's Residence, Nikunjo",
      image: "/w2.jpg",
      product: "53 TR, DAIKIN Air Conditioning S",
    },
    {
      place: "Banglalink Call Centre, Uttara",
      image: "/w3.jpg",
      product: "150 TR,ACSON Air Cooled Chiller",
    },
    {
      place: "South East Sweaters, Dakkin Khan",
      image: "/w4.png",
      product: "400 TR, DAIKIN Air Cooled chiller",
    },
    {
      place: "Rangdhanu Media Limited, Gulshan",
      image: "/w6.png",
      product: "122TR, DAIKIN Air cooled Chiller",
    },
    {
      place: "British Council Dhaka, Fuller Road",
      image: "/w7.png",
      product: "d 110 TR, DAIKIN VRV Air conditioning System",
    },
    {
      place: "Cassiopea Sweaters Ltd. Elegant, Gazipur",
      image: "/w9.png",
      product: "400 TR DAIKIN Air Cooled chiller",
    },
    {
      place: "Afroza Begum Shoily Residence, Gulshan 2",
      image: "/w10.png",
      product: "77 TR, DAIKIN VRV Air Conditioning System",
    },
    {
      place: "Standard Chartered Bank all branches",
      image: "/w11.png",
      product: "350TR, DAIKIN VRV Air Conditioning System",
    },
    {
      place: "Palmal Tower, Gulshan 1",
      image: "/w12.png",
      product: "471 TR,DAIKIN VRV Air Conditioning System",
    },
    {
      place: "Hadi Tower, Gulshan 2",
      image: "/w13.png",
      product: "368 TR, DAIKIN VRV Air Conditioning Conditioning System",
    },
    {
      place: "IUB Auditorium, Bashundhara",
      image: "/w15.png",
      product: "70 TR, DAIKIN Air Cooled Chiller",
    },
    {
      place: "Arham Tower, Uttara",
      image: "/w16.png",
      product: "308 TR, DAIKIN VRV Air Conditioning System",
    },
    {
      place: "Arcadia Shopping Mall, Sylhet",
      image: "/w17.png",
      product: "150 TR, DAIKIN VRV Air Conditioning System",
    },
    {
      place: "Sheikh Hasina Software & Technology Park, Jessore",
      image: "/w8.png",
      product: "DAIKIN VRV Air conditioning System",
    },
    {
      place: "Yokohama Labels & Printing (BD) Co. Ltd., Narayanganj",
      image: "/w5.png",
      product: "105TR, DAIKIN Air CooledChiller",
    },
    {
      place: "Ali Ahmed Chunka Auditorium, Narayanganj",
      image: "/w14.png",
      product: "164 TR, DAIKIN VRV Air Conditioning System",
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
                  <h2 className="border border-black/15 p-2 mt-2 rounded-xl">
                    <span className="font-semibold">Product:</span> {e.product}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
