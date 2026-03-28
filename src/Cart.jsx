const Cart = ({ cartItems, handleRemove, clearCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto mt-10">
      <h1 className="text-5xl font-bold text-center mb-20 text-black">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-400 font-medium">Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="relative flex items-center gap-6 bg-white p-6 rounded-4xl shadow-xl border border-gray-50">
                <button onClick={() => handleRemove(item.id)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded-full transition-all font-bold">✕</button>
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                </div>
                <div className="flex-grow text-center sm:text-left">
                    <h4 className="text-2xl font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                </div>
                <div className="text-3xl font-black text-gray-900 pr-10">${item.price}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 sm:p-10 bg-white rounded-4xl shadow-2xl border border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
            <div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Total Amount</p>
              <h2 className="text-5xl font-black text-gray-900">${totalPrice}</h2>
            </div>
            <button onClick={clearCart} className="px-12 py-5 bg-gradient-to-r from-[#FF1D92] via-[#FF2D78] to-[#FF4D2B] text-white text-xl font-bold rounded-full shadow-lg transition-all active:scale-95">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;