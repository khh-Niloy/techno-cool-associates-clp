"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomNavLink = (href, label) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`ml-9 text-sm duration-300 ${
          isActive
            ? "text-white font-semibold underline"
            : "text-white font-light"
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

export default CustomNavLink;
