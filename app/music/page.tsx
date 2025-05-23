"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, ExternalLink } from "lucide-react"

export default function MusicPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Music className="h-12 w-12 text-rose-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-rose-800">seasons</h1>
          <p className="mt-2 text-rose-600">wave to earth (with lyrics)</p>
        </div>

        <Card className="shadow-md border-rose-100">
          <CardHeader>
            <CardTitle className="text-center text-rose-700">Our Song</CardTitle>
            <p className="text-center text-sm text-rose-500">A melody that speaks to the heart</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* YouTube Embed */}
            <div className="relative aspect-video w-full bg-rose-100 rounded-md overflow-hidden">
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse flex flex-col items-center">
                    <Music className="h-12 w-12 text-rose-300 mb-2" />
                    <p className="text-rose-400 text-sm">Loading music...</p>
                  </div>
                </div>
              )}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YWR0WPLZMfM?si=gF12vlMnyVhsh_hq"
                title="seasons by wave to earth (lyrics)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onLoad={handleIframeLoad}
              ></iframe>
            </div>

            {/* Message about the song */}
            <div className="bg-white p-4 rounded-lg border border-rose-100">
              <p className="text-rose-700 text-sm">
                Like seasons, life is always changing. This song reminds me that change is natural and necessary. As you
                take this time for yourself, remember that this is just a season in your life - a time for growth and
                renewal. The lyrics in this version will help you understand the beautiful message even more deeply.
              </p>
            </div>

            {/* Attribution */}
            <div className="bg-rose-50 p-3 rounded-lg">
              <p className="text-xs text-center text-rose-600">
                "seasons" performed by wave to earth. Lyrics video shared via YouTube.
              </p>
              <div className="flex justify-center mt-2">
                <Link
                  href="https://youtu.be/YWR0WPLZMfM?si=gF12vlMnyVhsh_hq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center text-rose-600 hover:text-rose-800"
                >
                  <span>View on YouTube</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/">
              <Button variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                Back to Home
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <p className="text-sm text-center text-rose-500">Music can express what words cannot — Ray</p>
      </div>
    </div>
  )
}
