import Image from "next/image";
import Banner from "./components/Home/Banner";
import TestBanner from "./components/Home/TestBanner";
import WhyChooseUs from "./components/Home/WhyChooseUs";
import ClientSection3D from "./components/Home/ClientSection3D";
import HomeProducts from "./components/Home/HomeProducts";

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* <Banner /> */}
      <TestBanner />
      <section className="w-[85%] mx-auto">
        <WhyChooseUs />
        <ClientSection3D />
        <HomeProducts />
      </section>
    </div>
  );
}
