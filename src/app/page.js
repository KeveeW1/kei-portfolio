
import Hero from './pages/Hero';
import Navbar from './pages/Navbar';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div>
        <Navbar/>
        <Hero/>
      </div>
     
      

      <section id="footer">
          <div className="pl-10 pr-10 text-[#000000] font-sans">
            supposed to be footer
          </div>
    </section>
    </main>
  )
}
