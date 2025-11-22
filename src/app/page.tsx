import { getDogsForFeed } from './actions'
import { Feed } from '@/components/feed'

export default async function Home() {
  // Bypass auth check for demo
  const dogs = await getDogsForFeed()

  return (
    <div className="flex flex-col min-h-screen bg-[#f2f2f7]">
        <header className="glass sticky top-0 z-50 px-6 py-4 flex justify-center items-center shadow-sm backdrop-blur-xl bg-white/70 supports-[backdrop-filter]:bg-white/60">
            <h1 className="text-xl font-semibold tracking-tight text-black">PawOrNaw</h1>
        </header>
        <main className="flex-1 p-4 flex flex-col items-center pt-8 overflow-hidden">
            <Feed initialDogs={dogs} />
        </main>
    </div>
  )
}
