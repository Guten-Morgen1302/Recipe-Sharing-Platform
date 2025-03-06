import Image from "next/image"
import Link from "next/link"
import { Clock, Users, ChefHat, Printer, ArrowLeft } from "lucide-react"

// This would typically come from a database or API
const recipe = {
  title: "Spicy Mango Chicken Stir-Fry",
  description: "A vibrant and flavorful dish combining sweet mango with spicy chicken in a quick stir-fry.",
  image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=2070&h=1380",
  prepTime: "15 min",
  cookTime: "20 min",
  totalTime: "35 min",
  servings: 4,
  difficulty: "Medium",
  author: "Chef Maria Rodriguez",
  rating: 4.8,
  reviews: 127,
  ingredients: [
    "2 large chicken breasts, sliced",
    "1 ripe mango, diced",
    "1 red bell pepper, sliced",
    "1 cup snap peas",
    "3 cloves garlic, minced",
    "1 tbsp ginger, grated",
    "2 tbsp vegetable oil",
    "2 tbsp soy sauce",
    "1 tbsp honey",
    "1 tsp sriracha sauce",
    "2 green onions, sliced",
    "1/4 cup chopped cilantro",
    "Lime wedges for serving",
  ],
  instructions: [
    "In a small bowl, mix soy sauce, honey, and sriracha. Set aside.",
    "Heat oil in a large wok or skillet over medium-high heat.",
    "Add chicken and stir-fry until golden, about 5-6 minutes. Remove and set aside.",
    "In the same pan, add garlic and ginger. Sauté for 30 seconds until fragrant.",
    "Add bell pepper and snap peas. Stir-fry for 2-3 minutes until crisp-tender.",
    "Return chicken to the pan. Add the sauce and mango. Stir-fry for another 2 minutes.",
    "Remove from heat. Stir in green onions and cilantro.",
    "Serve hot with lime wedges and your choice of rice or noodles.",
  ],
  tags: ["Asian", "Spicy", "Quick", "Healthy"],
  nutrition: {
    calories: 320,
    protein: "28g",
    carbs: "24g",
    fat: "14g",
  },
}

export default function RecipePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-xl mb-6 opacity-90">{recipe.description}</p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
              <Clock className="w-5 h-5 mr-2" />
              <span>{recipe.totalTime}</span>
            </div>
            <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
              <Users className="w-5 h-5 mr-2" />
              <span>Serves {recipe.servings}</span>
            </div>
            <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
              <ChefHat className="w-5 h-5 mr-2" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full lg:w-2/3 px-4 mb-12 lg:mb-0">
            <div className="bg-white rounded-xl shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6">Ingredients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-4"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold mb-6">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-4 font-bold">
                      {index + 1}
                    </span>
                    <p className="mt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 px-4">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Recipe Details</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong className="text-gray-900">Author:</strong> {recipe.author}
                </p>
                <p>
                  <strong className="text-gray-900">Rating:</strong> {recipe.rating} ({recipe.reviews} reviews)
                </p>
                <p>
                  <strong className="text-gray-900">Prep Time:</strong> {recipe.prepTime}
                </p>
                <p>
                  <strong className="text-gray-900">Cook Time:</strong> {recipe.cookTime}
                </p>
                <p>
                  <strong className="text-gray-900">Total Time:</strong> {recipe.totalTime}
                </p>
                <p>
                  <strong className="text-gray-900">Servings:</strong> {recipe.servings}
                </p>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Nutrition Information</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong className="text-gray-900">Calories:</strong> {recipe.nutrition.calories}
                </p>
                <p>
                  <strong className="text-gray-900">Protein:</strong> {recipe.nutrition.protein}
                </p>
                <p>
                  <strong className="text-gray-900">Carbs:</strong> {recipe.nutrition.carbs}
                </p>
                <p>
                  <strong className="text-gray-900">Fat:</strong> {recipe.nutrition.fat}
                </p>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/recipes" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Recipes
          </Link>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full flex items-center transition-colors duration-300">
            <Printer className="w-5 h-5 mr-2" />
            Print Recipe
          </button>
        </div>
      </div>
    </div>
  )
}

