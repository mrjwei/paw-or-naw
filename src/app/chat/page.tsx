import { MOCK_MATCHES } from '@/lib/mock-data'
import Link from 'next/link'

export default async function ChatPage() {
  const matches = MOCK_MATCHES

  return (
    <div className="min-h-screen bg-pink-50/30 flex flex-col">
        <header className="p-4 border-b border-pink-100 bg-white/70 backdrop-blur-xl sticky top-0 z-10">
            <h1 className="text-xl font-bold text-pink-600">Messages</h1>
        </header>
        <div className="p-4 space-y-4">
            {matches.map((match: any) => {
                const otherDog = match.dog_b
                return (
                    <Link key={match.id} href={`/matches/${match.id}`} className="flex items-center gap-4 p-3 hover:bg-pink-50 rounded-2xl border border-pink-100 shadow-sm transition-all duration-200 active:scale-98 bg-white">
                        <img src={otherDog.photos[0]} className="w-16 h-16 rounded-full object-cover border-2 border-pink-200" alt={otherDog.name} />
                        <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-800">{otherDog.name}</h3>
                            <p className="text-pink-400 text-sm font-medium">Tap to chat</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}
