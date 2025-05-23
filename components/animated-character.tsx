"use client"

import { useState, useEffect } from "react"
import { Heart, Star } from "lucide-react"

export function AnimatedCharacter() {
  const [messageIndex, setMessageIndex] = useState(0)
  const [isBlinking, setIsBlinking] = useState(false)

  const messages = ["Hello, Angela! 💕", "You're amazing! ✨", "Take your time! 🌸", "I believe in you! 💖"]

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length)
    }, 3000)

    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 150)
    }, 2000)

    return () => {
      clearInterval(messageInterval)
      clearInterval(blinkInterval)
    }
  }, [])

  return (
    <div className="pointer-events-none">
      {/* Main Character Container */}
      <div className="relative scale-75 md:scale-100 transform-gpu">
        {/* Floating Character */}
        <div className="animate-bounce" style={{ animationDuration: "3s" }}>
          <div className="relative">
            {/* Character Head */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-b from-pink-100 to-pink-200 rounded-full relative shadow-lg border-2 border-pink-300">
              {/* Ears */}
              <div className="absolute -top-2 left-1 md:-top-3 md:left-2 w-4 h-6 md:w-6 md:h-8 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full transform -rotate-12 border border-pink-400"></div>
              <div className="absolute -top-2 right-1 md:-top-3 md:right-2 w-4 h-6 md:w-6 md:h-8 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full transform rotate-12 border border-pink-400"></div>

              {/* Inner ears */}
              <div className="absolute -top-1 left-2 md:-top-1 md:left-3 w-2 h-3 md:w-3 md:h-4 bg-pink-400 rounded-full transform -rotate-12"></div>
              <div className="absolute -top-1 right-2 md:-top-1 md:right-3 w-2 h-3 md:w-3 md:h-4 bg-pink-400 rounded-full transform rotate-12"></div>

              {/* Eyes */}
              <div
                className={`absolute top-4 left-3 md:top-6 md:left-4 transition-all duration-150 ${isBlinking ? "h-1" : "h-2 md:h-3"}`}
              >
                <div className="w-2 md:w-3 h-full bg-black rounded-full relative">
                  {!isBlinking && <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"></div>}
                </div>
              </div>
              <div
                className={`absolute top-4 right-3 md:top-6 md:right-4 transition-all duration-150 ${isBlinking ? "h-1" : "h-2 md:h-3"}`}
              >
                <div className="w-2 md:w-3 h-full bg-black rounded-full relative">
                  {!isBlinking && <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"></div>}
                </div>
              </div>

              {/* Blush */}
              <div className="absolute top-6 left-0 md:top-8 md:left-1 w-3 h-2 md:w-4 md:h-3 bg-pink-400 rounded-full opacity-60"></div>
              <div className="absolute top-6 right-0 md:top-8 md:right-1 w-3 h-2 md:w-4 md:h-3 bg-pink-400 rounded-full opacity-60"></div>

              {/* Nose */}
              <div className="absolute top-7 left-1/2 md:top-9 md:left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-600 rounded-full"></div>

              {/* Mouth */}
              <div className="absolute top-8 left-1/2 md:top-11 md:left-1/2 transform -translate-x-1/2 w-3 h-1 md:w-4 md:h-2 border-b-2 border-pink-700 rounded-full"></div>

              {/* Bow on head */}
              <div className="absolute -top-1 left-1/2 md:-top-2 md:left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-3 md:w-6 md:h-4 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 md:w-2 md:h-2 bg-rose-600 rounded-full"></div>
                  <div className="absolute -left-1 top-0 w-3 h-3 md:w-4 md:h-4 bg-rose-400 rounded-full transform -rotate-45"></div>
                  <div className="absolute -right-1 top-0 w-3 h-3 md:w-4 md:h-4 bg-rose-400 rounded-full transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="w-12 h-8 md:w-16 md:h-12 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full mt-1 md:mt-2 mx-auto border-2 border-pink-300 relative">
              {/* Arms */}
              <div
                className="absolute -left-2 top-1 md:-left-3 md:top-2 w-4 h-4 md:w-6 md:h-6 bg-pink-200 rounded-full border border-pink-300 animate-pulse"
                style={{ animationDuration: "2s" }}
              ></div>
              <div
                className="absolute -right-2 top-1 md:-right-3 md:top-2 w-4 h-4 md:w-6 md:h-6 bg-pink-200 rounded-full border border-pink-300 animate-pulse"
                style={{ animationDuration: "2s" }}
              ></div>

              {/* Heart on chest */}
              <div className="absolute top-1 left-1/2 md:top-2 md:left-1/2 transform -translate-x-1/2">
                <Heart className="w-3 h-3 md:w-4 md:h-4 text-rose-500 fill-rose-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Hearts and Stars */}
        <div className="absolute -top-4 -left-3 md:-top-6 md:-left-4 animate-ping" style={{ animationDuration: "2s" }}>
          <Heart className="w-3 h-3 md:w-4 md:h-4 text-pink-400 fill-pink-400" />
        </div>
        <div
          className="absolute -top-5 right-1 md:-top-8 md:right-2 animate-ping animation-delay-1000"
          style={{ animationDuration: "2s" }}
        >
          <Star className="w-2 h-2 md:w-3 md:h-3 text-yellow-400 fill-yellow-400" />
        </div>
        <div
          className="absolute top-1 -right-4 md:top-2 md:-right-6 animate-ping animation-delay-2000"
          style={{ animationDuration: "2s" }}
        >
          <Heart className="w-2 h-2 md:w-3 md:h-3 text-rose-400 fill-rose-400" />
        </div>
        <div
          className="absolute -top-3 left-4 md:-top-4 md:left-6 animate-ping animation-delay-1500"
          style={{ animationDuration: "2s" }}
        >
          <Star className="w-1 h-1 md:w-2 md:h-2 text-yellow-300 fill-yellow-300" />
        </div>

        {/* Speech Bubble */}
        <div className="absolute -left-24 top-2 md:-left-32 md:top-4 transition-all duration-1000">
          <div className="bg-white rounded-2xl p-2 md:p-3 shadow-lg border-2 border-pink-200 relative transform hover:scale-105 transition-transform">
            <p className="text-xs md:text-sm text-pink-700 whitespace-nowrap font-medium">{messages[messageIndex]}</p>
            {/* Speech bubble tail */}
            <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-l-6 md:border-l-8 border-l-white border-t-3 md:border-t-4 border-t-transparent border-b-3 md:border-b-4 border-b-transparent"></div>
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-6 md:border-l-8 border-l-pink-200 border-t-3 md:border-t-4 border-t-transparent border-b-3 md:border-b-4 border-b-transparent"></div>
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
          className="absolute top-6 right-1 md:top-8 md:right-2 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-1500 opacity-60"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-1 h-1 bg-yellow-400 rounded-full animate-ping animation-delay-2500 opacity-80"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-1 right-4 md:bottom-2 md:right-6 w-1 h-1 md:w-2 md:h-2 bg-pink-300 rounded-full animate-ping animation-delay-3000 opacity-50"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-8 left-6 md:top-12 md:left-8 w-1 h-1 bg-yellow-200 rounded-full animate-ping animation-delay-3500 opacity-70"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>
    </div>
  )
}
