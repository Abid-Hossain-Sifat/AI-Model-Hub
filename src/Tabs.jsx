import { useState } from "react";
import Models from "./Models"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("models");

  return (
    <div>
      <div role="tablist" className="tabs mx-auto w-fit space-x-[20px]">
        <button
          role="tab"
          onClick={() => setActiveTab("models")}
          className={`tab ${
            activeTab === "models"
              ? "tab-active bg-gradient-to-r from-[#FF1D92] via-[#FF2D78] to-[#FF4D2B] text-white border-none shadow-lg px-20 rounded-full"
              : "bg-white text-gray-600 border border-gray-200 px-20 rounded-full"
          }`}
        >
          Models
        </button>

        <button
          role="tab"
          onClick={() => setActiveTab("cart")}
          className={`tab ${
            activeTab === "cart"
              ? "tab-active bg-gradient-to-r from-[#FF1D92] via-[#FF2D78] to-[#FF4D2B] text-white border-none shadow-lg px-20 rounded-full"
              : "bg-white text-gray-600 border border-gray-200 px-20 rounded-full"
          }`}
        >
          Cart <span>(0)</span>
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "models" ? (
          <Models></Models>
        ) : (
          <p>
            Cart content here
          </p>
        )}
      </div>
    </div>
  );
};

export default Tabs;