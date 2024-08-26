import Navbar from '../pages/Navbar';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section className='bg-white'>
      <div className='text-black flex justify-center'>
        <Navbar/>
      </div>
      <div className='container mx-auto px-4 py-12'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end'>
            <Image 
              src="/images/keira.jpg" 
              alt="picture of keira" 
              className='rounded-full overflow-hidden object-cover w-60 h-60' 
              width={240} 
              height={240}
            />
          </div>
          
          <div className='w-full md:w-1/2 md:pl-8 text-black'>
            <h1 className='text-4xl font-semibold pb-4 text-center md:text-left'>hi, it&apos;s erza!</h1>
            <ul className='list-disc list-inside space-y-2 mb-4'>
              <li>uw info w/ concentration in software dev + cybersecurity</li>
              <li>likes: tech, pokémon, video editing, mentoring, reading, drawing, food</li>
              <li>personal missions: educating the next gen + bridging gender gap in cybersec + tech overall</li>
            </ul>
            <p className='text-center md:text-left'>
              click <Link href="/archive" className='text-orange-900'>[archive]</Link> to see my past experiences/awards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;