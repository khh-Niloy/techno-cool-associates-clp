"use client";
import { ThreeDMarquee } from "../../../components/ui/3d-marquee";
import PageTitle from "../PageTitle";
import ClientLogosMarque from "./ClientLogosMarque";

export default function ClientSection3D() {
  const images = [
    "/p3.png",
    "/n1.png",
    "/desh.jpg",
    "/amit.jpg",
    "/biman.jpg",
    "/p5.png",
    "/p1.png",
    "/p6.png",
    "/bcc.jpg",
    "/cat.jpg",
    "/gear.jpg",
    "/aus.jpg",
    "/nrbc.jpg",
    "/iub.jpg",
  ];
  return (
    <>
      <div className="mt-24 pb-12">
        <PageTitle
          headTitle={"Our Valued Clients"}
          subTitle={
            "We are proud to have partnered with leading organizations, including banglalink, Standard Chartered, Dabur, DESHBANDHU GROUP, Bangladesh Biman Bahini, and many more."
          }
          lgwidth={"50%"}
        />

        <div
          className={`mx-auto my-10 bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800`}
        >
          {/* <ThreeDMarquee images={images} /> */}
          <ClientLogosMarque images={images} />
        </div>
      </div>
    </>
  );
}
