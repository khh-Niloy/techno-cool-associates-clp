"use client";

import { usePathname } from "next/navigation";
import PageTransition from "../PageTransition";

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();

  return <PageTransition key={pathname}>{children}</PageTransition>;
}
