"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, ExternalLink } from "lucide-react"
import { MusicCharacter } from "@/components/music-character"
import { DraggableWrapper } from "@/components/draggable-wrapper"

export default function MusicPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-indigo-50 to-pink-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Draggable Character - using defaultPosition instead of window */}
      <DraggableWrapper id="music-character" defaultPosition="bottom-right">
        <MusicCharacter />
      </DraggableWrapper>

      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Music notes */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-4 h-4 bg-purple-300 rounded-full relative opacity-30">
            <div className="absolute top-0 right-0 w-2 h-6 bg-purple-300 rounded-sm transform rotate-45"></div>
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float animation-delay-1000">
          <div className="w-3 h-3 bg-indigo-300 rounded-full relative opacity-20">
            <div className="absolute top-0 right-0 w-1.5 h-5 bg-indigo-300 rounded-sm transform rotate-45"></div>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float animation-delay-2000">
          <div className="w-4 h-4 bg-purple-300 rounded-full relative opacity-25">
            <div className="absolute top-0 right-0 w-2 h-6 bg-purple-300 rounded-sm transform rotate-45"></div>
          </div>
        </div>

        {/* Stars */}
        <div className="absolute top-1/5 right-1/3 animate-float animation-delay-1500">
          <div className="w-4 h-4 bg-yellow-200 rounded-full opacity-30"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/5 animate-float animation-delay-3000">
          <div className="w-3 h-3 bg-yellow-300 rounded-full opacity-25"></div>
        </div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <Music className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-purple-800">seasons</h1>
          <p className="mt-2 text-purple-600">wave to earth (with lyrics)</p>
        </div>

        <Card className="shadow-lg border-2 border-purple-200 bg-gradient-to-b from-white to-purple-50">
          <CardHeader>
            <CardTitle className="text-center text-purple-700">The Sound Beneath Our Silence</CardTitle>
            <p className="text-center text-sm text-purple-500">A melody that speaks to the heart</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* YouTube Embed */}
            <div className="relative aspect-video w-full bg-purple-100 rounded-md overflow-hidden border-2 border-purple-200">
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse flex flex-col items-center">
                    <Music className="h-12 w-12 text-purple-300 mb-2" />
                    <p className="text-purple-400 text-sm">Loading music...</p>
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
            <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
              <p className="text-purple-700 text-sm">
                Like seasons, life is always changing. This song reminds me that change is natural and necessary. As you
                take this time for yourself, remember that this is just a season in your life - a time for growth and
                renewal. The lyrics in this version will help you understand the beautiful message even more deeply.
              </p>
            </div>

            {/* Attribution */}
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <p className="text-xs text-center text-purple-600">
                "seasons" performed by wave to earth. Lyrics video shared via YouTube.
              </p>
              <div className="flex justify-center mt-2">
                <Link
                  href="https://youtu.be/YWR0WPLZMfM?si=gF12vlMnyVhsh_hq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center text-purple-600 hover:text-purple-800"
                >
                  <span>View on YouTube</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-3">
            <div className="flex justify-center">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 shadow-md"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="text-center pt-6">
          <p className="text-sm text-purple-500">Music can express what words cannot</p>
          <p className="text-sm font-medium text-purple-600 mt-1">Johndell Ray</p>
        </div>
      </div>
    </div>
  )
}
