import React from "react";
import AllProduct from "../components/Product/AllProduct";
import Head from "next/head";
import LocalBusinessSEO from "../components/LocalBusinessSEO";

export const metadata = {
  title: "HVAC Products | Techno Cool Associates",
  description:
    "Explore Techno Cool Associates’ wide range of HVAC products in Bangladesh, including Daikin and LG air conditioners, VRF/VRV systems, air-cooled chillers, and industrial cooling solutions. Trusted HVAC equipment supplier for commercial and industrial clients in Dhaka and beyond.",
  keywords:
    "HVAC products Bangladesh, commercial HVAC equipment, industrial air conditioning Bangladesh, Daikin air conditioners Bangladesh, LG HVAC systems Dhaka, VRF VRV systems supplier, air cooled chillers Bangladesh, HVAC equipment supplier Dhaka, HVAC system products Bangladesh, industrial cooling solutions BD",
  openGraph: {
    title: "HVAC Products | Techno Cool Associates",
    description:
      "Explore Techno Cool Associates’ wide range of HVAC products in Bangladesh, including Daikin and LG air conditioners, VRF/VRV systems, air-cooled chillers, and industrial cooling solutions. Trusted HVAC equipment supplier for commercial and industrial clients in Dhaka and beyond.",
    url: "https://techno-cool-associates-clp.vercel.app/products",
    images: {
      url: "/seoImg.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Products | Techno Cool Associates",
    description:
      "Explore Techno Cool Associates’ wide range of HVAC products in Bangladesh, including Daikin and LG air conditioners, VRF/VRV systems, air-cooled chillers, and industrial cooling solutions. Trusted HVAC equipment supplier for commercial and industrial clients in Dhaka and beyond.",
    images: "/seoImg.png",
  },
};

export default function Products() {
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

      <div className="w-[90%] lg:w-[80%] mx-auto pb-20 lg:pt-12 pt-10 sm:pt-12">
        <div className="mb-12 text-center">
          <h1 className="text-center text-black font-bold lg:text-3xl text-2xl">
            Explore Our HVAC Products{" "}
          </h1>
          <p className="lg:text-sm text-xs mt-2">
            Find the Perfect Heating, Ventilation, and Air-Conditioning Solution
            Tailored <br /> to Your Specific Needs, Built on Two Decades of
            Expertise.
          </p>
        </div>

        <AllProduct />
      </div>
    </>
  );
}
