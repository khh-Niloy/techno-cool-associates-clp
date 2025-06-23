import Image from "next/image";
import Banner from "./components/Home/Banner";
import TestBanner from "./components/Home/TestBanner";
import WhyChooseUs from "./components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* <Banner /> */}
      <TestBanner />
      <section className="w-[85%] mx-auto">
        <WhyChooseUs />
      </section>
    </div>
  );
}
