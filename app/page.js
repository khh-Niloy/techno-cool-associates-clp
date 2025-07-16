import Banner from "./components/Home/Banner";
import WhyChooseUs from "./components/Home/WhyChooseUs";
import ClientSection3D from "./components/Home/ClientSection3D";
import HomeProducts from "./components/Home/HomeProducts";
import BannerSlider from "./components/Home/BannerSlider";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";

export const metadata = {
  title: "Home | HVAC Experts in Bangladesh - Techno Cool Associates",
  description:
    "Techno Cool Associates is a leading HVAC engineering company in Bangladesh with over 20 years of experience. We specialize in VRF/VRV systems, chillers, central AC, and energy-efficient air conditioning solutions for industrial and corporate clients.",
  keywords:
    "HVAC Bangladesh, VRF VRV systems, Daikin dealer Bangladesh, LG AC distributor Dhaka, DB air conditioning, HVAC engineering firm BD, commercial HVAC Dhaka, industrial HVAC solutions, air conditioning contractors Bangladesh, top HVAC companies in Dhaka, HVAC installation, HVAC maintenance BD, air cooled chillers, central air conditioning, FCU, AHU Bangladesh",
  openGraph: {
    title: "HVAC Solutions in Bangladesh | Techno Cool Associates",
    description:
      "Explore top-tier HVAC engineering with Techno Cool Associates. Trusted experts in Daikin, LG & DB VRF/VRV systems, central AC, chillers, and commercial air conditioning across Bangladesh.",
    url: "https://techno-cool-associates-clp.vercel.app",
    type: "website",
    locale: "en_US",
    site_name: "Techno Cool Associates",
    images: [
      {
        url: "https://techno-cool-associates-clp.vercel.app/seoImg.png",
        width: 1200,
        height: 630,
        alt: "Techno Cool Associates - HVAC Engineering Firm in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Engineering Experts | Techno Cool Associates",
    description:
      "Discover why Techno Cool Associates is Bangladesh’s most trusted HVAC company for VRF/VRV, Daikin, LG, DB air conditioning and industrial cooling systems.",
    images: ["https://techno-cool-associates-clp.vercel.app/seoImg.png"],
  },
};

export default function Home() {
  return (
    <>
      <head>
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
      </head>

      <div className="bg-white text-black">
        {/* <Banner /> */}
        <BannerSlider />
        <WhyChooseUs />
        <ClientSection3D />
        <main className=" w-[100%] mx-auto">
          <HomeProducts />
        </main>
      </div>
    </>
  );
}
