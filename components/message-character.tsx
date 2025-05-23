"use client"

import { useState, useEffect } from "react"
import { Heart, Star, MessageCircle } from "lucide-react"

export function MessageCharacter() {
  const [isBlinking, setIsBlinking] = useState(false)
  const [isWaving, setIsWaving] = useState(false)

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 150)
    }, 3000)

    const waveInterval = setInterval(() => {
      setIsWaving(true)
      setTimeout(() => setIsWaving(false), 1000)
    }, 5000)

    return () => {
      clearInterval(blinkInterval)
      clearInterval(waveInterval)
    }
  }, [])

  return (
    <div className="fixed bottom-20 left-8 z-10 pointer-events-none">
      {/* Main Character Container */}
      <div className="relative">
        {/* Floating Character */}
        <div className="animate-float" style={{ animationDuration: "4s" }}>
          <div className="relative">
            {/* Character Head */}
            <div className="w-20 h-16 bg-gradient-to-b from-blue-100 to-blue-200 rounded-full relative shadow-lg border-2 border-blue-300">
              {/* Ears */}
              <div className="absolute -top-4 left-3 w-5 h-7 bg-gradient-to-b from-blue-200 to-blue-300 rounded-full transform -rotate-12 border border-blue-400"></div>
              <div className="absolute -top-4 right-3 w-5 h-7 bg-gradient-to-b from-blue-200 to-blue-300 rounded-full transform rotate-12 border border-blue-400"></div>

              {/* Inner ears */}
              <div className="absolute -top-2 left-4 w-2 h-3 bg-blue-400 rounded-full transform -rotate-12"></div>
              <div className="absolute -top-2 right-4 w-2 h-3 bg-blue-400 rounded-full transform rotate-12"></div>

              {/* Eyes */}
              <div className={`absolute top-5 left-4 transition-all duration-150 ${isBlinking ? "h-1" : "h-3"}`}>
                <div className="w-3 h-full bg-black rounded-full relative">
                  {!isBlinking && <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"></div>}
                </div>
              </div>
              <div className={`absolute top-5 right-4 transition-all duration-150 ${isBlinking ? "h-1" : "h-3"}`}>
                <div className="w-3 h-full bg-black rounded-full relative">
                  {!isBlinking && <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"></div>}
                </div>
              </div>

              {/* Blush */}
              <div className="absolute top-7 left-1 w-4 h-3 bg-pink-400 rounded-full opacity-60"></div>
              <div className="absolute top-7 right-1 w-4 h-3 bg-pink-400 rounded-full opacity-60"></div>

              {/* Nose */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>

              {/* Mouth */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-blue-700 rounded-full"></div>
            </div>

            {/* Body */}
            <div className="w-16 h-12 bg-gradient-to-b from-blue-200 to-blue-300 rounded-full mt-2 mx-auto border-2 border-blue-300 relative">
              {/* Arms */}
              <div
                className={`absolute -left-4 top-2 w-6 h-6 bg-blue-200 rounded-full border border-blue-300 transition-transform duration-300 ${
                  isWaving ? "transform -rotate-45" : ""
                }`}
              ></div>
              <div className="absolute -right-4 top-2 w-6 h-6 bg-blue-200 rounded-full border border-blue-300"></div>

              {/* Message icon on chest */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                <MessageCircle className="w-4 h-4 text-blue-500 fill-blue-100" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Hearts and Stars */}
        <div className="absolute -top-6 -left-4 animate-ping">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute -top-8 right-2 animate-ping animation-delay-1000">
          <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
        </div>
        <div className="absolute top-2 -right-6 animate-ping animation-delay-2000">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        </div>

        {/* Speech Bubble */}
        <div className="absolute -right-40 top-0 transition-all duration-1000">
          <div className="bg-white rounded-2xl p-3 shadow-lg border-2 border-blue-200 relative transform hover:scale-105 transition-transform">
            <p className="text-sm text-blue-700 whitespace-nowrap font-medium">I'm here for you! 💙</p>
            {/* Speech bubble tail */}
            <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2 w-0 h-0 border-r-8 border-r-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-r-8 border-r-blue-200 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </div>

      {/* Magical sparkles around character */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-300 rounded-full animate-ping animation-delay-500 opacity-70"></div>
        <div className="absolute top-8 right-2 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-1500 opacity-60"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-yellow-400 rounded-full animate-ping animation-delay-2500 opacity-80"></div>
      </div>
    </div>
  )
}
