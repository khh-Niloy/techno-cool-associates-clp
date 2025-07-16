"use client";
import Marquee from "react-fast-marquee";

export default function ClientLogosMarque({ images }) {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover={true}>
      {images.map((e) => (
        <img src={e} alt="client" className="h-40 mx-6" />
      ))}

      {/* <img src="/logo2.png" alt="client" className="h-12 mx-6" />
      <img src="/logo3.png" alt="client" className="h-12 mx-6" />
      <img src="/logo4.png" alt="client" className="h-12 mx-6" />
      <img src="/logo5.png" alt="client" className="h-12 mx-6" /> */}
    </Marquee>
  );
}
