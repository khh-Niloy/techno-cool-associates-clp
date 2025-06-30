import React from "react";

export default function PageTitle({ headTitle, subTitle, width, lgwidth }) {
  return (
    <div className="flex flex-col  items-center justify-center text-center mb-10 pt-5">
      <h1 className="lg:text-3xl text-2xl text-black font-bold">{headTitle}</h1>
      <p className={`w-[${width}] lg:w-[${lgwidth}] text-sm text-center mt-2`}>
        {subTitle}
      </p>
    </div>
  );
}
