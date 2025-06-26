"use client";
import { ThreeDMarquee } from "../../../components/ui/3d-marquee";

export default function ClientSection3D() {
  const images = [
    "/p3.png",
    "/n1.png",
    "/n1.png",

    "/desh.jpg",
    "/amit.jpg",
    "/p5.png",
    "/iub.jpg",
    "/biman.jpg",
    "/p3.png",
    "/p1.png",

    "/p5.png",
    "/iub.jpg",
    "/biman.jpg",
    "/p3.png",
    "/p1.png",
    "/desh.jpg",

    "/p6.png",
    "/n1.png",
    "/bcc.jpg",
    "/cat.jpg",
    "/gear.jpg",
    "/n1.png",

    "/aus.jpg",
    "/p3.png",
    "/amit.jpg",
    "/p3.png",
    "/p3.png",
    "/biman.jpg",
    "/amit.jpg",
    "/nrbc.jpg",
    "/iub.jpg",
  ];
  return (
    <div className="w-[80%] mx-auto mt-16 pb-12">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="lg:text-3xl text-2xl font-semibold">
          Our Valued Clients
        </h1>
        <p className="lg:text-sm text-xs text-center mt-2">
          We are proud to have partnered with leading organizations, including
          banglalink, <br /> Standard Chartered, Dabur, DESHBANDHU GROUP,
          Bangladesh Biman Bahini, and many more.
        </p>
      </div>

      <div
        className={`mx-auto "my-10" rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800`}
      >
        <ThreeDMarquee images={images} />
      </div>
    </div>
  );
}
