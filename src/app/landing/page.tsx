import Link from 'next/link'
import Image from 'next/image'
import { Heart, X } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="landing-page min-h-screen bg-white flex flex-col">
      {/* Marketing Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/landing" className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">PawOrNaw</h1>
              <div className="relative w-7 h-7">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Paw */}
                  <ellipse cx="12" cy="16" rx="3" ry="2.5" fill="#FFB3BA" opacity="0.8" />
                  <ellipse cx="8" cy="11" rx="1.5" ry="2" fill="#FFB3BA" opacity="0.8" />
                  <ellipse cx="11" cy="9" rx="1.5" ry="2" fill="#FFB3BA" opacity="0.8" />
                  <ellipse cx="13" cy="9" rx="1.5" ry="2" fill="#FFB3BA" opacity="0.8" />
                  <ellipse cx="16" cy="11" rx="1.5" ry="2" fill="#FFB3BA" opacity="0.8" />
                  {/* Small heart */}
                  <path 
                    d="M17 5C16 4 14.5 4 13.5 5L13 5.5L12.5 5C11.5 4 10 4 9 5C8 6 8 7.5 9 8.5L13 12.5L17 8.5C18 7.5 18 6 17 5Z" 
                    fill="#FF9AA2" 
                    opacity="0.9"
                    transform="translate(5, -2) scale(0.5)"
                  />
                </svg>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/landing" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/how-it-works" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                How it works
              </Link>
              <Link href="/features" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link href="/breeders" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                For Breeders
              </Link>
              <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Login
              </Link>
              <Link href="/onboarding" className="px-5 py-2 rounded-full bg-gradient-to-r from-[#FFB3BA] to-[#FF9AA2] text-white text-sm font-semibold hover:shadow-lg transition-all">
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Visual - Swipe Card Preview */}
      <div className="flex-1 flex flex-col items-center justify-start px-6 pt-4 pb-6">
        {/* Swipe Card Mock */}
        <div className="swipe-card-preview relative w-full max-w-[340px] aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl bg-gradient-to-br from-pink-50 to-white border-4 border-white">
          {/* Dog Image */}
          <div className="relative w-full h-[70%] bg-gradient-to-br from-pink-100 to-orange-50">
            <Image
              src="/dog_profile.png"
              alt="Cute dog"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Dog Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 rounded-t-[28px]">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Max, 3</h2>
            <p className="text-gray-500 text-sm mb-4">Golden Retriever • 2 miles away</p>
            
            {/* Action Buttons */}
            <div className="flex justify-center gap-6 mt-4">
              {/* Dislike Button */}
              <button className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                <X size={32} className="text-gray-500" strokeWidth={2.5} />
              </button>
              
              {/* Like Button */}
              <button className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB3BA] to-[#FF9AA2] flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                <Heart size={28} className="text-white" fill="white" />
              </button>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-10 px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Find the perfect match for your dog.
          </h3>
          <p className="text-gray-500 text-sm tracking-wide">
            Swipe. Match. Message. Connect.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="w-full max-w-[340px] mt-8 px-6">
          <Link href="/onboarding">
            <button className="w-full py-4 rounded-full bg-gradient-to-r from-[#FFB3BA] to-[#FF9AA2] text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-98">
              Get Started
            </button>
          </Link>
        </div>

        {/* Links */}
        <div className="flex gap-6 mt-6 text-sm">
          <Link href="/login" className="text-gray-500 hover:text-gray-700 transition-colors">
            Sign In
          </Link>
          <span className="text-gray-300">•</span>
          <Link href="/about" className="text-gray-500 hover:text-gray-700 transition-colors">
            Learn More
          </Link>
        </div>
      </div>

      {/* Footer Navigation Preview */}
      <div className="footer-preview h-20 bg-white border-t border-gray-100 flex items-center justify-around px-6 shadow-[0_-2px_8px_rgba(0,0,0,0.04)]">
        {/* Home */}
        <div className="flex flex-col items-center gap-1 opacity-40">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[9px] text-gray-400">Home</span>
        </div>

        {/* Heart */}
        <div className="flex flex-col items-center gap-1 opacity-40">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
            <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[9px] text-gray-400">Likes</span>
        </div>

        {/* Message Center Button */}
        <div className="flex flex-col items-center -mt-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFB3BA] to-[#FF9AA2] shadow-lg flex items-center justify-center border-4 border-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[9px] text-[#FF9AA2] font-semibold mt-1">Message</span>
        </div>

        {/* Paw */}
        <div className="flex flex-col items-center gap-1 opacity-40">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
            <ellipse cx="12" cy="16" rx="4.5" ry="3.5" stroke="currentColor" strokeWidth="2"/>
            <ellipse cx="6.5" cy="9" rx="2" ry="2.5" stroke="currentColor" strokeWidth="2"/>
            <ellipse cx="10" cy="6.5" rx="2" ry="2.5" stroke="currentColor" strokeWidth="2"/>
            <ellipse cx="14" cy="6.5" rx="2" ry="2.5" stroke="currentColor" strokeWidth="2"/>
            <ellipse cx="17.5" cy="9" rx="2" ry="2.5" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span className="text-[9px] text-gray-400">Matches</span>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center gap-1 opacity-40">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image src="/dog_profile.png" alt="Profile" width={24} height={24} className="w-full h-full object-cover grayscale opacity-60" />
          </div>
          <span className="text-[9px] text-gray-400">Profile</span>
        </div>
      </div>
    </div>
  )
}
