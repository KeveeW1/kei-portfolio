import Navbar from '../pages/Navbar';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section className='bg-white'>
    <div className=' text-black flex justify-center'>
        <Navbar/>
        
    </div>
    <div className='flex p-3 justify-center'>
            <Image src="/images/keira.jpg" alt="picture of keira" className='rounded-full overflow-hidden object-none w-60 h-60' width={900} height={100}/>
    </div>
    <div className='text-black justify-center'>
        <h1 className='text-4xl font-semibold pb-1 flex justify-center'>hi, it&apos;s keira!</h1>
        <div className='pt-2 text-center'>
            <li>uw info w/ concentration in software dev + cybersecurity</li>
            <li>likes: tech, pokémon, video editing, mentoring, reading, drawing, food</li>
            <li>personal missions: educating the next gen + bridging gender gap in cybersec + tech overall</li>

            <p>click <a href="/archive" className='text-orange-900'>[archive]</a> to see my past experiences/awards</p>
        </div>
    </div>
    </section>
    
  );
}

export default About;