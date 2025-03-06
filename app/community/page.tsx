import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityPage() {
  const communityPosts = [
    {
      id: 1,
      title: "Lavender Honey Ice Cream",
      description: "I combined floral lavender with sweet honey for this summer treat!",
      image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&q=80&w=800&h=600",
      author: {
        name: "Emma Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
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
      image: "https://images.unsplash.com/photo-1613478881426-deeadee06d89?auto=format&fit=crop&q=80&w=800&h=600",
      author: {
        name: "Marcus Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
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
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800&h=600",
      author: {
        name: "Sophia Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
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
      image: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?auto=format&fit=crop&q=80&w=800&h=600",
      author: {
        name: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
        username: "jamesw",
      },
      likes: 132,
      comments: 19,
      slug: "basil-watermelon-mojito",
    },
    {
      id: 5,
      title: "Truffle Parmesan Popcorn",
      description: "Elevate your movie night with this gourmet popcorn!",
      image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&q=80&w=800&h=600",
      author: {
        name: "Olivia Taylor",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
        username: "oliviat",
      },
      likes: 98,
      comments: 15,
      slug: "truffle-parmesan-popcorn",
    },
    {
      id: 6,
      title: "Cardamom Rose Latte",
      description: "A fragrant and soothing twist on your morning coffee.",
      image: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?auto=format&fit=crop&q=80&w=800&h=600",
      author: {
        name: "Aiden Patel",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150",
        username: "aidenp",
      },
      likes: 76,
      comments: 11,
      slug: "cardamom-rose-latte",
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Community Creations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  )
}

