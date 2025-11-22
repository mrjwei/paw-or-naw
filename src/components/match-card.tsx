'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'

interface MatchCardProps {
  matchId: string
  dog: {
    name: string
    photos: string[]
  }
}

export function MatchCard({ matchId, dog }: MatchCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLikeBack = () => {
    setIsLiked(!isLiked)
    console.log(isLiked ? 'Unliked:' : 'Liked back:', dog.name)
    // Add your like back logic here
  }

  return (
    <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
      <Link href={`/matches/${matchId}`} className="flex items-center gap-4 flex-1">
        <img src={dog.photos[0]} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h3 className="font-bold text-lg text-gray-900">{dog.name}</h3>
          <p className="text-gray-500 text-sm">Say hello!</p>
        </div>
      </Link>
      <button 
        className={`p-3 rounded-full transition-all ${
          isLiked 
            ? 'bg-pink-500 hover:bg-pink-600' 
            : 'bg-pink-50 hover:bg-pink-100'
        }`}
        onClick={handleLikeBack}
      >
        <Heart className={`w-6 h-6 ${
          isLiked 
            ? 'text-white fill-white' 
            : 'text-pink-500 fill-pink-500'
        }`} />
      </button>
    </div>
  )
}
