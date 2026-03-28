// import { useState } from "react";
// import Models from "./Models"
// import Cart from "./Cart";

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState("models");

//   return (
//     <div>
//       <div role="tablist" className="tabs mx-auto w-fit space-x-[20px]">
//         <button
//           role="tab"
//           onClick={() => setActiveTab("models")}
//           className={`tab ${
//             activeTab === "models"
//               ? "tab-active bg-gradient-to-r from-[#FF1D92] via-[#FF2D78] to-[#FF4D2B] text-white border-none shadow-lg px-20 rounded-full"
//               : "bg-white text-gray-600 border border-gray-200 px-20 rounded-full"
//           }`}
//         >
//           Models
//         </button>

//         <button
//           role="tab"
//           onClick={() => setActiveTab("cart")}
//           className={`tab ${
//             activeTab === "cart"
//               ? "tab-active bg-gradient-to-r from-[#FF1D92] via-[#FF2D78] to-[#FF4D2B] text-white border-none shadow-lg px-20 rounded-full"
//               : "bg-white text-gray-600 border border-gray-200 px-20 rounded-full"
//           }`}
//         >
//           Cart <span>(0)</span>
//         </button>
//       </div>

//       <div className="mt-4">
//         {activeTab === "models" ? (
//           <Models></Models>
//         ) : (
//           <Cart></Cart>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tabs;

import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Models from "./Models";
import Cart from "./Cart";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("models");
  const [models, setModels] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("/Models.json")
      .then((res) => res.json())
      .then((data) => setModels(data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddToCart = (item) => {
    const isExist = cartItems.find((prev) => prev.id === item.id);
    if (!isExist) {
      setCartItems([...cartItems, item]);
      toast.success(`${item.title} added to cart!`);
    } else {
      toast.error("Already added to cart!");
    }
  };

  const handleRemove = (id) => {
    const remaining = cartItems.filter(item => item.id !== id);
    setCartItems(remaining);
    toast.info("Item removed");
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success("Checkout successful!");
  };

  return (
    <div className="py-10">
      <ToastContainer position="top-right" autoClose={1500} />
      
      <div role="tablist" className="tabs mx-auto w-fit flex flex-col sm:flex-row gap-4 sm:space-x-[20px] mb-10">
        <button
          onClick={() => setActiveTab("models")}
          className={`tab flex items-center justify-center h-12 w-full sm:w-auto ${activeTab === "models" ? "bg-gradient-to-r from-[#FF1D92] via-[#FF2D78] to-[#FF4D2B] text-white border-none shadow-lg px-10 sm:px-20 rounded-full font-bold" : "bg-white text-gray-600 border border-gray-200 px-10 sm:px-20 rounded-full font-bold"}`}
        >
          Models
        </button>

        <button
          onClick={() => setActiveTab("cart")}
          className={`tab flex items-center justify-center h-12 ${activeTab === "cart" ? "bg-gradient-to-r from-[#FF1D92] via-[#FF2D78] to-[#FF4D2B] text-white border-none shadow-lg px-20 rounded-full" : "bg-white text-gray-600 border border-gray-200 px-20 rounded-full"}`}
        >
          Cart <span>({cartItems.length})</span>
        </button>
      </div>
      
      <div className="mt-4">
        {activeTab === "models" ? (
  <Models models={models} onSubscribe={handleAddToCart} cartItems={cartItems} />
) : (
  <Cart cartItems={cartItems} handleRemove={handleRemove} clearCart={clearCart} />
)}
      </div>
    </div>
  );
};

export default Tabs;