import Navbar from '../pages/Navbar';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section className='bg-white'>
    <div className=' text-black flex justify-center'>
        <Navbar/>
        
    </div>
    <div className='flex justify-center p-3'>
            <Image src="/images/keira.jpg" alt="picture of keira" className='rounded-full overflow-hidden object-none w-40 h-40' width={300} height={100}/>
    </div>
    <div className='text-black text-center'>
        <h1 className='text-4xl font-semibold pb-1'>hi, it&apos;s keira!</h1>
        <div className='flex-col flex pt-2'>
            <li>uw info w/ concentration in software dev + cybersecurity</li>
            <li>likes: tech, pokémon, food</li>
            <li>personal missions: educating the next gen + bridging gender gap in cybersec + tech overall</li>
        </div>
        <div>
            <p>click <a href="/archive" className='text-orange-900'>[archive]</a> to see my past things :p </p>
        </div>
    </div>
    </section>
    
  );
}

export default About;