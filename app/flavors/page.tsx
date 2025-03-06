import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FlavorsPage() {
  const flavors = [
    {
      id: 1,
      name: "Vanilla Bean",
      description: "Rich and creamy with authentic vanilla bean specks",
      image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=800&h=600",
      category: "Classic",
      rating: 4.9,
      slug: "vanilla-bean",
    },
    {
      id: 2,
      name: "Salted Caramel",
      description: "Sweet caramel with a perfect touch of sea salt",
      image: "https://images.unsplash.com/photo-1620980776848-84ac10194945?auto=format&fit=crop&q=80&w=800&h=600",
      category: "Sweet",
      rating: 4.8,
      slug: "salted-caramel",
    },
    {
      id: 3,
      name: "Lemon Zest",
      description: "Bright and tangy with fresh lemon zest",
      image: "https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?auto=format&fit=crop&q=80&w=800&h=600",
      category: "Citrus",
      rating: 4.7,
      slug: "lemon-zest",
    },
    {
      id: 4,
      name: "Smoked Paprika",
      description: "Smoky and savory with a hint of sweetness",
      image: "https://images.unsplash.com/photo-1598346762291-aee88549193f?auto=format&fit=crop&q=80&w=800&h=600",
      category: "Savory",
      rating: 4.6,
      slug: "smoked-paprika",
    },
    {
      id: 5,
      name: "Matcha Green Tea",
      description: "Earthy and slightly sweet with vibrant green color",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800&h=600",
      category: "Specialty",
      rating: 4.5,
      slug: "matcha-green-tea",
    },
    {
      id: 6,
      name: "Cardamom",
      description: "Aromatic and complex with citrusy and minty notes",
      image: "https://images.unsplash.com/photo-1638228668841-8a8b9a17fc58?auto=format&fit=crop&q=80&w=800&h=600",
      category: "Spice",
      rating: 4.4,
      slug: "cardamom",
    },
    {
      id: 7,
      name: "Truffle",
      description: "Luxurious and earthy with intense umami flavor",
      image: "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?auto=format&fit=crop&q=80&w=800&h=600",
      category: "Gourmet",
      rating: 4.8,
      slug: "truffle",
    },
    {
      id: 8,
      name: "Lavender",
      description: "Floral and delicate with a subtle sweetness",
      image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&q=80&w=800&h=600",
      category: "Floral",
      rating: 4.3,
      slug: "lavender",
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Explore Our Flavors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {flavors.map((flavor) => (
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
  )
}

