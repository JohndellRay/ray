"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

export function AnimatedCharacter() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-20 right-8 z-10 pointer-events-none">
      {/* Main Character Container */}
      <div className="relative">
        {/* Floating Character */}
        <div className="animate-bounce">
          <div className="relative">
            {/* Character Body */}
            <div className="w-16 h-20 bg-gradient-to-b from-rose-200 to-rose-300 rounded-full relative shadow-lg">
              {/* Eyes */}
              <div className="absolute top-6 left-3 w-2 h-2 bg-rose-800 rounded-full animate-pulse"></div>
              <div className="absolute top-6 right-3 w-2 h-2 bg-rose-800 rounded-full animate-pulse"></div>

              {/* Blush */}
              <div className="absolute top-8 left-1 w-3 h-2 bg-rose-400 rounded-full opacity-60"></div>
              <div className="absolute top-8 right-1 w-3 h-2 bg-rose-400 rounded-full opacity-60"></div>

              {/* Smile */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-rose-800 rounded-full"></div>
            </div>

            {/* Arms */}
            <div className="absolute top-8 -left-2 w-4 h-8 bg-rose-200 rounded-full transform rotate-12 animate-pulse"></div>
            <div className="absolute top-8 -right-2 w-4 h-8 bg-rose-200 rounded-full transform -rotate-12 animate-pulse"></div>
          </div>
        </div>

        {/* Floating Hearts */}
        <div className="absolute -top-4 -left-2 animate-ping">
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
        </div>
        <div className="absolute -top-6 right-2 animate-ping animation-delay-1000">
          <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
        </div>
        <div className="absolute top-2 -right-4 animate-ping animation-delay-2000">
          <Heart className="w-2 h-2 text-rose-300 fill-rose-300" />
        </div>

        {/* Speech Bubble */}
        <div
          className={`absolute -left-24 top-2 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="bg-white rounded-lg p-2 shadow-md border border-rose-200 relative">
            <p className="text-xs text-rose-700 whitespace-nowrap">Hello, Angela! 💕</p>
            {/* Speech bubble tail */}
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>
        </div>
      </div>

      {/* Sparkles around character */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1 h-1 bg-yellow-300 rounded-full animate-ping animation-delay-500"></div>
        <div className="absolute top-4 right-0 w-1 h-1 bg-yellow-400 rounded-full animate-ping animation-delay-1500"></div>
        <div className="absolute bottom-0 left-2 w-1 h-1 bg-yellow-200 rounded-full animate-ping animation-delay-2500"></div>
        <div className="absolute bottom-2 right-4 w-1 h-1 bg-yellow-300 rounded-full animate-ping animation-delay-3000"></div>
      </div>
    </div>
  )
}
