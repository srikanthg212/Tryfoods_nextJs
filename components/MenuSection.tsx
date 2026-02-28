export default function MenuSection() {
  const vegItems = [
    { name: "Mediterranean Veg Bowl", price: "₹299" },
    { name: "Avocado Quinoa Salad", price: "₹349" },
    { name: "Chickpea Power Bowl", price: "₹279" },
  ];

  const nonVegItems = [
    { name: "Grilled Chicken Salad", price: "₹399" },
    { name: "Chicken & Egg Protein Bowl", price: "₹449" },
    { name: "Tuna Fresh Bowl", price: "₹429" },
  ];

  return (
    <section className="py-24 bg-[#f8fcf5]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-900">
          Our Signature Bowls
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* VEG */}
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              🥗 Veg Specials
            </h3>
            {vegItems.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center bg-white p-5 rounded-xl shadow hover:shadow-lg transition mb-4"
              >
                <span>{item.name}</span>
                <span className="font-semibold text-green-700">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          {/* NON VEG */}
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              🍗 Non-Veg Specials
            </h3>
            {nonVegItems.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center bg-white p-5 rounded-xl shadow hover:shadow-lg transition mb-4"
              >
                <span>{item.name}</span>
                <span className="font-semibold text-green-700">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
