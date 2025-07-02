import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransitionWrapper from "./components/Home/PageTransitionWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Techno Cool Associates",
  description:
    "Bangladesh’s trusted HVAC engineering firm with 20+ years of experience. Experts in Daikin, LG & DB air conditioning systems for industrial and corporate clients.",
  keywords:
    "Techno Cool Associates, HVAC company Bangladesh, 20+ years of experience, HVAC contractors Dhaka, commercial air conditioning Bangladesh, industrial HVAC solutions BD, Daikin dealer Bangladesh, LG AC distributor Dhaka, VRF VRV system Bangladesh, air cooled chiller Bangladesh, HVAC installation Dhaka, HVAC engineering firm BD, top HVAC companies in Bangladesh",
  openGraph: {
    title: "Home | Techno Cool Associates",
    description:
      "Bangladesh’s trusted HVAC engineering firm with 20+ years of experience. Experts in Daikin, LG & DB air conditioning systems for industrial and corporate clients.",
    url: "https://techno-cool-associates-clp.vercel.app",
    images: {
      url: "/seoImg.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Techno Cool Associates",
    description:
      "Bangladesh’s trusted HVAC engineering firm with 20+ years of experience. Experts in Daikin, LG & DB air conditioning systems for industrial and corporate clients.",
    images: "/seoImg.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
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
      </head>

      <body className={`${inter.variable} antialiased bg-white interFont`}>
        <Navbar />
        <PageTransitionWrapper>
          <main className="pt-12">{children}</main>
        </PageTransitionWrapper>
        <Footer />
      </body>
    </html>
  );
}
