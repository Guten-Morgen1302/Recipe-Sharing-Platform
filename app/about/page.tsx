import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">About FlavorFusion</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            FlavorFusion was born out of a passion for culinary exploration and a desire to bring innovative flavor
            combinations to food enthusiasts around the world. Founded in 2023, our mission is to inspire creativity in
            the kitchen and elevate everyday cooking experiences.
          </p>
          <p className="text-muted-foreground">
            We believe that the right combination of flavors can transform a simple dish into an extraordinary culinary
            adventure. Our team of expert flavor scientists and chefs work tirelessly to develop unique profiles that
            push the boundaries of taste and aroma.
          </p>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800&h=600"
            alt="Chefs working in a kitchen"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              We constantly push the boundaries of flavor, exploring new combinations and techniques to bring you unique
              taste experiences.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Quality</h3>
            <p className="text-muted-foreground">
              We source only the finest ingredients and use rigorous testing to ensure our flavors meet the highest
              standards of quality and safety.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Community</h3>
            <p className="text-muted-foreground">
              We foster a vibrant community of food lovers, encouraging the sharing of ideas and culinary creations
              among our users.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Flavor Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Whether you're a professional chef or a home cooking enthusiast, FlavorFusion is here to inspire and elevate
          your culinary creations. Join our community today and start exploring the world of flavors!
        </p>
        <Button size="lg" asChild>
          <a href="/signup">Get Started</a>
        </Button>
      </div>
    </div>
  )
}

