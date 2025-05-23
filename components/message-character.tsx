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
    <div className="pointer-events-none">
      {/* Main Character Container */}
      <div className="relative scale-75 md:scale-100 transform-gpu">
        {/* Floating Character */}
        <div className="animate-float" style={{ animationDuration: "4s" }}>
          <div className="relative">
            {/* Character Head */}
            <div className="w-16 h-12 md:w-20 md:h-16 bg-gradient-to-b from-blue-100 to-blue-200 rounded-full relative shadow-lg border-2 border-blue-300">
              {/* Ears */}
              <div className="absolute -top-3 left-2 md:-top-4 md:left-3 w-4 h-5 md:w-5 md:h-7 bg-gradient-to-b from-blue-200 to-blue-300 rounded-full transform -rotate-12 border border-blue-400"></div>
              <div className="absolute -top-3 right-2 md:-top-4 md:right-3 w-4 h-5 md:w-5 md:h-7 bg-gradient-to-b from-blue-200 to-blue-300 rounded-full transform rotate-12 border border-blue-400"></div>

              {/* Inner ears */}
              <div className="absolute -top-1 left-3 md:-top-2 md:left-4 w-1 h-2 md:w-2 md:h-3 bg-blue-400 rounded-full transform -rotate-12"></div>
              <div className="absolute -top-1 right-3 md:-top-2 md:right-4 w-1 h-2 md:w-2 md:h-3 bg-blue-400 rounded-full transform rotate-12"></div>

              {/* Eyes */}
              <div
                className={`absolute top-3 left-3 md:top-5 md:left-4 transition-all duration-150 ${isBlinking ? "h-1" : "h-2 md:h-3"}`}
              >
                <div className="w-2 md:w-3 h-full bg-black rounded-full relative">
                  {!isBlinking && <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"></div>}
                </div>
              </div>
              <div
                className={`absolute top-3 right-3 md:top-5 md:right-4 transition-all duration-150 ${isBlinking ? "h-1" : "h-2 md:h-3"}`}
              >
                <div className="w-2 md:w-3 h-full bg-black rounded-full relative">
                  {!isBlinking && <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"></div>}
                </div>
              </div>

              {/* Blush */}
              <div className="absolute top-5 left-0 md:top-7 md:left-1 w-3 h-2 md:w-4 md:h-3 bg-pink-400 rounded-full opacity-60"></div>
              <div className="absolute top-5 right-0 md:top-7 md:right-1 w-3 h-2 md:w-4 md:h-3 bg-pink-400 rounded-full opacity-60"></div>

              {/* Nose */}
              <div className="absolute top-6 left-1/2 md:top-8 md:left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>

              {/* Mouth */}
              <div className="absolute top-7 left-1/2 md:top-10 md:left-1/2 transform -translate-x-1/2 w-3 h-1 md:w-4 md:h-2 border-b-2 border-blue-700 rounded-full"></div>
            </div>

            {/* Body */}
            <div className="w-12 h-8 md:w-16 md:h-12 bg-gradient-to-b from-blue-200 to-blue-300 rounded-full mt-1 md:mt-2 mx-auto border-2 border-blue-300 relative">
              {/* Arms */}
              <div
                className={`absolute -left-3 top-1 md:-left-4 md:top-2 w-4 h-4 md:w-6 md:h-6 bg-blue-200 rounded-full border border-blue-300 transition-transform duration-300 ${
                  isWaving ? "transform -rotate-45" : ""
                }`}
              ></div>
              <div className="absolute -right-3 top-1 md:-right-4 md:top-2 w-4 h-4 md:w-6 md:h-6 bg-blue-200 rounded-full border border-blue-300"></div>

              {/* Message icon on chest */}
              <div className="absolute top-1 left-1/2 md:top-2 md:left-1/2 transform -translate-x-1/2">
                <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-500 fill-blue-100" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Hearts and Stars */}
        <div className="absolute -top-4 -left-3 md:-top-6 md:-left-4 animate-ping" style={{ animationDuration: "2s" }}>
          <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
        </div>
        <div
          className="absolute -top-5 right-1 md:-top-8 md:right-2 animate-ping animation-delay-1000"
          style={{ animationDuration: "2s" }}
        >
          <Heart className="w-2 h-2 md:w-3 md:h-3 text-pink-400 fill-pink-400" />
        </div>
        <div
          className="absolute top-1 -right-4 md:top-2 md:-right-6 animate-ping animation-delay-2000"
          style={{ animationDuration: "2s" }}
        >
          <Star className="w-2 h-2 md:w-3 md:h-3 text-yellow-400 fill-yellow-400" />
        </div>

        {/* Speech Bubble */}
        <div className="absolute -right-28 top-0 md:-right-40 md:top-0 transition-all duration-1000">
          <div className="bg-white rounded-2xl p-2 md:p-3 shadow-lg border-2 border-blue-200 relative transform hover:scale-105 transition-transform">
            <p className="text-xs md:text-sm text-blue-700 whitespace-nowrap font-medium">I'm here for you! 💙</p>
            {/* Speech bubble tail */}
            <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2 w-0 h-0 border-r-6 md:border-r-8 border-r-white border-t-3 md:border-t-4 border-t-transparent border-b-3 md:border-b-4 border-b-transparent"></div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-r-6 md:border-r-8 border-r-blue-200 border-t-3 md:border-t-4 border-t-transparent border-b-3 md:border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </div>

      {/* Magical sparkles around character */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1 left-1 md:top-2 md:left-2 w-1 h-1 md:w-2 md:h-2 bg-yellow-300 rounded-full animate-ping animation-delay-500 opacity-70"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-6 right-1 md:top-8 md:right-2 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-1500 opacity-60"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-1 h-1 bg-yellow-400 rounded-full animate-ping animation-delay-2500 opacity-80"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>
    </div>
  )
}
