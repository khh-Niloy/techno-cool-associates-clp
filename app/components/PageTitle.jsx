import React from "react";

export default function PageTitle({
  headTitle,
  subTitle,
  width,
  lgwidth,
  white,
}) {
  return (
    <div
      className={`flex flex-col  items-center ${
        white ? "text-white" : "text-black"
      } justify-center text-center mb-10 pt-5`}
    >
      <h1 className="lg:text-3xl text-2xl font-bold">{headTitle}</h1>
      <p className={`w-[${width}] lg:w-[${lgwidth}] text-sm text-center mt-2`}>
        {subTitle}
      </p>
    </div>
  );
}
