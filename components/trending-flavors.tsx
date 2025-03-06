import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function TrendingFlavors() {
  const trendingFlavors = [
    {
      id: 1,
      name: "Matcha Green Tea",
      description: "Earthy and slightly sweet with vibrant green color",
      image: "/placeholder.svg?height=200&width=300",
      trend: "+156% this month",
      slug: "matcha-green-tea",
    },
    {
      id: 2,
      name: "Cardamom",
      description: "Aromatic and complex with citrusy and minty notes",
      image: "/placeholder.svg?height=200&width=300",
      trend: "+98% this month",
      slug: "cardamom",
    },
    {
      id: 3,
      name: "Yuzu",
      description: "Bright citrus flavor with hints of mandarin and grapefruit",
      image: "/placeholder.svg?height=200&width=300",
      trend: "+87% this month",
      slug: "yuzu",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex items-center mb-8">
          <TrendingUp className="h-6 w-6 text-primary mr-2" />
          <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingFlavors.map((flavor) => (
            <Card key={flavor.id} className="overflow-hidden">
              <div className="aspect-[3/2] relative">
                <Image src={flavor.image || "/placeholder.svg"} alt={flavor.name} fill className="object-cover" />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{flavor.name}</CardTitle>
                  <span className="text-xs font-medium text-primary flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {flavor.trend}
                  </span>
                </div>
                <CardDescription className="mt-2">{flavor.description}</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/flavors/${flavor.slug}`} className="flex items-center justify-center">
                    See flavor details
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/trending">View all trending flavors</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

