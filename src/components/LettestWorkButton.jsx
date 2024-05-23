import React from "react";

export default function LatestWorkButton({ item, border: shouldAddBorder }) {
  return (
    <div className="flex justify-center mt-2">
      <button
        type="button"
        className={`py-4 px-8 lg:px-4 me-2 text-xl lg:text-2xl font-extrabold border-l-2 border-r-2 border-b-2 border-[#007fff] text-[#007fff] tracking-wide bg-white focus:outline-none focus:z-10 ${
          shouldAddBorder ? "border-t-2" : ""
        }`}
      >
        @{item}
      </button>
    </div>
  );
}