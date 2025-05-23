"use client"

import type React from "react"

import { useState, useEffect, type ReactNode, useRef } from "react"

interface DraggableWrapperProps {
  children: ReactNode
  id: string
  initialPosition?: { x: number; y: number }
  className?: string
}

export function DraggableWrapper({ children, id, initialPosition, className = "" }: DraggableWrapperProps) {
  const [position, setPosition] = useState(initialPosition || { x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Load saved position from localStorage on mount
  useEffect(() => {
    const savedPosition = localStorage.getItem(`character-position-${id}`)
    if (savedPosition) {
      try {
        setPosition(JSON.parse(savedPosition))
      } catch (e) {
        console.error("Failed to parse saved position", e)
      }
    }
  }, [id])

  // Save position to localStorage when it changes
  useEffect(() => {
    if (!isDragging) {
      localStorage.setItem(`character-position-${id}`, JSON.stringify(position))
    }
  }, [position, isDragging, id])

  // Handle mouse/touch down
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)

    // Calculate offset from the element's top-left corner
    let clientX: number, clientY: number

    if ("touches" in e) {
      // Touch event
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      // Mouse event
      clientX = e.clientX
      clientY = e.clientY
    }

    const rect = wrapperRef.current?.getBoundingClientRect()
    if (rect) {
      setDragOffset({
        x: clientX - rect.left,
        y: clientY - rect.top,
      })
    }
  }

  // Handle mouse/touch move
  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return

    let clientX: number, clientY: number

    if ("touches" in e) {
      // Touch event
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      // Mouse event
      clientX = e.clientX
      clientY = e.clientY
    }

    // Calculate new position
    const newX = clientX - dragOffset.x
    const newY = clientY - dragOffset.y

    // Get viewport dimensions
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    // Get element dimensions
    const rect = wrapperRef.current?.getBoundingClientRect()
    const elementWidth = rect?.width || 0
    const elementHeight = rect?.height || 0

    // Ensure the element stays within viewport bounds
    const boundedX = Math.max(0, Math.min(newX, viewportWidth - elementWidth))
    const boundedY = Math.max(0, Math.min(newY, viewportHeight - elementHeight))

    setPosition({ x: boundedX, y: boundedY })
  }

  // Handle mouse/touch up
  const handleDragEnd = () => {
    setIsDragging(false)
  }

  // Add and remove event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDragMove)
      window.addEventListener("touchmove", handleDragMove)
      window.addEventListener("mouseup", handleDragEnd)
      window.addEventListener("touchend", handleDragEnd)
    }

    return () => {
      window.removeEventListener("mousemove", handleDragMove)
      window.removeEventListener("touchmove", handleDragMove)
      window.removeEventListener("mouseup", handleDragEnd)
      window.removeEventListener("touchend", handleDragEnd)
    }
  }, [isDragging])

  return (
    <div
      ref={wrapperRef}
      className={`fixed z-20 cursor-move ${isDragging ? "opacity-90" : "opacity-100"} transition-opacity ${className}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: "none",
      }}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
    >
      {/* Drag handle indicator */}
      <div className="absolute -top-2 -left-2 w-6 h-6 bg-white/80 rounded-full border border-gray-200 flex items-center justify-center shadow-sm z-10 hover:bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-500"
        >
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      </div>
      {children}
    </div>
  )
}
