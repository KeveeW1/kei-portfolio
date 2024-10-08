"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import './Hero.css';

const Hero = () => {
    
  return (
    <section>
    <section className="relative">
            <div className='text-center relative' style={{ minHeight: '600px' }}>
                <div className="absolute w-full h-full">
                    <div style={{
                        backgroundImage: 'url(/images/cloud.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '200px',
                        height: '200px',
                        position: 'absolute',
                        top: '90px',
                        right: '-16%',
                    }}></div>
                    <div style={{
                        backgroundImage: 'url(/images/cloud.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '200px',
                        height: '200px',
                        position: 'absolute',
                        top: '250px',
                        left: '-5%',
                    }}></div>
                </div>
                <div className="relative z-10 pt-40">
                    <h1 className='text-black font-bold text-7xl font-sans'>keira wong</h1>
                    <h1 className='text-black text-3xl text-center inline-block'>i&apos;m a&nbsp;</h1>
                    <TypeAnimation 
                        className='text-black font-sans'
                        sequence={[
                            'coder.',
                            1000,
                            'gamer.',
                            1000,
                            'hacker.',
                            1000,
                            'designer.',
                            1000,
                            'leader.',
                            1000
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ fontSize: '33px', color: '#4a73d4'}}
                        repeat={Infinity}
                    />

            <div className='flex space-x-2 justify-center py-4'>
            
            <a href="https://www.instagram.com/itskeiraww/"><Image
                src="/images/insta.png"
                width={40}
                height={40}
                alt="instaLogo"
                style={{ transform: 'translate(-5%, 0%)', zIndex: 1 }}
            /></a>
    
            <a href="https://www.pinterest.com/itskeiraww/">
            <Image
                src="/images/pinterest.png"
                width={40}
                height={40}
                alt="ytLogo"
                style={{ transform: 'translate(-5%, 0%)', zIndex: 1 }}
            /></a>
    
            <a href="https://www.webtoons.com/en/canvas/bits-and-bytes/list?title_no=847572">
            <Image
                src="/images/webtoon.png"
                width={40}
                height={40}
                alt="webLogo"
                style={{ transform: 'translate(-5%, 0%)', zIndex: 1 }}
            /></a>
    
            <a href="https://www.youtube.com/channel/UCdTKj8_s0TIlhY82Ltm2wKw">
            <Image
                src="/images/yt.png"
                width={40}
                height={40}
                alt="ytLogo"
                style={{ transform: 'translate(-5%, 0%)', zIndex: 1 }}
            /></a>
            
            <a href="https://www.linkedin.com/in/keira-w">
            <Image
                src="/images/linkedin.png"
                width={40}
                height={40}
                alt="linkedinLogo"
                style={{ transform: 'translate(-5%, 0%)', zIndex: 1 }}
            /></a>
    
            <a href="https://github.com/KeveeW1">
            <Image
                src="/images/github.png"
                width={40}
                height={40}
                alt="gitLogo"
                style={{ transform: 'translate(-5%, 0%)', zIndex: 1 }}
            /></a>
            </div>
                </div>
            </div>
        
            <div className='pt-11'>
        <div className="text-center text-gray-600 font-sans pt-11">
            <i>COPYRIGHT 2024 KEIRA WONG</i>
          </div>
    </div>
        </section>
        <section>
    <div class="wave-container">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
    </div>
    </section>
    </section>

    
  )
}

export default Hero



