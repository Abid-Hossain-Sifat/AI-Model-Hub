const Models = ({ models, onSubscribe, cartItems }) => {
  return (
    <>
      <div className="text-center mt-10 space-y-5">
        <h1 className="text-5xl font-bold">Choose Your AI Model</h1>
        <p className="text-2xl text-gray-400">One subscription gives you access to all frontier AI models</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[80%] mx-auto gap-8 p-10">
        {models.map((m) => (
          <div key={m.id} className="group relative bg-white border border-gray-100 rounded-4xl shadow-2xl overflow-hidden flex flex-col transition-transform ">
            {m.status && (
              <div className="absolute top-5 right-[-5px] z-10">
                <span className={`pl-4 pr-3 py-1.5 text-[11px] font-bold text-white uppercase rounded-l-full shadow-lg flex items-center gap-1.5 ${m.status === 'popular' ? 'bg-[#ff1d1d]' : m.status === 'favourite' ? 'bg-[#ff8a00]' : 'bg-[#ffcc00]'}`}>
                  {m.status === 'popular' && "🔥"} {m.status}
                </span>
              </div>
            )}
            <div className="bg-[#e4e4e7] py-12 flex justify-center items-center overflow-hidden">
              <img className="w-32 h-32 object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-125" src={m.image} alt={m.title} />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{m.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-6 flex-grow">{m.description}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-4xl font-black ${m.price === 0 ? 'text-[#10b981]' : 'text-gray-900'}`}>{m.price === 0 ? 'Free' : `$${m.price}`}</span>
              </div>
              <button onClick={() => onSubscribe(m)} className="w-full py-4 bg-[#e7000b] hover:bg-red-700 text-white      font-bold  text-lg rounded-2xl shadow-lg shadow-red-200 transition-all active:scale-95">
                 {cartItems.find(item => item.id === m.id) ? "Subscribed" : "Subscribe Now"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Models;