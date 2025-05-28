// components/MovingTextSection.jsx
import React from "react";

const AnnouncementBar = () => (
<div className="w-full overflow-hidden whitespace-nowrap bg-[#f5f5f5] py-3">  
      <div className="animate-marquee text-[60px] font-semibold text-[#5f7c6e]"
        style={{ fontFamily: "Poppins" }}
>
      Safe & sustainable &nbsp; • &nbsp; Milk-Powered &nbsp; • &nbsp; For the real you &nbsp; • &nbsp; High performance
    </div>
    {/* Tailwind CSS animation: add this to your global CSS if not present */}
    <style>
      {`
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%);}
          100% { transform: translateX(-100%);}
        }
      `}
    </style>
  </div>
);

export default AnnouncementBar;
