import Navbar from '../pages/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Archive = () => {
  return (
    <section className='bg-white'>
    <div className=' text-black flex justify-center'>
        <Navbar/>
        
    </div>
    <div className='text-center text-black'>
        <h1 className='text-3xl'>archive</h1>
        <h4 className=''><i>hello, welcome to my archive</i></h4>
        <br></br>
        {/* <li>Figma’s Virtual Design Jam: 2nd Place Winner – 2020</li>
        <li>Google Change the Game Dahyun Challenge Winner – 2020</li>
        <li>Microsoft “Girls in AI” Hackathon: 2nd Place Winner – 2019</li> */}
    </div>
    </section>
  );
}

export default Archive;