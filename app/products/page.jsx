import React from "react";
import AllProduct from "../components/Product/AllProduct";
import Head from "next/head";
import LocalBusinessSEO from "../components/LocalBusinessSEO";

export const metadata = {
  title: "HVAC Products in Bangladesh | Techno Cool Associates",
  description:
    "Browse high-quality HVAC products from Techno Cool Associates — official suppliers of Daikin, LG, and DB. We offer VRF/VRV systems, air-cooled chillers, and industrial cooling solutions across Bangladesh.",
  keywords:
    "HVAC products Bangladesh, Daikin AC Bangladesh, LG VRF systems, VRF VRV supplier Dhaka, air cooled chillers BD, HVAC equipment Bangladesh, industrial HVAC Bangladesh, commercial air conditioning Bangladesh, HVAC system supplier, cooling solutions BD",
  openGraph: {
    title: "HVAC Products in Bangladesh | Techno Cool Associates",
    description:
      "Discover our full range of HVAC products including Daikin & LG air conditioners, VRF/VRV systems, air-cooled chillers, and more. Trusted supplier for industrial and commercial HVAC needs in Bangladesh.",
    url: "https://techno-cool-associates-clp.vercel.app/products",
    images: [
      {
        url: "https://techno-cool-associates-clp.vercel.app/seoImg.png",
        alt: "HVAC Products Bangladesh - Daikin LG VRF VRV Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Products | Daikin, LG, VRF/VRV | Techno Cool Associates",
    description:
      "Explore commercial and industrial HVAC systems in Bangladesh. Daikin, LG, VRF/VRV systems, chillers, and more — only at Techno Cool Associates.",
    images: ["https://techno-cool-associates-clp.vercel.app/seoImg.png"],
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
            metadata.openGraph.images?.url?.startsWith("http")
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
            metadata.openGraph.images?.url?.startsWith("http")
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

      <section className="w-[90%] lg:w-[80%] mx-auto pb-20 lg:pt-12 pt-10 sm:pt-12">
        <div className="mb-12 text-center">
          <h2 className="text-center text-black font-bold lg:text-3xl text-2xl">
            Explore Our HVAC Products{" "}
          </h2>
          <h1 className="lg:text-sm text-xs mt-2">
            Find the Perfect Heating, Ventilation, and Air-Conditioning Solution
            Tailored <br /> to Your Specific Needs, Built on Two Decades of
            Expertise.
          </h1>
        </div>

        <AllProduct />
      </section>
    </>
  );
}
