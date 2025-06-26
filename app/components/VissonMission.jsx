import React from "react";

export default function VissonMission({ color, textColor, headText, list }) {
  return (
    <div className={`p-5 ${color} rounded-lg`}>
      <h1 className={`text-3xl font-bold ${textColor}`}>{headText}</h1>
      <ul className="mt-3 space-y-2">
        {list.map((e, index) => (
          <li className="text-sm">
            {index + 1}. {e}
          </li>
        ))}
      </ul>
    </div>
  );
}
