import Nav from '../components/sections/Nav'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Plans from '../components/sections/Plans'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Nav />
      <Hero />
      <Services />
      <Plans />
      <Contact />
      <Footer />
    </main>
  )
}
