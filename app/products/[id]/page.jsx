"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams();
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://techno-cool-associates-clp.vercel.app/allProduct.json"
        // "http://localhost:3000/allProduct.json"
      );
      const data = await res.json();
      setAllProduct(data);
    };
    fetchData();
  }, []);

  const singleProductInfo = allProduct.find((e) => e.id === id);

  if (!singleProductInfo) return <div>Loading...</div>;

  const { productName, shortDes, model, BrandedProduct } = singleProductInfo;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-black">{productName}</h1>
      <p className="text-gray-700 mt-2">{shortDes}</p>

      {BrandedProduct?.map((e, i) => (
        <div key={i} className="border border-black/10 p-3 rounded-md mt-5">
          <div className="text-black text-2xl font-semibold">{e?.brand}</div>

          <h1 className="mt-2 text-black font-medium">Models:</h1>
          <div className="flex gap-3 text-black flex-wrap">
            {model?.map((modelName, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 rounded">
                {modelName}
              </span>
            ))}
          </div>

          <div className="text-black mt-4">
            <h1 className="text-lg font-semibold">Features:</h1>
            <ul className="list-decimal list-inside">
              {e?.coreFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <h1 className="mt-2 text-lg font-semibold">Capabilities</h1>
            <ul className="list-decimal list-inside">
              {e?.capabilities.map((capability, idx) => (
                <li key={idx}>{capability}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
