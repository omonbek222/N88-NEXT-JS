import Header from './components/Header'
import Hero from './components/Hero'
import SearchPanel from './components/SearchPanel'
import BuildingTypes from './components/BuildingTypes'
import Technologies from './components/Technologies'

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <SearchPanel />
      <BuildingTypes />
      <Technologies />
    </main>
  )
}
