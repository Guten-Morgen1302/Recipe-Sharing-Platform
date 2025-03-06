import Link from "next/link"
import Image from "next/image"

export default function ExplorePage() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-xl overflow-hidden mb-16 mt-6 mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-800"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1546241072-48010ad2862c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-8">
          <h1 className="text-5xl font-bold mb-4 transform transition-all duration-500 hover:scale-105">
            Explore a World of Flavors!
          </h1>
          <p className="text-xl max-w-2xl mb-8 opacity-90">
            Embark on a culinary adventure with Flavour Fusion. Discover new flavors, mix them up, and create unique
            taste experiences.
          </p>
          <Link
            href="/categories"
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center"
          >
            Browse Categories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Featured Flavor Combos */}
      <section className="mb-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Featured Flavor Combos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out our curated flavor pairings that are taking the culinary world by storm!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-56 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582673937754-8d0cfed5412c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Spicy Mango & Lime"
                width={400}
                height={224}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Spicy Mango & Lime</h3>
              <p className="text-gray-600 mb-4">
                A tantalizing blend of sweet mango with zesty lime and a hint of spice creates an unforgettable tropical
                experience.
              </p>
              <Link
                href="/recipes/spicy-mango-lime"
                className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center"
              >
                Explore Recipes
                <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-56 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1563452072-2af45ddc5ae6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Strawberry & Basil"
                width={400}
                height={224}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Strawberry & Basil</h3>
              <p className="text-gray-600 mb-4">
                The sweet juiciness of strawberries pairs surprisingly well with the aromatic herbal notes of fresh
                basil.
              </p>
              <Link
                href="/recipes/strawberry-basil"
                className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center"
              >
                Explore Recipes
                <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-56 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1549007953-2f2dc0b24019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Dark Chocolate & Chili"
                width={400}
                height={224}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Dark Chocolate & Chili</h3>
              <p className="text-gray-600 mb-4">
                The rich, deep flavor of dark chocolate gets an exciting kick from the subtle heat of chili, creating a
                sophisticated treat.
              </p>
              <Link
                href="/recipes/chocolate-chili"
                className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center"
              >
                Explore Recipes
                <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/recipes"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 inline-block"
          >
            Discover More Flavor Combos
          </Link>
        </div>
      </section>

      {/* Flavor Categories */}
      <section className="mb-16 px-4 bg-gray-50 py-16 rounded-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Explore Flavors by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive deeper into flavors based on your cravings and culinary needs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
            <div className="h-40 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                alt="Sweet & Savory"
                width={300}
                height={160}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold">Sweet & Savory</h3>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
            <div className="h-40 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                alt="Bold & Spicy"
                width={300}
                height={160}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold">Bold & Spicy</h3>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
            <div className="h-40 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                alt="Fruity & Zesty"
                width={300}
                height={160}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold">Fruity & Zesty</h3>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
            <div className="h-40 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                alt="Comfort Foods"
                width={300}
                height={160}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold">Comfort Foods</h3>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
            <div className="h-40 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                alt="Healthy & Fresh"
                width={300}
                height={160}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold">Healthy & Fresh</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Flavors */}
      <section className="mb-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Trending Flavors Right Now</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These flavor combinations are making waves in the culinary world—don't miss out!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg flex hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-1/3 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                alt="Maple & Bacon"
                width={300}
                height={200}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="w-2/3 p-6">
              <div className="flex items-center mb-2">
                <span className="material-symbols-outlined text-yellow-500 mr-1">star</span>
                <span className="material-symbols-outlined text-yellow-500 mr-1">star</span>
                <span className="material-symbols-outlined text-yellow-500 mr-1">star</span>
                <span className="material-symbols-outlined text-yellow-500 mr-1">star</span>
                <span className="material-symbols-outlined text-yellow-500 mr-1">star_half</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Maple & Bacon</h3>
              <p className="text-gray-600 mb-4">
                Sweet, smoky, and savory all at once. This combination is taking breakfast dishes to a whole new level.
              </p>
              <Link
                href="/recipes/maple-bacon"
                className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center"
              >
                Try it now
                <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg flex hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-1/3 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                alt="Lavender & Honey"
                width={300}
                height={200}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="w-2/3 p-6">
              <div className="flex items-center mb-2">
                <span className="material-symbols-outlined text-yellow-500 mr-1">star</span>
                <span className="material-symbols-outlined text-yellow-500 mr-1">star</span>
                <span className="material-symbols-outlined text-yellow-500 mr-1">star</span>
                <span className="material-symbols-outlined text-yellow-500 mr-1">star</span>
                <span className="material-symbols-outlined text-yellow-500 mr-1">star</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Lavender & Honey</h3>
              <p className="text-gray-600 mb-4">
                A delicate floral note with natural sweetness makes this pairing perfect for desserts and beverages.
              </p>
              <Link
                href="/recipes/lavender-honey"
                className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center"
              >
                Try it now
                <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/trending"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 inline-block"
          >
            Try the Trending Flavors
          </Link>
        </div>
      </section>
    </div>
  )
}

