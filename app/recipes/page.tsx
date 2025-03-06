import Image from "next/image"
import Link from "next/link"
import { Clock, Users } from "lucide-react"

const recipes = [
  {
    id: 1,
    title: "Spicy Mango Chicken Stir-Fry",
    description: "A vibrant and flavorful dish combining sweet mango with spicy chicken in a quick stir-fry.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=2070&h=1380",
    prepTime: "35 min",
    servings: 4,
    difficulty: "Medium",
    slug: "spicy-mango-chicken-stir-fry",
  },
  {
    id: 2,
    title: "Creamy Tuscan Garlic Pasta",
    description: "A rich and indulgent pasta dish with sun-dried tomatoes, spinach, and a creamy garlic sauce.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=2070&h=1380",
    prepTime: "30 min",
    servings: 6,
    difficulty: "Easy",
    slug: "creamy-tuscan-garlic-pasta",
  },
  {
    id: 3,
    title: "Grilled Lemon Herb Salmon",
    description: "Perfectly grilled salmon fillets with a zesty lemon and herb marinade.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=2070&h=1380",
    prepTime: "25 min",
    servings: 4,
    difficulty: "Easy",
    slug: "grilled-lemon-herb-salmon",
  },
  {
    id: 4,
    title: "Vegetarian Buddha Bowl",
    description: "A nourishing bowl packed with colorful veggies, grains, and a tahini dressing.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2070&h=1380",
    prepTime: "20 min",
    servings: 2,
    difficulty: "Easy",
    slug: "vegetarian-buddha-bowl",
  },
  {
    id: 5,
    title: "Spicy Thai Coconut Soup",
    description: "A fragrant and spicy soup with coconut milk, lemongrass, and fresh vegetables.",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=2070&h=1380",
    prepTime: "40 min",
    servings: 6,
    difficulty: "Medium",
    slug: "spicy-thai-coconut-soup",
  },
  {
    id: 6,
    title: "Classic Beef Bourguignon",
    description: "A hearty French stew with tender beef, red wine, and aromatic vegetables.",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=2070&h=1380",
    prepTime: "3 hrs",
    servings: 8,
    difficulty: "Hard",
    slug: "classic-beef-bourguignon",
  },
]

export default function RecipesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Discover Delicious Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Link
              href={`/recipes/${recipe.slug}`}
              key={recipe.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="relative h-64">
                <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View Recipe</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h2>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {recipe.prepTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Serves {recipe.servings}
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      recipe.difficulty === "Easy"
                        ? "bg-green-100 text-green-800"
                        : recipe.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

