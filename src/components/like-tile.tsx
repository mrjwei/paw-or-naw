'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { Dog } from '@/lib/types'

interface LikeTileProps {
  dog: Dog
}

export function LikeTile({ dog }: LikeTileProps) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLikeBack = () => {
    setIsLiked(!isLiked)
    console.log(isLiked ? 'Unliked:' : 'Liked back:', dog.name)
    // Add your like back logic here
  }

  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm">
      <img
        src={dog.photos[0]}
        alt={dog.name}
        className="w-full aspect-square object-cover"
      />
      <div className="p-3 bg-white">
        <h3 className="font-bold text-lg text-gray-900">{dog.name}</h3>
        <p className="text-gray-500 text-sm">{dog.breed}, {dog.age}</p>
        <button
          className={`w-full mt-2 py-2 px-4 rounded-full transition-all flex items-center justify-center gap-2 ${
            isLiked
              ? 'bg-pink-500 hover:bg-pink-600 text-white'
              : 'bg-pink-50 hover:bg-pink-100 text-pink-500'
          }`}
          onClick={handleLikeBack}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-white' : 'fill-pink-500'}`} />
          <span className="font-semibold">{isLiked ? 'Liked' : 'Like Back'}</span>
        </button>
      </div>
    </div>
  )
}
