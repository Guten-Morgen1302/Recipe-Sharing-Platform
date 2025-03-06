import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityCreations() {
  const communityPosts = [
    {
      id: 1,
      title: "Lavender Honey Ice Cream",
      description: "I combined floral lavender with sweet honey for this summer treat!",
      image: "/placeholder.svg?height=400&width=600",
      author: {
        name: "Emma Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        username: "emmaj",
      },
      likes: 243,
      comments: 42,
      slug: "lavender-honey-ice-cream",
    },
    {
      id: 2,
      title: "Smoky Chipotle BBQ Sauce",
      description: "Perfect balance of heat and smokiness for your next cookout.",
      image: "/placeholder.svg?height=400&width=600",
      author: {
        name: "Marcus Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        username: "marcusc",
      },
      likes: 187,
      comments: 31,
      slug: "smoky-chipotle-bbq-sauce",
    },
    {
      id: 3,
      title: "Rosemary Lemon Shortbread",
      description: "These cookies combine herbal and citrus notes beautifully!",
      image: "/placeholder.svg?height=400&width=600",
      author: {
        name: "Sophia Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        username: "sophiar",
      },
      likes: 156,
      comments: 24,
      slug: "rosemary-lemon-shortbread",
    },
    {
      id: 4,
      title: "Basil Watermelon Mojito",
      description: "The most refreshing summer drink you'll ever try!",
      image: "/placeholder.svg?height=400&width=600",
      author: {
        name: "James Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        username: "jamesw",
      },
      likes: 132,
      comments: 19,
      slug: "basil-watermelon-mojito",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Community Creations</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Discover amazing flavor combinations created by our community members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communityPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="aspect-[3/2] relative">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader className="p-4">
                <Link href={`/community/${post.slug}`}>
                  <CardTitle className="text-xl hover:text-primary transition-colors">{post.title}</CardTitle>
                </Link>
                <CardDescription className="mt-2">{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{post.author.name}</p>
                    <p className="text-xs text-muted-foreground">@{post.author.username}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {post.comments}
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/community">View all community creations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

