import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
    <div className='flex items-center justify-between mx-auto p-8'>
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
  </nav>
  );
};

export default Navbar