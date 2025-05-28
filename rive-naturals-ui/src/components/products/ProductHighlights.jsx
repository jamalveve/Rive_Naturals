// components/FeatureBoxesSection.jsx
import React from "react";


const features = [
  {
    label: "Products Under 499",
    bg: "bg-[#b6d7a8]",
    icon: "📦",
  },
  {
    label: "Milk Range",
    bg: "bg-[#ffe599]",
    icon: "🥛",
  },
  {
    label: "New Launches",
    bg: "bg-[#f9cb9c]",
    icon: "🧴",
  },
  {
    label: "Combos Under 999",
    bg: "bg-[#a4c2f4]",
    icon: "🎁",
  },
];

// FeatureBoxesSection.jsx
const ProductHighlights = () => (
  <section className="w-full py-16 bg-[#faf6f2]">
    <div className="flex flex-wrap justify-center gap-16">
      {features.map((f) => (
        <div
          key={f.label}
  className={`flex flex-col items-center justify-center rounded-2xl shadow-md ${f.bg} px-12 py-10 min-w-[300px] max-w-[400px] fade-in-up`}        >
          <span className="text-3xl mb-2">{f.icon}</span>
          <span className="text-lg font-semibold text-[#4c6b5a] text-center">{f.label}</span>
        </div>
      ))}
    </div>
  </section>
);


export default ProductHighlights;