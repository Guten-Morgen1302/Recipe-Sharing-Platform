"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <h1 className="text-6xl font-bold mb-6">Welcome to Flavor Fusion</h1>
          <p className="text-xl mb-8">Discover a world of exciting tastes and culinary adventures</p>
          <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-purple-100">
            <Link href="/flavors" className="inline-flex items-center">
              Explore Flavors <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeaturedCard
            title="Trending Flavors"
            description="Discover the hottest flavor combinations of the season"
            image="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=1470&h=980"
            link="/flavors/trending"
          />
          <FeaturedCard
            title="Recipe of the Day"
            description="Spicy Mango Chicken Stir-Fry: A perfect blend of sweet and heat"
            image="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=2072&h=1200"
            link="/recipes/spicy-mango-chicken-stir-fry"
          />
          <FeaturedCard
            title="Flavor Lab"
            description="Mix and match flavors to create your own unique combinations"
            image="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=1470&h=980"
            link="/flavor-lab"
          />
        </div>
      </div>
    </div>
  )
}

function FeaturedCard({ title, description, image, link }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center">
          Learn More <ArrowRight className="ml-1" size={16} />
        </Link>
      </div>
    </motion.div>
  )
}

