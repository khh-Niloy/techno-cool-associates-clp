"use client";
import { ThreeDMarquee } from "../../../components/ui/3d-marquee";

export default function ClientSection3D() {
  const images = [
    "/p3.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "/p3.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "/p3.png",
    "/p1.png",
    "/p3.png",
    "/p3.png",
    "https://assets.aceternity.com/tabs.png",
    "/p3.png",
    "/p3.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "/p2.png",
    "/p3.png",
    "/p3.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "/p3.png",
    "/p3.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
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
      <div className="mx-auto my-10 rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
        <ThreeDMarquee images={images} />
      </div>
    </div>
  );
}
