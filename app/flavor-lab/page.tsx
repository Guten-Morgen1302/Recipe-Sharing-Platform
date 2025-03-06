"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const flavorCategories = [
  { name: "Sweet", options: ["Vanilla", "Chocolate", "Caramel", "Honey"] },
  { name: "Savory", options: ["Garlic", "Onion", "Mushroom", "Truffle"] },
  { name: "Spicy", options: ["Chili", "Jalapeno", "Sriracha", "Wasabi"] },
  { name: "Herbal", options: ["Basil", "Rosemary", "Thyme", "Mint"] },
]

export default function FlavorLab() {
  const [selectedFlavors, setSelectedFlavors] = useState([])
  const [customFlavor, setCustomFlavor] = useState("")
  const [generatedCombination, setGeneratedCombination] = useState(null)

  const handleFlavorSelect = (flavor) => {
    if (selectedFlavors.includes(flavor)) {
      setSelectedFlavors(selectedFlavors.filter((f) => f !== flavor))
    } else {
      setSelectedFlavors([...selectedFlavors, flavor])
    }
  }

  const handleAddCustomFlavor = () => {
    if (customFlavor && !selectedFlavors.includes(customFlavor)) {
      setSelectedFlavors([...selectedFlavors, customFlavor])
      setCustomFlavor("")
    }
  }

  const generateCombination = () => {
    if (selectedFlavors.length < 2) return

    const combination = {
      name: `${selectedFlavors[0]} ${selectedFlavors[selectedFlavors.length - 1]} Fusion`,
      description: `A unique blend of ${selectedFlavors.join(", ")}, creating a harmonious and exciting flavor profile.`,
    }

    setGeneratedCombination(combination)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-500 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Flavor Lab</h1>
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Select Flavors</h2>
              {flavorCategories.map((category) => (
                <div key={category.name} className="mb-4">
                  <h3 className="text-lg font-medium mb-2">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.options.map((flavor) => (
                      <Button
                        key={flavor}
                        variant={selectedFlavors.includes(flavor) ? "default" : "outline"}
                        onClick={() => handleFlavorSelect(flavor)}
                      >
                        {flavor}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <Label htmlFor="custom-flavor">Add Custom Flavor</Label>
                <div className="flex mt-1">
                  <Input
                    id="custom-flavor"
                    value={customFlavor}
                    onChange={(e) => setCustomFlavor(e.target.value)}
                    placeholder="Enter a custom flavor"
                    className="mr-2"
                  />
                  <Button onClick={handleAddCustomFlavor}>Add</Button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Selected Flavors</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedFlavors.map((flavor) => (
                  <div key={flavor} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    {flavor}
                  </div>
                ))}
              </div>
              <Button onClick={generateCombination} disabled={selectedFlavors.length < 2} className="w-full">
                Generate Flavor Combination
              </Button>
              {generatedCombination && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white"
                >
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Sparkles className="mr-2" /> {generatedCombination.name}
                  </h3>
                  <p>{generatedCombination.description}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

