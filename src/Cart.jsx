import { useEffect, useState } from "react";

const Cart = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch("/Models.json")
      .then((res) => res.json())
      .then(setModels)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[60%] mx-auto space-x-5">
        {models.map((m) => (
  <div key={m.id} className="bg-white border rounded-2xl shadow-lg p-4 my-3">
    <div className="bg-[#e4e4e7] flex justify-center items-center">
        <p>
            {m.status}
        </p>
        <div className="w-fit">
            <img className="w-[50%] h-auto mx-auto mb-3" src={m.image} alt={m.title} />
        </div>
    </div>
    <h3 className="text-xl font-bold">{m.title}</h3>
    <p className="text-sm text-gray-600">{m.description}</p>
    <p className="text-2xl font-black">${m.price}</p>
    <button className="btn bg-[#e7000b] text-white">
        Subscribe Now
    </button>
  </div>
))}
    </div>
  );
};

export default Cart;