import Image from "next/image";
import Banner from "./components/Home/Banner";
import TestBanner from "./components/Home/TestBanner";

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* <Banner /> */}
      <TestBanner />
    </div>
  );
}
