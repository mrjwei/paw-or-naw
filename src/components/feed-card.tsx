'use client'
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion'
import { useState } from 'react'
import Script from 'next/script'
import { Cake, Dog as DogIcon, Ruler, Cookie, ChevronLeft, ChevronRight } from 'lucide-react'
import { Dog } from '@/lib/types'

declare module 'react' {
    interface IntrinsicElements {
        'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'agent-id': string };
    }
}

interface FeedCardProps {
    dog: Dog
    onSwipe: (dir: 'paw' | 'naw') => void
    isTopCard: boolean
}

export function FeedCard({ dog, onSwipe, isTopCard }: FeedCardProps) {
    const x = useMotionValue(0)
    const rotate = useTransform(x, [-200, 200], [-30, 30])
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0])
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

    const isScooby = dog.name === 'Scooby Doo'

    const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        // Disable swipe if interacting with widget? No, maybe just let them swipe.
        if (info.offset.x > 100) {
            onSwipe('paw')
        } else if (info.offset.x < -100) {
            onSwipe('naw')
        }
    }

    const nextPhoto = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentPhotoIndex((prev) => (prev + 1) % dog.photos.length)
    }

    const prevPhoto = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentPhotoIndex((prev) => (prev - 1 + dog.photos.length) % dog.photos.length)
    }

    return (
        <motion.div
            style={{ x, rotate, opacity }}
            drag={isTopCard ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            whileDrag={{ scale: 1.05, cursor: "grabbing" }}
            className="absolute top-0 left-0 w-full h-[500px] glass-card rounded-[32px] overflow-hidden cursor-grab touch-none ring-1 ring-black/5"
        >
            <div className="h-[50%] relative transition-[height] duration-300">
                <img src={dog.photos[currentPhotoIndex] || '/placeholder-dog.png'} alt={dog.name} className="w-full h-full object-cover pointer-events-none" />

                {/* Photo navigation areas with icons */}
                {dog.photos.length > 1 && (
                    <>
                        {/* Left Navigation */}
                        <button
                            onClick={prevPhoto}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1.5 transition-all pointer-events-auto z-10 shadow-md"
                        >
                            <ChevronLeft size={20} className="text-gray-800" />
                        </button>

                        {/* Right Navigation */}
                        <button
                            onClick={nextPhoto}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1.5 transition-all pointer-events-auto z-10 shadow-md"
                        >
                            <ChevronRight size={20} className="text-gray-800" />
                        </button>

                        {/* Photo Indicators */}
                        <div className="absolute top-4 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
                            {dog.photos.map((_: string, index: number) => (
                                <div
                                    key={index}
                                    className={`h-1 rounded-full transition-all ${
                                        index === currentPhotoIndex
                                            ? 'bg-white w-8'
                                            : 'bg-white/50 w-1'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 pt-24 pointer-events-none">
                    <h2 className="text-3xl font-bold text-white tracking-tight drop-shadow-md">{dog.name}</h2>
                </div>
            </div>
            <div className={`px-6 py-4 h-[50%] transition-[height] duration-300 bg-white/50 backdrop-blur-sm pointer-events-none flex flex-col gap-3`}>
                {/* Info Pills */}
                <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 bg-white/80 rounded-full px-3 py-1.5 shadow-sm">
                        <Cake size={14} className="text-gray-600" />
                        <span className="text-gray-900 font-medium text-sm">{dog.age} years old</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/80 rounded-full px-3 py-1.5 shadow-sm">
                        <DogIcon size={14} className="text-gray-600" />
                        <span className="text-gray-900 font-medium text-sm">{dog.breed}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/80 rounded-full px-3 py-1.5 shadow-sm">
                        <Ruler size={14} className="text-gray-600" />
                        <span className="text-gray-900 font-medium text-sm">{dog.size}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/80 rounded-full px-3 py-1.5 shadow-sm">
                        <Cookie size={14} className="text-gray-600" />
                        <span className="text-gray-900 font-medium text-sm">{dog.favoriteTreat}</span>
                    </div>
                </div>
                <p className="text-gray-700 line-clamp-4 text-sm leading-relaxed">{dog.bio}</p>
            </div>

            {isScooby && (
                <>
                     <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 pointer-events-auto" onPointerDown={(e) => e.stopPropagation()}>
                        <elevenlabs-convai agent-id="agent_9801kam9pardfedb3kbhmbx7cb1n"></elevenlabs-convai>
                     </div>
                     <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="afterInteractive" />
                </>
            )}

            {/* Visual indicators for swipe */}
             <motion.div style={{ opacity: useTransform(x, [0, 100], [0, 1]) }} className="absolute top-10 left-10 border-4 border-green-500 text-green-500 font-bold text-4xl p-2 rounded transform -rotate-12 pointer-events-none">
                PAW
            </motion.div>
            <motion.div style={{ opacity: useTransform(x, [-100, 0], [1, 0]) }} className="absolute top-10 right-10 border-4 border-red-500 text-red-500 font-bold text-4xl p-2 rounded transform rotate-12 pointer-events-none">
                NAW
            </motion.div>
        </motion.div>
    )
}
