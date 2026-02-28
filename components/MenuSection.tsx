export default function MenuSection() {
  const vegItems = [
    { name: "Mediterranean Veg Bowl", price: "₹299", emoji: "🥗" },
    { name: "Avocado Quinoa Salad", price: "₹349", emoji: "🥗" },
    { name: "Chickpea Power Bowl", price: "₹279", emoji: "🥗" },
  ];

  const nonVegItems = [
    { name: "Grilled Chicken Salad", price: "₹399", emoji: "🍗" },
    { name: "Chicken & Egg Protein Bowl", price: "₹449", emoji: "🍗" },
    { name: "Tuna Fresh Bowl", price: "₹429", emoji: "🍗" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#b8d4a0] via-[#a8c890] to-[#98bc80] relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <h2 className="text-5xl font-bold text-center text-[#2d5016] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          Our Signature Bowls
        </h2>
        <p className="text-center text-[#3d6b1f] text-lg mb-16">Crafted with love, served with care</p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {/* VEG SECTION */}
          <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/40">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">🥗</span>
              <h3 className="text-3xl font-semibold text-[#2d5016]" style={{ fontFamily: 'Georgia, serif' }}>
                Veg Specials
              </h3>
            </div>
            <div className="space-y-4">
              {vegItems.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center bg-white/60 backdrop-blur-sm p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/60"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-[#2d5016] font-medium">{item.name}</span>
                  </div>
                  <span className="font-bold text-[#4a7c2c] text-lg">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* NON-VEG SECTION */}
          <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/40">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">🍗</span>
              <h3 className="text-3xl font-semibold text-[#2d5016]" style={{ fontFamily: 'Georgia, serif' }}>
                Non-Veg Specials
              </h3>
            </div>
            <div className="space-y-4">
              {nonVegItems.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center bg-white/60 backdrop-blur-sm p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/60"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-[#2d5016] font-medium">{item.name}</span>
                  </div>
                  <span className="font-bold text-[#4a7c2c] text-lg">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
