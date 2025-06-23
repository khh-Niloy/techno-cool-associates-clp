"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navItems = [
    { item: "Home", link: "/" },
    { item: "Products", link: "/products" },
    { item: "About", link: "#" },
    { item: "Contact ", link: "#" },
    { item: "Previous work", link: "#" },
  ];
  const pathname = usePathname();

  const currentStatusColorStyle = {
    active:
      "text-white font-medium bg-purple-700 underline rounded lg:bg-transparent lg:text-black lg:p-0",
    inactive:
      "text-black border-b border-gray-100 hover:bg-gray-50 font-normal lg:hover:bg-transparent lg:border-0 lg:p-0",
  };

  const renderedNavItems = navItems.map(({ item, link }) => (
    <li key={item}>
      <a
        href={link}
        className={`text-[16px] hover:text-[#0376EA]  hover:duration-300 hover:font-bold hover:transition-all block py-2 pl-3 pr-4 ${
          pathname === link
            ? currentStatusColorStyle.active
            : currentStatusColorStyle.inactive
        }`}
        aria-current="page"
      >
        {item}
      </a>
    </li>
  ));

  return (
    // bg-[#007CF5]
    // #0376EA
    <div className="flex w-full min-h-14 items-center bg-white text-[#0376EA] shadow-sm px-10 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {renderedNavItems}
          </ul>
        </div>
        <a className="text-xl font-bold">Logo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 text-white">
          {renderedNavItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn hidden">Button</a>
      </div>
    </div>
  );
}
