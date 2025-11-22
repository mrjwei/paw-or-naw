'use client'

import Link from 'next/link'
import { ArrowLeft, Heart, Sparkles, Award, PawPrint, Coffee, Target, Lightbulb, Cake, Dog as DogIcon, Ruler, Cookie, ChevronLeft, ChevronRight } from 'lucide-react'
import { MOCK_MY_DOG } from '@/lib/mock-data'
import { useState } from 'react'
import { Dog, GalleryPhoto, GalleryVideo } from '@/lib/types'

export default function ProfilePage() {
    const dog = MOCK_MY_DOG as unknown as Dog
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

    const nextPhoto = () => {
        if (!dog.gallery) return
        setCurrentPhotoIndex((prev) => (prev + 1) % dog.gallery!.photos.length)
    }

    const prevPhoto = () => {
        if (!dog.gallery) return
        setCurrentPhotoIndex((prev) => (prev - 1 + dog.gallery!.photos.length) % dog.gallery!.photos.length)
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-8">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-4">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <ArrowLeft size={24} />
                </Link>
                <h1 className="text-xl font-semibold text-gray-900">My Profile</h1>
            </header>

            <div className="max-w-lg mx-auto px-4 py-6 space-y-4">
                {/* Photo Slideshow Card */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="relative h-[500px]">
                        <img
                            src={dog.gallery.photos[currentPhotoIndex].url}
                            className="w-full h-full object-cover"
                            alt={dog.gallery.photos[currentPhotoIndex].caption}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevPhoto}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                        >
                            <ChevronLeft size={24} className="text-gray-900" />
                        </button>
                        <button
                            onClick={nextPhoto}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                        >
                            <ChevronRight size={24} className="text-gray-900" />
                        </button>

                        {/* Photo Indicators */}
                        <div className="absolute top-4 left-0 right-0 flex justify-center gap-1.5">
                            {dog.gallery?.photos.map((_: GalleryPhoto, index: number) => (
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

                        {/* Name and Caption overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h2 className="text-4xl font-bold text-white mb-1">{dog.name}</h2>
                            <p className="text-white/90 text-lg mb-2">{dog.personality}</p>
                            <p className="text-white/80 text-sm italic">{dog.gallery.photos[currentPhotoIndex].caption}</p>
                        </div>
                    </div>
                </div>

                {/* Info Pills */}
                <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100 flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                        <Cake size={16} className="text-gray-600" />
                        <span className="text-gray-900 font-medium">{dog.age} years old</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                        <DogIcon size={16} className="text-gray-600" />
                        <span className="text-gray-900 font-medium">{dog.breed}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                        <Ruler size={16} className="text-gray-600" />
                        <span className="text-gray-900 font-medium">{dog.size}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                        <Cookie size={16} className="text-gray-600" />
                        <span className="text-gray-900 font-medium">{dog.favoriteTreat}</span>
                    </div>
                </div>

                {/* Bio Card */}
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="text-gray-400" size={18} strokeWidth={1.5} />
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Bio</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{dog.bio}</p>
                </div>

                {/* Hobbies Card */}
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                        <PawPrint className="text-gray-400" size={18} strokeWidth={1.5} />
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Hobbies</h3>
                    </div>
                    <div className="space-y-2">
                        {dog.hobbies.map((hobby: string, index: number) => (
                            <div key={index} className="flex items-start gap-2 py-2 border-b border-gray-50 last:border-0">
                                <span className="text-gray-700 text-sm leading-relaxed">{hobby}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Looking For Card */}
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                        <Heart className="text-gray-400" size={18} strokeWidth={1.5} />
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Looking For</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{dog.lookingFor.join(' ')}</p>
                </div>

                {/* Fun Fact Card */}
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="text-gray-400" size={18} strokeWidth={1.5} />
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Fun Fact</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{dog.funFact}</p>
                </div>

                {/* Tags Card */}
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                        <Target className="text-gray-400" size={18} strokeWidth={1.5} />
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Tags</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {dog.tags.map((tag: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Video Gallery Section */}
                <div className="mt-8 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 px-1">Daily Joys With Snoopy</h2>

                    <div className="space-y-4">
                        {dog.gallery?.videos.map((video: GalleryVideo, index: number) => (
                            <div key={`video-${index}`} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                                <div className="relative h-[400px]">
                                    <video
                                        src={video.url}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-gray-900 font-medium">{video.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Owner Info Card */}
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Owner Information</h3>
                    <p className="text-gray-900 font-medium">John Doe</p>
                    <p className="text-gray-500 text-sm">john@example.com</p>
                </div>

                {/* Sign Out Button */}
                <button className="w-full bg-white text-red-600 py-3 rounded-2xl font-semibold hover:bg-red-50 transition-colors shadow-sm border border-gray-200">
                    Sign Out
                </button>
            </div>
        </div>
    )
}
