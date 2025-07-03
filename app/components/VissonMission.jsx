import React from "react";

export default function VissonMission({
  color,
  textColor,
  headText,
  list,
  icon,
  gradient,
}) {
  return (
    <section
      className={`p-5 ${color} rounded-lg hover:scale-[1.03] duration-300 transition-all`}
    >
      <div className="flex justify-start items-center gap-2">
        <div
          className={`p-2 ${gradient}
                 rounded-full text-white shadow-xl`}
        >
          {icon}
        </div>
        <h1 className={`text-3xl font-bold ${textColor}`}>{headText}</h1>
      </div>
      <ul className="mt-4 space-y-2">
        {list.map((e, index) => (
          <li className="text-sm">
            {index + 1}. {e}
          </li>
        ))}
      </ul>
    </section>
  );
}
