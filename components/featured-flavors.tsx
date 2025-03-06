import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedFlavors() {
  const featuredFlavors = [
    {
      id: 1,
      name: "Vanilla Bean",
      description: "Rich and creamy with authentic vanilla bean specks",
      image: "/placeholder.svg?height=300&width=400",
      category: "Classic",
      rating: 4.9,
      slug: "vanilla-bean",
    },
    {
      id: 2,
      name: "Salted Caramel",
      description: "Sweet caramel with a perfect touch of sea salt",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sweet",
      rating: 4.8,
      slug: "salted-caramel",
    },
    {
      id: 3,
      name: "Lemon Zest",
      description: "Bright and tangy with fresh lemon zest",
      image: "/placeholder.svg?height=300&width=400",
      category: "Citrus",
      rating: 4.7,
      slug: "lemon-zest",
    },
    {
      id: 4,
      name: "Smoked Paprika",
      description: "Smoky and savory with a hint of sweetness",
      image: "/placeholder.svg?height=300&width=400",
      category: "Savory",
      rating: 4.6,
      slug: "smoked-paprika",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Flavors</h2>
            <p className="mt-2 text-muted-foreground">Discover our most popular and unique flavor profiles</p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0" asChild>
            <Link href="/flavors" className="flex items-center">
              View all flavors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFlavors.map((flavor) => (
            <Card key={flavor.id} className="overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image src={flavor.image || "/placeholder.svg"} alt={flavor.name} fill className="object-cover" />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{flavor.name}</CardTitle>
                  <Badge variant="outline">{flavor.category}</Badge>
                </div>
                <CardDescription className="mt-2">{flavor.description}</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm font-medium">{flavor.rating}</span>
                  <div className="ml-1 text-yellow-400">★★★★★</div>
                </div>
                <Button size="sm" asChild>
                  <Link href={`/flavors/${flavor.slug}`}>Explore</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

