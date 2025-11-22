'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { MOCK_MY_DOG } from '@/lib/mock-data'
import { generateBabyDog } from './actions'
import { ArrowLeft, Heart } from 'lucide-react'
import Link from 'next/link'

export default function BreedPage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const partnerImage = searchParams.get('partnerImage')
    const partnerName = searchParams.get('partnerName') || 'Partner'

    const [isGenerating, setIsGenerating] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleBreed = async () => {
        if (!partnerImage) return

        setIsGenerating(true)
        setError(null)

        try {
            const result = await generateBabyDog(MOCK_MY_DOG.photos[0], partnerImage)

            if (result.success && result.imageUrl) {
                // Encode the URL to pass it safely
                const encodedUrl = encodeURIComponent(result.imageUrl)
                router.push(`/breed/result?image=${encodedUrl}`)
            } else {
                setError(result.error || 'Something went wrong')
                setIsGenerating(false)
            }
        } catch {
            setError('Failed to generate')
            setIsGenerating(false)
        }
    }

    if (!partnerImage) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-xl font-bold mb-4">No partner selected</h1>
                    <Link href="/" className="text-blue-500 hover:underline">Go back to feed</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-pink-50 to-white p-4 flex flex-col">
            <header className="mb-8 flex items-center">
                <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-600" />
                </Link>
                <h1 className="ml-4 text-2xl font-bold text-gray-800">Breeding Lab</h1>
            </header>

            <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full space-y-12">

                {/* Parents Display */}
                <div className="flex items-center justify-center gap-4 w-full">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={MOCK_MY_DOG.photos[0]} alt={MOCK_MY_DOG.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="mt-2 font-medium text-gray-700">{MOCK_MY_DOG.name}</span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <Heart className="w-8 h-8 text-pink-500 fill-pink-500 animate-pulse" />
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={partnerImage} alt={partnerName} className="w-full h-full object-cover" />
                        </div>
                        <span className="mt-2 font-medium text-gray-700">{partnerName}</span>
                    </div>
                </div>

                {/* Action Area */}
                <div className="w-full flex flex-col items-center space-y-6">
                    {isGenerating ? (
                        <div className="flex flex-col items-center space-y-4">
                            <div className="relative w-32 h-32">
                                <motion.div
                                    className="absolute inset-0 border-4 border-pink-200 rounded-full"
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                />
                                <motion.div
                                    className="absolute inset-0 border-t-4 border-pink-500 rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-2xl">🧬</span>
                                </div>
                            </div>
                            <p className="text-gray-600 font-medium animate-pulse">Creating magic...</p>
                        </div>
                    ) : (
                        <button
                            onClick={handleBreed}
                            className="w-full py-4 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            <span className="text-xl">✨</span>
                            Generate Baby
                        </button>
                    )}

                    {error && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm text-center">
                            {error}
                        </div>
                    )}
                </div>

                <div className="text-center text-gray-400 text-sm max-w-xs">
                    AI will analyze both parents to predict what their puppy might look like.
                </div>
            </div>
        </div>
    )
}
