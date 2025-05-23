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
    <div className="fixed top-20 right-8 z-10 pointer-events-none">
      {/* Main Character Container */}
      <div className="relative">
        {/* Floating Character */}
        <div className="animate-bounce">
          <div className="relative">
            {/* Character Head */}
            <div className="w-20 h-20 bg-gradient-to-b from-pink-100 to-pink-200 rounded-full relative shadow-lg border-2 border-pink-300">
              {/* Ears */}
              <div className="absolute -top-3 left-2 w-6 h-8 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full transform -rotate-12 border border-pink-400"></div>
              <div className="absolute -top-3 right-2 w-6 h-8 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full transform rotate-12 border border-pink-400"></div>

              {/* Inner ears */}
              <div className="absolute -top-1 left-3 w-3 h-4 bg-pink-400 rounded-full transform -rotate-12"></div>
              <div className="absolute -top-1 right-3 w-3 h-4 bg-pink-400 rounded-full transform rotate-12"></div>

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
              <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-600 rounded-full"></div>

              {/* Mouth */}
              <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-pink-700 rounded-full"></div>

              {/* Bow on head */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-4 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-rose-600 rounded-full"></div>
                  <div className="absolute -left-1 top-0 w-4 h-4 bg-rose-400 rounded-full transform -rotate-45"></div>
                  <div className="absolute -right-1 top-0 w-4 h-4 bg-rose-400 rounded-full transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="w-16 h-12 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full mt-2 mx-auto border-2 border-pink-300 relative">
              {/* Arms */}
              <div className="absolute -left-3 top-2 w-6 h-6 bg-pink-200 rounded-full border border-pink-300 animate-pulse"></div>
              <div className="absolute -right-3 top-2 w-6 h-6 bg-pink-200 rounded-full border border-pink-300 animate-pulse"></div>

              {/* Heart on chest */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Hearts and Stars */}
        <div className="absolute -top-6 -left-4 animate-ping">
          <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
        </div>
        <div className="absolute -top-8 right-2 animate-ping animation-delay-1000">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute top-2 -right-6 animate-ping animation-delay-2000">
          <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
        </div>
        <div className="absolute -top-4 left-6 animate-ping animation-delay-1500">
          <Star className="w-2 h-2 text-yellow-300 fill-yellow-300" />
        </div>

        {/* Speech Bubble */}
        <div className="absolute -left-32 top-4 transition-all duration-1000">
          <div className="bg-white rounded-2xl p-3 shadow-lg border-2 border-pink-200 relative transform hover:scale-105 transition-transform">
            <p className="text-sm text-pink-700 whitespace-nowrap font-medium">{messages[messageIndex]}</p>
            {/* Speech bubble tail */}
            <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-8 border-l-pink-200 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </div>

      {/* Magical sparkles around character */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-300 rounded-full animate-ping animation-delay-500 opacity-70"></div>
        <div className="absolute top-8 right-2 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-1500 opacity-60"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-yellow-400 rounded-full animate-ping animation-delay-2500 opacity-80"></div>
        <div className="absolute bottom-2 right-6 w-2 h-2 bg-pink-300 rounded-full animate-ping animation-delay-3000 opacity-50"></div>
        <div className="absolute top-12 left-8 w-1 h-1 bg-yellow-200 rounded-full animate-ping animation-delay-3500 opacity-70"></div>
      </div>
    </div>
  )
}
