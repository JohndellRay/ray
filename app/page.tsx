import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartIcon, SunriseIcon, Music, Star } from "lucide-react"
import { AnimatedCharacter } from "@/components/animated-character"
import { DraggableWrapper } from "@/components/draggable-wrapper"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-amber-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Draggable Character */}
      <DraggableWrapper id="home-character" initialPosition={{ x: 20, y: 20 }}>
        <AnimatedCharacter />
      </DraggableWrapper>

      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Hearts */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <HeartIcon className="w-6 h-6 text-pink-200 fill-pink-200 opacity-30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float animation-delay-1000">
          <HeartIcon className="w-4 h-4 text-rose-200 fill-rose-200 opacity-20" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float animation-delay-2000">
          <HeartIcon className="w-5 h-5 text-pink-300 fill-pink-300 opacity-25" />
        </div>

        {/* Stars */}
        <div className="absolute top-1/5 right-1/3 animate-float animation-delay-1500">
          <Star className="w-4 h-4 text-yellow-200 fill-yellow-200 opacity-30" />
        </div>
        <div className="absolute bottom-1/3 right-1/5 animate-float animation-delay-3000">
          <Star className="w-3 h-3 text-yellow-300 fill-yellow-300 opacity-25" />
        </div>
        <div className="absolute top-2/3 left-1/5 animate-float animation-delay-2500">
          <Star className="w-5 h-5 text-yellow-200 fill-yellow-200 opacity-20" />
        </div>

        {/* Cute clouds */}
        <div className="absolute top-1/6 left-1/2 animate-float animation-delay-4000">
          <div className="w-12 h-6 bg-white rounded-full opacity-40 relative">
            <div className="absolute -left-2 top-1 w-6 h-4 bg-white rounded-full"></div>
            <div className="absolute -right-2 top-1 w-6 h-4 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="absolute bottom-1/6 right-1/2 animate-float animation-delay-5000">
          <div className="w-8 h-4 bg-white rounded-full opacity-30 relative">
            <div className="absolute -left-1 top-0 w-4 h-3 bg-white rounded-full"></div>
            <div className="absolute -right-1 top-0 w-4 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-rose-800">Supporting Your Journey</h1>
          <p className="mt-2 text-rose-600">A message of understanding and care</p>
        </div>

        <Card className="shadow-lg border-2 border-pink-200 bg-gradient-to-b from-white to-pink-50">
          <CardHeader>
            <div className="flex justify-center mb-2">
              <div className="relative">
                <SunriseIcon className="h-12 w-12 text-amber-500" />
                <div className="absolute -top-1 -right-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
            <CardTitle className="text-center text-rose-700">I Understand Your Path</CardTitle>
            <CardDescription className="text-center text-pink-600">
              Taking time for yourself is important
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-rose-700">
              I wanted to reach out and let you know that I understand your decision to focus on yourself. Personal
              growth takes courage, and I admire your strength in recognizing what you need.
            </p>
            <p className="text-rose-700">
              While I miss your presence in my life, I respect the space you need and the journey you're on.
              Self-discovery and healing are deeply personal processes that deserve time and care.
            </p>
            <div className="py-4 flex justify-center">
              <div className="h-40 w-40 bg-gradient-to-b from-amber-100 to-pink-100 rounded-full flex items-center justify-center border-2 border-pink-200 relative">
                <HeartIcon className="h-16 w-16 text-rose-400 fill-rose-400" />
                <div className="absolute -top-2 -right-2">
                  <Star
                    className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <p className="text-sm text-rose-600 text-center">
              I created this page to let you know that I'm here, supporting you from a distance.
            </p>
            <div className="flex justify-center w-full space-x-3">
              <Link href="/message">
                <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-2 border-rose-300 shadow-lg">
                  Read My Message
                </Button>
              </Link>
              <Link href="/music">
                <Button variant="outline" className="border-2 border-pink-300 text-rose-700 hover:bg-pink-50 shadow-lg">
                  <Music className="h-4 w-4 mr-2" />
                  Listen to Music
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="text-center pt-6">
          <p className="text-sm text-rose-500">Sent with understanding and respect for your journey</p>
          <p className="text-sm font-medium text-rose-600 mt-1">Johndell Ray</p>
        </div>
      </div>
    </div>
  )
}
