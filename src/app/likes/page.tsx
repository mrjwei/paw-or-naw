import { MOCK_COMMENTS, MOCK_LIKES } from '@/lib/mock-data'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { LikeTile } from '@/components/like-tile'

export default async function LikesPage() {
  const comments = MOCK_COMMENTS
  const likes = MOCK_LIKES

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="p-4 border-b flex items-center gap-4">
        <Link href="/" className="text-gray-600">
          <ArrowLeft />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Likes</h1>
      </header>

      <div className="p-4 space-y-6">
        {/* Comments Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Comments</h2>
          <div className="space-y-3">
            {comments.map((comment: any) => (
              <div 
                key={comment.id} 
                className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg border border-gray-100 shadow-sm"
              >
                <img 
                  src={comment.from_dog.photos[0]} 
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
                  alt={comment.from_dog.name}
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{comment.from_dog.name}</h3>
                  <p className="text-gray-700 mt-1">{comment.message}</p>
                  <p className="text-gray-400 text-xs mt-1">
                    {new Date(comment.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Likes You Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Likes You <span className="text-pink-500">({likes.length})</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {likes.map((like: any) => (
              <LikeTile key={like.id} dog={like.dog} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
