'use client';
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-7">
      <div className='flex items-center justify-between mx-auto'>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:w-auto w-full`} id="navbar">
          <ul className='flex flex-col md:flex-row font-sans'>
            <li>
              <Link href="/" className='block py-2 px-3 text-black sm:text-xl rounded hover:bg-gray-100'>
                home
              </Link>
            </li>
            <li>
              <Link href="/about" className='block py-2 px-3 text-black sm:text-xl rounded hover:bg-gray-100'>
                about
              </Link>
            </li>
            <li>
              <Link href="/projects" className='block py-2 px-3 text-black sm:text-xl rounded hover:bg-gray-100'>
                projects
              </Link>
            </li>
            <li>
              <Link href="/resume" className='block py-2 px-3 text-black sm:text-xl rounded hover:bg-gray-100'>
                resume
              </Link>
            </li>
            <li>
              <Link href="/contact" className='block py-2 px-3 text-black sm:text-xl rounded hover:bg-gray-100'>
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