import { MOCK_MATCHES } from '@/lib/mock-data'
import Link from 'next/link'

export default async function ChatPage() {
  const matches = MOCK_MATCHES

  return (
    <div className="min-h-screen bg-white flex flex-col">
        <header className="p-4 border-b">
            <h1 className="text-xl font-bold text-gray-900">Messages</h1>
        </header>
        <div className="p-4 space-y-4">
            {matches.map((match: any) => {
                const otherDog = match.dog_b
                return (
                    <Link key={match.id} href={`/matches/${match.id}`} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                        <img src={otherDog.photos[0]} className="w-16 h-16 rounded-full object-cover" alt={otherDog.name} />
                        <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-900">{otherDog.name}</h3>
                            <p className="text-gray-500 text-sm">Tap to chat</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}
