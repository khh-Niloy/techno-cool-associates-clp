"use client";

import { usePathname } from "next/navigation";
import PageTransition from "../PageTransition";
import { AnimatePresence } from "framer-motion";

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <PageTransition key={pathname}>{children}</PageTransition>
    </AnimatePresence>
  );
}
