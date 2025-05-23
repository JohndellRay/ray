import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Leaf, Sun, Music } from "lucide-react"

export default function MessagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <Card className="shadow-md border-rose-100">
          <CardHeader>
            <CardTitle className="text-center text-rose-700">Supporting You From Afar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-rose-700">
              Angela, I hope this message finds you well on your journey of self-discovery and growth. I wanted to share some
              thoughts with you.
            </p>
            <p className="text-rose-700">
              First and foremost, I want you to know that I respect your decision to focus on yourself. It takes
              tremendous courage to recognize when you need time for personal growth.
            </p>

            <div className="flex justify-between py-4">
              <div className="flex flex-col items-center">
                <Sparkles className="h-8 w-8 text-amber-500 mb-2" />
                <p className="text-sm text-center text-rose-600">Growth</p>
              </div>
              <div className="flex flex-col items-center">
                <Leaf className="h-8 w-8 text-green-500 mb-2" />
                <p className="text-sm text-center text-rose-600">Healing</p>
              </div>
              <div className="flex flex-col items-center">
                <Sun className="h-8 w-8 text-yellow-500 mb-2" />
                <p className="text-sm text-center text-rose-600">Renewal</p>
              </div>
            </div>

            <p className="text-rose-700">
              While I miss having you in my life, I understand that this time apart is necessary. Your well-being
              matters to me, and I want you to have the space you need to become the person you want to be.
            </p>

            <p className="text-rose-700">
              There's no pressure or expectation from my side. I simply want you to know that I'm thinking of you and
              wishing you well on your journey. Whatever you discover about yourself along the way, I hope it brings you
              peace and fulfillment.
            </p>

            <p className="text-rose-700">
              If and when you feel ready to reconnect - whether as friends or something more - I'll be here. And if your
              path leads elsewhere, I'll understand that too.
            </p>

            <p className="text-rose-700 font-medium">Take all the time you need. Your journey matters.</p>
          </CardContent>
          <CardFooter className="flex justify-center space-x-3">
            <Link href="/">
              <Button variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                Back to Home
              </Button>
            </Link>
            <Link href="/music">
              <Button variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                <Music className="h-4 w-4 mr-2" />
                Song
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <p className="text-sm text-center text-rose-500 pt-6">Sent with care and without expectations</p>
      </div>
    </div>
  )
}
