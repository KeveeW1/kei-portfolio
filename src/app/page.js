
import Hero from './pages/Hero';
import Navbar from './pages/Navbar';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div>
        <Navbar/>
        <Hero/>
      </div>
    </main>
  )
}
