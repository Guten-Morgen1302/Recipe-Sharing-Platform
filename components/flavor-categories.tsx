import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FlavorCategories() {
  const categories = [
    {
      id: "sweet",
      name: "Sweet",
      description: "Delightful sweet flavors for desserts and treats",
      flavors: [
        { name: "Vanilla", slug: "vanilla" },
        { name: "Chocolate", slug: "chocolate" },
        { name: "Caramel", slug: "caramel" },
        { name: "Honey", slug: "honey" },
        { name: "Maple", slug: "maple" },
        { name: "Coconut", slug: "coconut" },
      ],
    },
    {
      id: "savory",
      name: "Savory",
      description: "Rich and complex flavors for main dishes",
      flavors: [
        { name: "Garlic", slug: "garlic" },
        { name: "Onion", slug: "onion" },
        { name: "Mushroom", slug: "mushroom" },
        { name: "Truffle", slug: "truffle" },
        { name: "Rosemary", slug: "rosemary" },
        { name: "Thyme", slug: "thyme" },
      ],
    },
    {
      id: "spicy",
      name: "Spicy",
      description: "Bold and fiery flavors to add heat",
      flavors: [
        { name: "Chili", slug: "chili" },
        { name: "Cayenne", slug: "cayenne" },
        { name: "Jalapeño", slug: "jalapeno" },
        { name: "Black Pepper", slug: "black-pepper" },
        { name: "Wasabi", slug: "wasabi" },
        { name: "Sriracha", slug: "sriracha" },
      ],
    },
    {
      id: "citrus",
      name: "Citrus",
      description: "Bright and tangy citrus flavors",
      flavors: [
        { name: "Lemon", slug: "lemon" },
        { name: "Lime", slug: "lime" },
        { name: "Orange", slug: "orange" },
        { name: "Grapefruit", slug: "grapefruit" },
        { name: "Yuzu", slug: "yuzu" },
        { name: "Bergamot", slug: "bergamot" },
      ],
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Flavor Categories</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection of flavors organized by category
          </p>
        </div>

        <Tabs defaultValue="sweet" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{category.name} Flavors</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {category.flavors.map((flavor) => (
                      <Link
                        key={flavor.slug}
                        href={`/flavors/${flavor.slug}`}
                        className="block p-4 bg-background rounded-lg text-center hover:bg-primary/10 transition-colors"
                      >
                        <span className="font-medium">{flavor.name}</span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link href={`/categories/${category.id}`} className="text-sm text-primary hover:underline">
                    View all {category.name.toLowerCase()} flavors
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

