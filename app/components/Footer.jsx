import React from "react";
import { Button } from "@/components/ui/button";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="w-full  flex flex-col items-center justify-center bg-gradient-to-br from-[#D7E8F9] to-[#f4f6f9e7] text-base-content px-30 pt-24 pb-20">
        <div className="flex lg:flex-row flex-col mx-auto gap-10 justify-center items-start">
          <aside className="w-[40%] flex items-start flex-col gap-2 lg:mr-10 mr-0">
            <div className="flex items-center gap-2">
              {/* <img
                className="w-[30%]"
                src="https://i.ibb.co.com/TWDy2kf/logo.png"
                alt=""
              /> */}
              <h1 className="text-3xl font-bold">Techno Cool Associates</h1>
            </div>

            <h1 className="text-md text-black/80">
              Send us a message <br />
              <span>Have questions, feedback? We'd love to hear from you!</span>
            </h1>

            <form className="shadow-xl">
              <Button
                className="bg-[#007CF5] text-white cursor-pointer rounded-sm"
                variant=""
              >
                Click Here
              </Button>
            </form>

            <div>
              <h1 className="mt-1 text-md font-medium mb-2">
                Contact us via social networks
              </h1>
              <ul className="flex items-center gap-2 text-xl">
                <li className="hover:-translate-y-0.5 cursor-pointer hover:text-blue-600 hover:duration-300 transition-all">
                  <FaFacebook></FaFacebook>
                </li>
                <li className="hover:-translate-y-0.5 cursor-pointer hover:text-blue-600 hover:duration-300 transition-all">
                  <FaLinkedin></FaLinkedin>
                </li>
              </ul>
            </div>
          </aside>

          <div className="w-[35%] flex flex-col gap-3 mt-1">
            <div className="flex items-start flex-col justify-center">
              <div className="flex items-center gap-1.5 text-[#0376ea]">
                <HiLocationMarker className="text-lg" />{" "}
                <h1 className="font-semibold">Address</h1>
              </div>
              <h1 className="text-md">
                Century Centre, Level # 09, Kha 225, <br /> Pragati sarani,
                Merul Badda, Dhaka-1212,
              </h1>
            </div>
            <div className="flex items-start flex-col justify-center">
              <div className="flex items-center gap-2 text-[#0376ea]">
                <HiPhone className="text-lg" />{" "}
                <h1 className="font-semibold">Phone Number</h1>
              </div>
              <h1 className="text-[15px]">+880255055121 +8801762625960-99</h1>
            </div>
            <div className="flex items-start flex-col justify-center">
              <div className="flex items-center justify-center gap-2 text-[#0376ea]">
                <MdEmail className="text-lg" />{" "}
                <h1 className="font-semibold">Email</h1>
              </div>
              <h1 className="text-[15px]">technocool.bd@gmail.com</h1>
            </div>
          </div>

          <div className="w-[20%] flex lg:flex-row flex-col lg:gap-20 gap-10 mt-10 lg:mt-0">
            <nav className="flex flex-col">
              <h6 className="text-[19px] font-semibold mb-4">Quick Links</h6>
              <div className="flex flex-col gap-2 text-black/70 text-sm">
                <li>
                  <a className="link link-hover">Products</a>
                </li>
                <li>
                  <a className="link link-hover">About</a>
                </li>
                <li>
                  <a className="link link-hover">Contact</a>
                </li>
                <li>
                  <a className="link link-hover">Previous work</a>
                </li>
              </div>
            </nav>
          </div>
        </div>
        <h1 className="pt-24 text-center text-sm text-black/50">
          Copyright © 2025, Techno Cool Associates. <br />
          Techno Cool Associates is a registered trademark of Techno Cool
          Associates. All rights reserved.
        </h1>
      </footer>
    </div>
  );
};

export default Footer;
