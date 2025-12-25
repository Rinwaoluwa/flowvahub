import { useState, useEffect, useCallback, useRef } from 'react'


export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      title: 'Organize your tools',
      description: 'Keep your apps, subscriptions, and tech stack in one simple space.',
      image: '/org_tools.png',
      bgColor: '#F3E8FF', // Light Purple
      accent: '#A855F7',
    },
    {
      title: 'Discover what works',
      description: 'Find new tools tailored to your workflow, curated for freelancers.',
      image: '/discover_tools.png',
      bgColor: '#DBEAFE', // Light Blue
      accent: '#3B82F6',
    },
    {
      title: 'Get Rewarded',
      description: 'Earn perks, gift cards and cashback just for staying productive.',
      image: '/get_rewarded.png',
      bgColor: '#DCFCE7', // Light Green
      accent: '#22C55E',
    },
  ]

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === features.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }, [features.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === 0) {
        return features.length - 1;
      }
      return prev - 1;
    });
  }, [[features.length]]);

  // Auto-play logic
  useEffect(() => {
    if (isDragging) return

    const interval = setInterval(nextSlide, 3000)
    return () => clearInterval(interval)
  }, [isDragging, nextSlide])

  // Drag Event Handlers
  const handleStart = (x: number) => {
    setIsDragging(true)
    setStartX(x)
    setDragOffset(0)
  }

  const handleMove = (x: number) => {
    if (!isDragging) return
    let currentOffset = x - startX
    // Limit drag to avoid breaking layout visual too much
    const isAtStart = activeIndex === 0 && currentOffset > 0;
    const isAtEnd = activeIndex === features.length - 1 && currentOffset < 0;

    if (isAtStart || isAtEnd) {
      currentOffset /= 3; // This is the "resistance" logic
    }
    const maxDrag = 300
    const constrainedOffset = Math.max(Math.min(currentOffset, maxDrag), -maxDrag)
    setDragOffset(constrainedOffset)
  }

  const handleEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 50 // Minimum drag distance to trigger slide
    if (dragOffset > threshold) {
      prevSlide()
    } else if (dragOffset < -threshold) {
      nextSlide()
    }

    setDragOffset(0)
  }

  // Calculate style for each card
  const getCardStyle = (index: number) => {

    // We need to determine the relative position in the circular buffer
    // -1: Left, 0: Center, 1: Right, etc.
    const relIndex = index - activeIndex;


    // Base Transform Values
    let translateX = 0
    let scale = 1
    let rotateY = 0
    let zIndex = 0
    let opacity = 1
    let blur = 0

    // Drag influence (simulated percentage)
    // 100px drag ~= 20% movement
    const dragPercent = (dragOffset / 500)

    // Apply Logic
    if (relIndex === 0) {
      // CENTER CARD
      translateX = 0 + dragPercent * 100
      rotateY = 0 + dragPercent * -10
      scale = 1.2 - Math.abs(dragPercent) * 0.1
      zIndex = 30
      opacity = 1
      blur = 0
    } else if (relIndex === 1) {
      // RIGHT PREVIEW
      translateX = 100 + dragPercent * 100 // Starts at 100% right
      rotateY = -40 + dragPercent * -10
      scale = 1.2
      zIndex = 20
      opacity = 0.6
      blur = 1 // Subtle blur for depth
    } else if (relIndex === -1) {
      // LEFT PREVIEW
      translateX = -100 + dragPercent * 100
      rotateY = 40 + dragPercent * -10
      scale = 1.2
      zIndex = 20
      opacity = 0.6
      blur = 1
    } else {
      // HIDDEN / FAR OFF
      translateX = relIndex * 100
      scale = 0
      opacity = 0
    }

    // Convert to CSS string
    const transform = `translateX(${translateX}%) scale(${scale}) perspective(1200px) rotateY(${rotateY}deg)`

    return {
      transform,
      zIndex,
      opacity,
      filter: `blur(${blur}px)`,
      transition: isDragging ? 'none' : 'all 600ms cubic-bezier(0.2, 0.8, 0.2, 1)',
    }
  }

  return (
    <section className="flex items-center justify-center py-10 px-4 overflow-hidden">

      {/* Main Container */}
      <div
        className="relative w-full max-w-[1000px] rounded-[48px] p-8 md:p-16 transition-colors duration-700 ease-out flex flex-col items-center overflow-hidden"
        style={{ backgroundColor: features[activeIndex].bgColor }}
        onMouseDown={(e) => handleStart(e.pageX)}
        onMouseMove={(e) => handleMove(e.pageX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].pageX)}
        onTouchMove={(e) => handleMove(e.touches[0].pageX)}
        onTouchEnd={handleEnd}
      >

        {/* Header Text */}
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-[40px] md:text-[72px] text-center font-impact leading-[120%]">
            Everything in one place
          </h1>
          <p className="mt-4 text-gray-600 max-w-lg mx-auto">
            Swipe to explore how we help you manage your digital life.
          </p>
        </div>

        {/* 3D Carousel Stage */}
        <div
          ref={containerRef}
          className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center perspective-[1200px]"
        >
          {features.map((feature, i) => {
            const style = getCardStyle(i)
            return (
              <div
                key={i}
                className="absolute w-[280px] md:w-[420px] aspect-[4/3] top-0 left-0 right-0 mx-auto select-none touch-pan-y"
                style={style}
              >
                {/* Card Container */}
                <div
                  className="relative w-full h-full overflow-hidden"
                >
                  {/* Image Area */}
                  <div className="h-full w-full p-6 flex items-center justify-center">
                    {/* Replace src with feature.image in production */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-2xl shadow-sm pointer-events-none"
                    />
                  </div>

                </div>

                <div
                  className={`absolute -bottom-24 left-0 right-0 text-center transition-all duration-500 delay-100 transform opacity-100 translate-y-0`}
                >
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm md:text-base">{feature.description}</p>
                </div>

              </div>
            )
          })}
        </div>

        {/* Navigation Controls */}
        <div className="mt-10 flex items-center gap-6 relative z-10">
          {/* Pagination Dots */}
          <div className="flex gap-2">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i
                  ? 'w-8 bg-gray-900'
                  : 'w-2 bg-gray-900/20 hover:bg-gray-900/40'
                  }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}