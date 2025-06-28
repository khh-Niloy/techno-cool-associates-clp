import { Button } from "@/components/ui/button";
import React from "react";
import PageTitle from "../components/PageTitle";

export default function contact() {
  return (
    <div className="py-6 sm:py-8 md:py-12">
      <PageTitle
        width={"85%"}
        headTitle={"Contact Us"}
        subTitle={
          "Have questions or concerns? We're here to help. Reach out to our team through any of the channels below."
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-5">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
          <div className=" rounded-lg px-8 ">
            <h2 className="text-2xl font-bold text-black mb-6 relative inline-block">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-black"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 block w-full px-3 py-2 bg-white
                     rounded-md shadow-sm text-black placeholder-gray-500  focus:outline-blue-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-black"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 block w-full px-3 py-2 bg-[white] rounded-md shadow-sm text-white placeholder-gray-500   transition-colors duration-200 focus:outline-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 bg-[white] rounded-md shadow-sm text-black placeholder-gray-500  transition-colors duration-200 focus:outline-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-black"
                >
                  Subject
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 bg-[white] rounded-md shadow-sm text-black placeholder-gray-500  transition-colors duration-200 focus:outline-blue-500"
                  placeholder="Enter your subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 bg-[white] rounded-md shadow-sm text-black placeholder-gray-500  transition-colors duration-200 resize-none focus:outline-blue-500"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-[red]/6 border border-red-300 rounded-lg p-6 shadow-lg shadow-red-900/5">
              <div className="flex items-center gap-3 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-red-500">
                  Emergency Contact
                </h3>
              </div>
              <p className="text-red-500">
                For immediate assistance in case of emergency, please call:
              </p>
              <p className="text-3xl font-bold text-red-500 mt-2">
                01762625960-99
              </p>
            </div>

            <div className="bg-blue-50/10 border border-gray-500/10 rounded-lg p-6  shadow-lg backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-black mb-4 relative inline-block">
                Office Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-black font-medium">Address</p>
                    <p className="text-black/90 mt-1">
                      Century Centre, Level # 09, Kha 225, Pragati sarani, Merul
                      Badda, Dhaka-1212,
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-black font-medium">Email</p>
                    <p className="text-black/90 mt-1">
                      technocool.bd@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-black font-medium">Phone</p>
                    <p className="text-black/90 mt-1">
                      +880255055121 +8801762625960-99
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
