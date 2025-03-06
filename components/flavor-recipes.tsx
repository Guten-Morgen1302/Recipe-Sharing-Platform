import Image from "next/image"
import Link from "next/link"
import { Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FlavorRecipes() {
  const recipes = [
    {
      id: 1,
      title: "Cardamom Spiced Coffee",
      description: "A warming coffee with aromatic cardamom and a hint of cinnamon",
      image: "/placeholder.svg?height=300&width=400",
      prepTime: "5 min",
      servings: 2,
      difficulty: "Easy",
      tags: ["Beverage", "Spiced", "Quick"],
      slug: "cardamom-spiced-coffee",
    },
    {
      id: 2,
      title: "Lemon Herb Roasted Chicken",
      description: "Juicy roasted chicken with bright lemon and fresh herbs",
      image: "/placeholder.svg?height=300&width=400",
      prepTime: "1 hr 15 min",
      servings: 4,
      difficulty: "Medium",
      tags: ["Main Dish", "Poultry", "Dinner"],
      slug: "lemon-herb-roasted-chicken",
    },
    {
      id: 3,
      title: "Vanilla Bean Panna Cotta",
      description: "Silky smooth Italian dessert with real vanilla bean",
      image: "/placeholder.svg?height=300&width=400",
      prepTime: "4 hrs (including setting time)",
      servings: 6,
      difficulty: "Medium",
      tags: ["Dessert", "Italian", "Make-ahead"],
      slug: "vanilla-bean-panna-cotta",
    },
    {
      id: 4,
      title: "Garlic Truffle Fries",
      description: "Crispy fries tossed with garlic and truffle oil",
      image: "/placeholder.svg?height=300&width=400",
      prepTime: "30 min",
      servings: 4,
      difficulty: "Easy",
      tags: ["Side Dish", "Vegetarian", "Snack"],
      slug: "garlic-truffle-fries",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Flavor-Inspired Recipes</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Delicious recipes that showcase our favorite flavor combinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
              </div>
              <CardHeader className="p-4">
                <Link href={`/recipes/${recipe.slug}`}>
                  <CardTitle className="text-lg hover:text-primary transition-colors">{recipe.title}</CardTitle>
                </Link>
                <CardDescription className="mt-2 line-clamp-2">{recipe.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {recipe.prepTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Serves {recipe.servings}
                  </div>
                  <div>
                    <span className="font-medium">{recipe.difficulty}</span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/recipes/${recipe.slug}`}>View Recipe</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/recipes">Browse all recipes</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

