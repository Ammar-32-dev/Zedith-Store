
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl w-full mx-auto p-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">Welcome to Zedith Store</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Your one-stop shop for the latest and greatest products.</p>
          <Link href="/products">
            <button className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              View Products
            </button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-lg text-white text-center hover:scale-105 transform transition-transform duration-300">
            <h3 className="font-bold text-xl">Featured Products</h3>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-green-600 p-6 rounded-lg text-white text-center hover:scale-105 transform transition-transform duration-300">
            <h3 className="font-bold text-xl">New Arrivals</h3>
          </div>
          <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-6 rounded-lg text-white text-center hover:scale-105 transform transition-transform duration-300">
            <h3 className="font-bold text-xl">Best Sellers</h3>
          </div>
          <div className="bg-gradient-to-br from-pink-400 to-pink-600 p-6 rounded-lg text-white text-center hover:scale-105 transform transition-transform duration-300">
            <h3 className="font-bold text-xl">On Sale</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
