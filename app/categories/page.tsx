import Link from "next/link"
import Image from "next/image"

export default function CategoriesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden rounded-xl shadow-lg mb-16 mt-6 mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-800"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
        <div className="relative flex flex-col items-center justify-center h-full px-6 text-center text-white">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Explore Flavor Categories</h1>
          <p className="max-w-2xl text-xl mb-8 opacity-90">
            Discover the perfect flavor combinations to match every craving. From sweet to savory, bold to subtle—your
            next culinary adventure begins here.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center">
            Start Exploring
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Browse Categories */}
      <section className="mb-16 mx-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Browse Our Flavor Categories</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Dive into our carefully curated flavor categories and find the perfect pairing for any dish, drink, or
            snack.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
              <Image
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                src="https://images.unsplash.com/photo-1603903631649-3ea9342bb748?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Sweet and Savory"
                width={800}
                height={500}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Sweet & Savory</h3>
              <p className="text-gray-600 mb-4">
                Explore the perfect balance of sweetness and saltiness. From caramelized fruits to savory-sweet meats,
                these combos will surprise your taste buds.
              </p>
              <Link
                href="/categories/sweet-savory"
                className="mt-2 inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 group transition-all duration-300"
              >
                Browse Sweet & Savory
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
              <Image
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Bold and Spicy"
                width={800}
                height={500}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Bold & Spicy</h3>
              <p className="text-gray-600 mb-4">
                Turn up the heat! These fiery flavor pairings will add some serious kick to your meals, with a mix of
                spices and bold ingredients.
              </p>
              <Link
                href="/categories/bold-spicy"
                className="mt-2 inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 group transition-all duration-300"
              >
                Explore Bold & Spicy
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
              <Image
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                src="https://images.unsplash.com/photo-1597892657493-6847b3a6e728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Fruity and Zesty"
                width={800}
                height={500}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Fruity & Zesty</h3>
              <p className="text-gray-600 mb-4">
                Fresh, tangy, and refreshing! Enjoy vibrant fruit and citrus combinations that will brighten up any dish
                or drink.
              </p>
              <Link
                href="/categories/fruity-zesty"
                className="mt-2 inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 group transition-all duration-300"
              >
                Discover Fruity & Zesty
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
              <Image
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                src="https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Comfort Foods"
                width={800}
                height={500}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Comfort Foods</h3>
              <p className="text-gray-600 mb-4">
                Indulge in comforting, homey flavors with an exciting twist. These combinations will take your comfort
                food favorites to the next level.
              </p>
              <Link
                href="/categories/comfort-foods"
                className="mt-2 inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 group transition-all duration-300"
              >
                Explore Comfort Foods
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
              <Image
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                src="https://images.unsplash.com/photo-1564929360822-73b40bdb3e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Healthy and Fresh"
                width={800}
                height={500}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Healthy & Fresh</h3>
              <p className="text-gray-600 mb-4">
                Stay fresh and vibrant with healthy flavor combinations that are packed with nutrients and exciting new
                tastes.
              </p>
              <Link
                href="/categories/healthy-fresh"
                className="mt-2 inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 group transition-all duration-300"
              >
                Shop Healthy & Fresh
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
              <Image
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Beverage and Mixology"
                width={800}
                height={500}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Beverage & Mixology</h3>
              <p className="text-gray-600 mb-4">
                Elevate your drinks with new and exciting combinations. From creative cocktails to refreshing mocktails,
                find the perfect beverage pairing.
              </p>
              <Link
                href="/categories/beverage-mixology"
                className="mt-2 inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 group transition-all duration-300"
              >
                Browse Beverage & Mixology
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="mb-16 bg-gradient-to-r from-purple-50 to-indigo-50 py-12 px-8 rounded-2xl mx-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Trending Flavor Categories</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            These categories are heating up! Check out the most popular flavor pairings everyone's talking about right
            now.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl">
            <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              Trending Now
            </div>
            <div className="h-72 overflow-hidden">
              <Image
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1614148347511-2c3186deb561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Spicy & Sweet Trends"
                width={800}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Spicy & Sweet Trends</h3>
                <button className="text-white bg-white/30 backdrop-blur-sm hover:bg-white/40 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300">
                  Explore Now
                </button>
              </div>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl">
            <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              Customer Favorite
            </div>
            <div className="h-72 overflow-hidden">
              <Image
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Superfoods & Fresh Flavors"
                width={800}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Superfoods & Fresh Flavors</h3>
                <button className="text-white bg-white/30 backdrop-blur-sm hover:bg-white/40 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300">
                  Explore Now
                </button>
              </div>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl">
            <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              Hot This Week
            </div>
            <div className="h-72 overflow-hidden">
              <Image
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Tropical & Exotic Fruits"
                width={800}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Tropical & Exotic Fruits</h3>
                <button className="text-white bg-white/30 backdrop-blur-sm hover:bg-white/40 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

