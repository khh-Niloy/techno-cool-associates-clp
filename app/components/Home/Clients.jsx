"use client";
import React from "react";
import { AnimatedTooltip } from "../../../components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Banglalink",
    image: "/p1.png",
  },
  {
    id: 2,
    name: "Dabur",
    image: "/p2.png",
  },
  {
    id: 3,
    name: "Microsoft",
    image: "/p3.png",
  },
  {
    id: 4,
    name: "Bangladesh Biman Bahini",
    image: "/p4.png",
  },
  {
    id: 5,
    name: "VISTA Limited",
    image: "/p5.png",
  },
  {
    id: 6,
    name: "IUB",
    image: "/p6.png",
  },
];

export function Clients() {
  return (
    <div className="flex flex-row items-center lg:justify-start justify-center w-full mt-3">
      <AnimatedTooltip items={people} />
    </div>
  );
}
