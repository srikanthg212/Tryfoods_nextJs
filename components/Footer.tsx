export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-2xl font-bold mb-4">Tryfoods</h3>
          <p className="text-green-300">Nourish & Thrive</p>
          <p className="mt-4 text-sm">
            Fresh salads delivered to your doorstep daily.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-300 cursor-pointer">Home</li>
            <li className="hover:text-green-300 cursor-pointer">Menu</li>
            <li className="hover:text-green-300 cursor-pointer">Cart</li>
            <li className="hover:text-green-300 cursor-pointer">About Us</li>
            <li className="hover:text-green-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm">Email: support@tryfoods.in</p>
          <p className="text-sm">Phone: +91 98765 43210</p>

          <div className="flex gap-4 mt-4">
            <span className="hover:text-green-300 cursor-pointer">Instagram</span>
            <span className="hover:text-green-300 cursor-pointer">Facebook</span>
            <span className="hover:text-green-300 cursor-pointer">Twitter</span>
          </div>
        </div>

      </div>

      <div className="text-center mt-12 text-sm text-green-300">
        © 2025 Tryfoods. All rights reserved.
      </div>
    </footer>
  );
}
