import Navbar from '../pages/Navbar';
import './projects.css';
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => { 
  
  return (
    <section>
    <div className='text-center flex justify-center'>
        <Navbar/>
    </div>
    <div className='text-center text-black'>
      <h1 className='text-5xl'>projects</h1>
      
    </div>
    <div className="flex flex-col items-center">
            <h1 className="text-5xl">Projects</h1>
            <div className="grid-cols-1 md:grid-cols-2 lg:grid lg:grid-cols-2">
                <a href="https://github.com/KeveeW1/ReNews-BrowserExtension" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">ReNews</h3>
                    <h4>[Second Best Technology Winner @ MERGE 2021 Hackathon]</h4>
                    <p className="mt-2 opacity-50 font-light">
                    ReNews takes a piece of news that the user feeds into it then, it runs an automatic check to verify that news and informs the user whether it&apos;s fake or real. ReNews also recommend users, based on their interests, stories, articles, and/or other information for their reference.
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">HTML</span>
                      <span className="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">CSS</span>
                      <span className="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">JavaScript</span>
                    </div>
                </a>
                <a href="https://github.com/KeveeW1/inrix-amazon-hack-23" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">SmartFuel</h3>
                    <h4>[INRIX Amazon University Hack 2023 Finalist]</h4>
                    <p className="mt-2 opacity-50 font-light">
                    SmartFuel allows the user to toggle between 2 routes that both include a pitstop for gas -- the shortest and the cheapest one in terms of gas cost, visualizing a clear route on our map interface.
                    <br></br>We use AI to provide a unique experience for drivers looking to find the most efficient and affordable routes. Our inhouse AI chatbot provides an experience akin to chatting with an old friend.
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">JavaScript</span>
                    </div>
                </a>

                <a href="https://github.com/KeveeW1/SafeScroll" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">SafeScroll</h3>
                    <h4>[DubHacks 2023 Winner]</h4>
                    <p className="mt-2 opacity-50 font-light">
                    SafeScroll is a chrome extension that blurs triggering topics from user feeds.
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">HTML</span>
                      <span className="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">CSS</span>
                      <span className="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">JavaScript</span>
                      <span className="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Python</span>
                    </div>
                </a>

                <a href="https://github.com/KeveeW1/cybernews-discord-bot" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">CyberNews Discord Bot</h3>
                    <h4>[Personal Project]</h4>
                    <p className="mt-2 opacity-50 font-light">
                    Discord bot made to give the user the latest news on cybersecurity.
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Python</span>
                    </div>
                </a>

                <a href="https://github.com/KeveeW1/cybersafe" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">CyberSafe App</h3>
                    <p className="mt-2 opacity-50 font-light">
                    App made to educate people about cybersecurity and internet safety.
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Swift</span>
                    </div>
                </a>

                <a href="https://www.webtoons.com/en/canvas/bits-and-bytes/list?title_no=847572" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">Bits and Bytes</h3>
                    <p className="mt-2 opacity-50 font-light">
                    Digital comic that educates youth about the foundations of technology and cybersecurity. All art and notes summarized by me! Information from Internet and certification courses.
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Webtoon</span>
                    </div>
                </a>

                {/* <a href="----" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">title</h3>
                    <p className="mt-2 opacity-50 font-light">
                    caption
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Swift</span>
                    </div>
                </a> */}
      
      </div>
      </div>
    </section>
    
  );
}

export default Projects;