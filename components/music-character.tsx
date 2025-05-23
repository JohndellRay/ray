"use client"

import { useState, useEffect } from "react"
import { Star, Music } from "lucide-react"

export function MusicCharacter() {
  const [isBlinking, setIsBlinking] = useState(false)
  const [isBopping, setIsBopping] = useState(false)

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 150)
    }, 3000)

    // Music bopping animation
    const bopInterval = setInterval(() => {
      setIsBopping(true)
      setTimeout(() => setIsBopping(false), 500)
    }, 1000)

    return () => {
      clearInterval(blinkInterval)
      clearInterval(bopInterval)
    }
  }, [])

  return (
    <div className="fixed bottom-20 right-8 z-10 pointer-events-none">
      {/* Main Character Container */}
      <div className="relative">
        {/* Floating Character */}
        <div className={`transition-transform duration-300 ${isBopping ? "transform -translate-y-2" : ""}`}>
          <div className="relative">
            {/* Character Head */}
            <div className="w-20 h-18 bg-gradient-to-b from-purple-100 to-purple-200 rounded-full relative shadow-lg border-2 border-purple-300">
              {/* Ears */}
              <div className="absolute -top-5 left-3 w-6 h-8 bg-gradient-to-b from-purple-200 to-purple-300 rounded-full transform -rotate-12 border border-purple-400"></div>
              <div className="absolute -top-5 right-3 w-6 h-8 bg-gradient-to-b from-purple-200 to-purple-300 rounded-full transform rotate-12 border border-purple-400"></div>

              {/* Inner ears */}
              <div className="absolute -top-3 left-4 w-3 h-4 bg-purple-400 rounded-full transform -rotate-12"></div>
              <div className="absolute -top-3 right-4 w-3 h-4 bg-purple-400 rounded-full transform rotate-12"></div>

              {/* Eyes */}
              <div className={`absolute top-6 left-4 transition-all duration-150 ${isBlinking ? "h-1" : "h-3"}`}>
                <div className="w-3 h-full bg-black rounded-full relative">
                  {!isBlinking && <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"></div>}
                </div>
              </div>
              <div className={`absolute top-6 right-4 transition-all duration-150 ${isBlinking ? "h-1" : "h-3"}`}>
                <div className="w-3 h-full bg-black rounded-full relative">
                  {!isBlinking && <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"></div>}
                </div>
              </div>

              {/* Blush */}
              <div className="absolute top-8 left-1 w-4 h-3 bg-pink-400 rounded-full opacity-60"></div>
              <div className="absolute top-8 right-1 w-4 h-3 bg-pink-400 rounded-full opacity-60"></div>

              {/* Nose */}
              <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full"></div>

              {/* Mouth */}
              <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-purple-700 rounded-full"></div>

              {/* Headphones */}
              <div className="absolute -top-1 left-0 right-0 h-2 bg-purple-400 rounded-full"></div>
              <div className="absolute -left-4 top-2 w-3 h-6 bg-purple-400 rounded-full"></div>
              <div className="absolute -right-4 top-2 w-3 h-6 bg-purple-400 rounded-full"></div>
            </div>

            {/* Body */}
            <div className="w-16 h-12 bg-gradient-to-b from-purple-200 to-purple-300 rounded-full mt-2 mx-auto border-2 border-purple-300 relative">
              {/* Arms */}
              <div className="absolute -left-4 top-2 w-6 h-6 bg-purple-200 rounded-full border border-purple-300"></div>
              <div className="absolute -right-4 top-2 w-6 h-6 bg-purple-200 rounded-full border border-purple-300"></div>

              {/* Music note on chest */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                <Music className="w-4 h-4 text-purple-500 fill-purple-100" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Music Notes and Stars */}
        <div className="absolute -top-6 -left-4 animate-float animation-delay-500">
          <div className="w-3 h-3 bg-purple-400 rounded-full relative">
            <div className="absolute top-0 right-0 w-2 h-4 bg-purple-400 rounded-sm transform rotate-45"></div>
          </div>
        </div>
        <div className="absolute -top-8 right-2 animate-float animation-delay-1000">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute top-2 -right-6 animate-float animation-delay-2000">
          <div className="w-2 h-2 bg-purple-400 rounded-full relative">
            <div className="absolute top-0 right-0 w-1 h-3 bg-purple-400 rounded-sm transform rotate-45"></div>
          </div>
        </div>

        {/* Speech Bubble */}
        <div className="absolute -left-40 top-0 transition-all duration-1000">
          <div className="bg-white rounded-2xl p-3 shadow-lg border-2 border-purple-200 relative transform hover:scale-105 transition-transform">
            <p className="text-sm text-purple-700 whitespace-nowrap font-medium">Music heals the soul! 🎵</p>
            {/* Speech bubble tail */}
            <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-8 border-l-purple-200 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </div>

      {/* Magical sparkles around character */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-300 rounded-full animate-ping animation-delay-500 opacity-70"></div>
        <div className="absolute top-8 right-2 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-1500 opacity-60"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-yellow-400 rounded-full animate-ping animation-delay-2500 opacity-80"></div>
      </div>
    </div>
  )
}
