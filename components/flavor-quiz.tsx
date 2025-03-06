"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

export default function FlavorQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: "Which flavor profile do you prefer in your morning beverage?",
      options: [
        { id: "a", text: "Rich and bold (coffee, dark chocolate)" },
        { id: "b", text: "Bright and tangy (citrus, berry)" },
        { id: "c", text: "Smooth and creamy (vanilla, milk)" },
        { id: "d", text: "Spiced and aromatic (cinnamon, cardamom)" },
      ],
    },
    {
      id: 2,
      question: "When cooking savory dishes, which flavor enhancer do you reach for most?",
      options: [
        { id: "a", text: "Herbs (basil, thyme, rosemary)" },
        { id: "b", text: "Spices (cumin, paprika, curry)" },
        { id: "c", text: "Aromatics (garlic, onion, ginger)" },
        { id: "d", text: "Umami boosters (mushrooms, soy sauce, parmesan)" },
      ],
    },
    {
      id: 3,
      question: "Which dessert flavor combination appeals to you most?",
      options: [
        { id: "a", text: "Chocolate and mint" },
        { id: "b", text: "Lemon and berry" },
        { id: "c", text: "Caramel and sea salt" },
        { id: "d", text: "Cinnamon and apple" },
      ],
    },
    {
      id: 4,
      question: "How do you feel about spicy heat in your food?",
      options: [
        { id: "a", text: "Love it! The spicier the better" },
        { id: "b", text: "Enjoy moderate heat that doesn't overpower" },
        { id: "c", text: "Prefer just a hint of warmth" },
        { id: "d", text: "Would rather avoid spicy heat altogether" },
      ],
    },
    {
      id: 5,
      question: "Which of these international cuisines do you enjoy most?",
      options: [
        { id: "a", text: "Thai (lemongrass, coconut, chili)" },
        { id: "b", text: "Mediterranean (olive oil, lemon, herbs)" },
        { id: "c", text: "Indian (curry, garam masala, cardamom)" },
        { id: "d", text: "Japanese (umami, soy, wasabi)" },
      ],
    },
  ]

  const flavorProfiles = [
    {
      title: "Bold Explorer",
      description:
        "You love intense, complex flavors and aren't afraid to try new combinations. You appreciate depth and richness in your food and drinks.",
      recommendations: [
        "Dark chocolate with sea salt",
        "Espresso with cardamom",
        "Smoked paprika",
        "Aged balsamic vinegar",
      ],
    },
    {
      title: "Fresh Enthusiast",
      description:
        "You gravitate toward bright, vibrant flavors that awaken the palate. You appreciate clean, refreshing taste experiences.",
      recommendations: ["Citrus infusions", "Fresh herbs", "Crisp white wines", "Berry and herb combinations"],
    },
    {
      title: "Comfort Connoisseur",
      description:
        "You enjoy familiar, comforting flavors with subtle complexity. You appreciate tradition with thoughtful twists.",
      recommendations: ["Vanilla bean with cinnamon", "Caramelized onions", "Nutmeg and cream", "Roasted garlic"],
    },
    {
      title: "Adventurous Palate",
      description:
        "You seek out unique and unexpected flavor combinations. You're always looking to expand your taste horizons.",
      recommendations: ["Black garlic", "Yuzu kosho", "Saffron and honey", "Szechuan peppercorns"],
    },
  ]

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answer
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
  }

  // Simple algorithm to determine flavor profile based on answers
  const determineFlavorProfile = () => {
    // Count the frequency of each answer type
    const answerCounts = { a: 0, b: 0, c: 0, d: 0 }

    selectedAnswers.forEach((answer) => {
      if (answer in answerCounts) {
        answerCounts[answer as keyof typeof answerCounts]++
      }
    })

    // Find the most frequent answer
    let maxCount = 0
    let maxAnswer = "a"

    for (const [answer, count] of Object.entries(answerCounts)) {
      if (count > maxCount) {
        maxCount = count
        maxAnswer = answer
      }
    }

    // Map answer to flavor profile
    const profileIndex =
      {
        a: 0, // Bold Explorer
        b: 1, // Fresh Enthusiast
        c: 2, // Comfort Connoisseur
        d: 3, // Adventurous Palate
      }[maxAnswer] || 0

    return flavorProfiles[profileIndex]
  }

  const currentProgress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Flavor Profile Quiz</h2>
          <p className="mt-2 text-muted-foreground">
            Discover your flavor personality and get personalized recommendations
          </p>
        </div>

        <Card className="w-full">
          {!showResults ? (
            <>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <Progress value={currentProgress} className="w-1/3" />
                </div>
                <CardTitle>{questions[currentQuestion].question}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedAnswers[currentQuestion]} onValueChange={handleAnswerSelect}>
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 py-2">
                      <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                      <Label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
                  Previous
                </Button>
                <Button onClick={handleNext} disabled={!selectedAnswers[currentQuestion]}>
                  {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                </Button>
              </CardFooter>
            </>
          ) : (
            <>
              <CardHeader>
                <CardTitle className="text-center text-2xl">Your Flavor Profile</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedAnswers.length === questions.length && (
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-primary">{determineFlavorProfile().title}</h3>
                    <p>{determineFlavorProfile().description}</p>

                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Recommended Flavors:</h4>
                      <ul className="space-y-1">
                        {determineFlavorProfile().recommendations.map((rec, index) => (
                          <li key={index} className="text-muted-foreground">
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={handleRestart}>Take Quiz Again</Button>
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </section>
  )
}

