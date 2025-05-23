import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Leaf, Sun, Music } from "lucide-react"
import { MessageCharacter } from "@/components/message-character"

export default function MessagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Character */}
      <MessageCharacter />

      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Sparkles className="w-6 h-6 text-blue-200 opacity-30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float animation-delay-1000">
          <Sparkles className="w-4 h-4 text-indigo-200 opacity-20" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float animation-delay-2000">
          <Sparkles className="w-5 h-5 text-blue-300 opacity-25" />
        </div>

        {/* Clouds */}
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
        <Card className="shadow-lg border-2 border-blue-200 bg-gradient-to-b from-white to-blue-50">
          <CardHeader>
            <CardTitle className="text-center text-blue-700">Supporting You From Afar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-blue-700">
              Angela, I hope this message finds you well on your journey of self-discovery and growth. I wanted to share
              some thoughts with you.
            </p>
            <p className="text-blue-700">
              First and foremost, I want you to know that I respect your decision to focus on yourself. It takes
              tremendous courage to recognize when you need time for personal growth.
            </p>

            <div className="flex justify-between py-4">
              <div className="flex flex-col items-center">
                <Sparkles className="h-8 w-8 text-amber-500 mb-2" />
                <p className="text-sm text-center text-blue-600">Growth</p>
              </div>
              <div className="flex flex-col items-center">
                <Leaf className="h-8 w-8 text-green-500 mb-2" />
                <p className="text-sm text-center text-blue-600">Healing</p>
              </div>
              <div className="flex flex-col items-center">
                <Sun className="h-8 w-8 text-yellow-500 mb-2" />
                <p className="text-sm text-center text-blue-600">Renewal</p>
              </div>
            </div>

            <p className="text-blue-700">
              While I miss having you in my life, I understand that this time apart is necessary. Your well-being
              matters to me, and I want you to have the space you need to become the person you want to be.
            </p>

            <p className="text-blue-700">
              There's no pressure or expectation from my side. I simply want you to know that I'm thinking of you and
              wishing you well on your journey. Whatever you discover about yourself along the way, I hope it brings you
              peace and fulfillment.
            </p>

            <p className="text-blue-700">
              If and when you feel ready to reconnect - whether as friends or something more - I'll be here. And if your
              path leads elsewhere, I'll understand that too.
            </p>

            <p className="text-blue-700 font-medium">Take all the time you need. Your journey matters.</p>
          </CardContent>
          <CardFooter className="flex justify-center space-x-3">
            <Link href="/">
              <Button variant="outline" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 shadow-md">
                Back to Home
              </Button>
            </Link>
            <Link href="/music">
              <Button variant="outline" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 shadow-md">
                <Music className="h-4 w-4 mr-2" />
                Song
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <div className="text-center pt-6">
          <p className="text-sm text-blue-500">Sent with care and without expectations</p>
          <p className="text-sm font-medium text-blue-600 mt-1">Johndell Ray</p>
        </div>
      </div>
    </div>
  )
}
