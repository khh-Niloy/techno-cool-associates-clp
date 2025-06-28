import Banner from "./components/Home/Banner";
import WhyChooseUs from "./components/Home/WhyChooseUs";
import ClientSection3D from "./components/Home/ClientSection3D";
import HomeProducts from "./components/Home/HomeProducts";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Banner />
      <section className="lg:w-[85%] w-[100%] mx-auto">
        <WhyChooseUs />
        <ClientSection3D />
        <HomeProducts />
      </section>
    </div>
  );
}
