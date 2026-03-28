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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[80%] mx-auto gap-8 p-10">
  {models.map((m) => (
    <div key={m.id} className="group relative bg-white border border-gray-100 rounded-4xl shadow-2xl overflow-hidden flex flex-col transition-transform ">
      
      
      {m.status && (
        <div className="absolute top-5 right-[-5px] z-10">
          <span className={`pl-4 pr-3 py-1.5 text-[11px] font-bold text-white uppercase rounded-l-full shadow-lg flex items-center gap-1.5
            ${m.status === 'popular' ? 'bg-[#ff1d1d]' : 
              m.status === 'favourite' ? 'bg-[#ff8a00]' : 'bg-[#ffcc00]'}`}>
            {m.status === 'popular' && <span className="text-sm">🔥</span>}
            {m.status === 'favourite' && <span className="text-sm">💖</span>}
            {m.status === 'mostwanted' && <span className="text-sm">⭐</span>}
            {m.status}
          </span>
        </div>
      )}

      
      <div className="bg-[#e4e4e7] py-12 flex justify-center items-center overflow-hidden">
        <div className="w-32 h-32 flex justify-center items-center">
          <img 
            className="max-w-full max-h-full object-contain drop-shadow-md transition-transform duration-500 ease-in-out group-hover:scale-125" 
            src={m.image} 
            alt={m.title} 
          />
        </div>
      </div>

      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{m.title}</h3>
        <p className="text-[15px] text-gray-500 leading-relaxed mb-6 flex-grow">
          {m.description}
        </p>
        
        
        <div className="flex items-baseline gap-1 mb-6">
          <span className={`text-4xl font-black ${m.price === 0 ? 'text-[#10b981]' : 'text-gray-900'}`}>
            {m.price === 0 ? 'Free' : `$${m.price}`}
          </span>
          {m.price !== 0 && <span className="text-gray-400 font-semibold text-lg">/month</span>}
        </div>

        
        <button className="w-full py-4 bg-[#e7000b] hover:bg-red-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-red-200 transition-all active:scale-95">
          Subscribe Now
        </button>
      </div>
    </div>
  ))}
</div>
  );
};

export default Cart;