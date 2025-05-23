import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartIcon, SunriseIcon, Music } from "lucide-react"
import { AnimatedCharacter } from "@/components/animated-character"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Character */}
      <AnimatedCharacter />

      {/* Floating background hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <HeartIcon className="w-6 h-6 text-rose-200 fill-rose-200 opacity-30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float animation-delay-1000">
          <HeartIcon className="w-4 h-4 text-pink-200 fill-pink-200 opacity-20" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float animation-delay-2000">
          <HeartIcon className="w-5 h-5 text-rose-300 fill-rose-300 opacity-25" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-float animation-delay-3000">
          <HeartIcon className="w-3 h-3 text-pink-300 fill-pink-300 opacity-30" />
        </div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-rose-800">Supporting Your Journey</h1>
          <p className="mt-2 text-rose-600">A message of understanding and care</p>
        </div>

        <Card className="shadow-md border-rose-100">
          <CardHeader>
            <div className="flex justify-center mb-2">
              <SunriseIcon className="h-12 w-12 text-amber-500" />
            </div>
            <CardTitle className="text-center text-rose-700">I Understand Your Path</CardTitle>
            <CardDescription className="text-center">Taking time for yourself is important</CardDescription>
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
              <div className="h-40 w-40 bg-amber-100 rounded-full flex items-center justify-center">
                <HeartIcon className="h-16 w-16 text-rose-300" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <p className="text-sm text-rose-600 text-center">
              I created this page to let you know that I'm here, supporting you from a distance.
            </p>
            <div className="flex justify-center w-full space-x-3">
              <Link href="/message">
                <Button className="bg-rose-600 hover:bg-rose-700">Read My Message</Button>
              </Link>
              <Link href="/music">
                <Button variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                  <Music className="h-4 w-4 mr-2" />
                  Listen to Music
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>

        <p className="text-sm text-center text-rose-500 pt-6">
          Sent with understanding and respect for your journey — Ray
        </p>
      </div>
    </div>
  )
}
