import React from 'react'
import Link from 'next/link'
//import Marquee from 'react-fast-marquee';


const Navbar = () => {
  return (
    <nav>
    <div className='flex items-center justify-between mx-auto p-7'>
      <div className='hidden md:flex md:w-auto' id="navbar">
        <ul className='flex font-sans'>
        <li>
            <Link href="/" className='block py-2 px-3 text-black sm:text-xl rounded hover:text-black'>
                home
            </Link>
          </li>
          <li>
            <Link href="/about" className='block py-2 px-3 text-black sm:text-xl rounded hover:text-black'>
                about
            </Link>
          </li>
          <li>
            <Link href="/projects" className='block py-2 px-3 text-black sm:text-xl rounded hover:text-black'>
                projects
            </Link>
          </li>
          {/* <li>
            <Link href="/blog" className='block py-2 px-3 text-black sm:text-xl rounded hover:text-black'>
                blog
            </Link>
          </li> */}
          <li>
            <Link href="/resume" className='block py-2 px-3 text-black sm:text-xl rounded hover:text-black'>
                resume
            </Link>
          </li>
          <li>
            <Link href="/contact" className='block py-2 px-3 text-black sm:text-xl rounded hover:text-black'>
                contact
            </Link>
          </li>
        </ul>
      </div>
    </div>

    {/* <div className='flex justify-between items-center w-full h-20 px-4 text-black bg-white'>
            <div>
                <h1 className='text-1xl ml-2 cursor-pointer' onClick={handleClickLogo}></h1>
            </div>
            <div className="w-96 hidden md:block">
                <div className="font-normal text-base rfm-marquee-container bg-gray-50 text-black p-2 rounded-full cursor-pointer border border-transparent hover:border hover:border-gray-200">
                    <Marquee>
                        <span className='text-sm flex items-center gap-x-6'>
                            <div class="relative flex items-center jutify-center">
                                <div class="h-3 w-3 absolute bg-green-400 rounded-full mr-2"></div>
                                <div class="h-3 w-3 absolute bg-green-400 rounded-full mr-2 animate-ping"></div>
                            </div>
                            CURRENTLY LOOKING FOR ___ POSITION
                        </span>

                    </Marquee>
                </div>
            </div>
            <div className='place-items-center'>
                <DropDown showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
        </div> */}
  </nav>
  );
};

export default Navbar