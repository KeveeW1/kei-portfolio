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
      <h1 className='text-5xl pb-9'>projects</h1> 
    </div>
    <div className="flex flex-col items-center">
            <div className="grid-cols-1 md:grid-cols-2 lg:grid lg:grid-cols-2">
                <a href="https://github.com/KeveeW1/ReNews-BrowserExtension" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">ReNews</h3>
                    <h4>[Second Best Technology Winner @ MERGE 2021 Hackathon]</h4>
                    <p className="mt-2 opacity-50 font-light">
                    ReNews is a tool developed to combat fake news by verifying news articles&apos; authenticity. Users input articles, which ReNews checks for credibility and provides real/fake feedback. It also offers personalized news recommendations. Developed during Merge 2021 Hack/Policython, ReNews utilizes machine learning and was initially a web app deployed on Heroku, later improved as a Chrome extension.
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-red-100 rounded-3xl mr-1">HTML</span>
                      <span className="text-sm py-2 px-4 bg-yellow-100 rounded-3xl mr-1">CSS</span>
                      <span className="text-sm py-2 px-4 bg-blue-100 rounded-3xl mr-1">JavaScript</span>
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
                    <span className="text-sm py-2 px-4 bg-red-100 rounded-3xl mr-1">HTML</span>
                      <span className="text-sm py-2 px-4 bg-yellow-100 rounded-3xl mr-1">CSS</span>
                      <span className="text-sm py-2 px-4 bg-blue-100 rounded-3xl mr-1">JavaScript</span>
                    </div>
                </a>

                <a href="https://github.com/KeveeW1/SafeScroll" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">SafeScroll</h3>
                    <h4>[DubHacks 2023 Winner]</h4>
                    <p className="mt-2 opacity-50 font-light">
                    SafeScroll is a chrome extension that blurs triggering topics from user feeds. SafeScroll is a Google Chrome extension that blurs certain content, which can be customized using the extension interface. When you first open the extension, there is a text box where you can add in the words and delete them when needed. Once you enter the words, you can go ahead and scroll through the Internet safely! Also, our extension has a toggle blur where you can turn off the function but keep the word box if someone happens to use your laptop.
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-red-100 rounded-3xl mr-1">HTML</span>
                      <span className="text-sm py-2 px-4 bg-yellow-100 rounded-3xl mr-1">CSS</span>
                      <span className="text-sm py-2 px-4 bg-blue-100 rounded-3xl mr-1">JavaScript</span>
                      <span className="text-sm py-2 px-4 bg-green-100 rounded-3xl mr-1">Python</span>
                    </div>
                </a>

                <a href="https://www.figma.com/proto/KgenoAMZzANY7vIuZsKcuC/I-WAS-HERE?type=design&node-id=67-148&t=D8t5fIqTwZPLKED9-1&scaling=scale-down&page-id=23%3A2&starting-point-node-id=59%3A824" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">I WAS HERE</h3>
                    <h4>[Submitted to WINFO 2024 Hackathon]</h4>
                    <p className="mt-2 opacity-50 font-light">
                    At the Women in Informatics Hackathon, my team created &quot;I WAS HERE&quot;, a social media app centered on authentic communication via voice messages, location tagging, photos, and videos. It aims to counter the performative nature of other platforms by focusing on genuine connections between friends through &quot;Memories&quot; and &quot;Moments&quot; tied to specific locations. Content is exclusive to friends, promoting a personalized experience and encouraging real-world exploration.
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-purple-100 rounded-3xl mr-1">Figma</span>
                    </div>
                </a>

                <a href="https://www.figma.com/file/33jFxsnzzfytmkyO9IWvDd/1-800-SNRSCAM-HOTLINE-PROTOTYPE?type=design&node-id=0-1&mode=design&t=OdcJTOFVnXNFoV6m-0" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">Senior Scam Prevention: 1-800-SNR-SCAM</h3>
                    <h4>[INFO 200 Project]</h4>
                    <p className="mt-2 opacity-50 font-light">
                    In INFO 200, my team and I created an information resource for seniors (ages 60+) who need education and protection against online scams. We interviewed 4 individuals and received 38 responses to our survey to effectively empathize with our users. I worked mainly on the prototype in Figma, both high fidelity and low.
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-purple-100 rounded-3xl mr-1">Figma</span>
                    </div>
                </a>

              
                <a href="https://www.webtoons.com/en/canvas/bits-and-bytes/list?title_no=847572" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">Bits and Bytes</h3>
                    <h4>[Personal Project]</h4>
                    <p className="mt-2 opacity-50 font-light">
                    Digital comic that educates youth about the foundations of technology and cybersecurity. All art and notes summarized by me! Information from Internet and certification courses.
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-green-300 rounded-3xl mr-1">WEBTOON</span>
                    </div>
                </a>

                <a href="https://github.com/KeveeW1/cybersafe" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">Cybersafe App</h3>
                    <h4>[Submitted to MLH Birthday 2022]</h4>
                    <p className="mt-2 opacity-50 font-light">
                    App made to educate people about cybersecurity and internet safety. I made this app to inform fellow students of mine or people of all ages on internet safety and basic information on what cybersecurity is. additionally, I saw an increase in people getting hacked these days and as I dive into the field of cybersecurity, I realize the importance of cybersecurity for our society. I hope to increase the awareness and educate more people about being or staying safe on the Internet.
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-blue-200 rounded-3xl mr-1">Swift</span>
                    </div>
                </a>

                <a href="https://github.com/KeveeW1/cybernews-discord-bot" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">CyberNews Discord Bot</h3>
                    <h4>[Personal Project]</h4>
                    <p className="mt-2 opacity-50 font-light">
                    Discord bot made to give the user the latest news on cybersecurity. Made to stay informed and educated daily on the latest cybersecurity tools and news in the community.
                    <br></br>I couldn&apos;t find a trustworthy bot on Discord so I made my own!
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-green-100 rounded-3xl mr-1">Python</span>
                    </div>
                </a>
               
                <a href="https://devpost.com/software/vaccess" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">VACCESS</h3>
                    <h4>[Submitted to Creatica 2020]</h4>
                    <p className="mt-2 opacity-50 font-light">
                    VACCESS is a platform designed to provide accessible vaccine information. Users can create accounts, take post-vaccine surveys, and access COVID-19 resources. The website was built using HTML, CSS, Python, SQL, and Bootstrap/Flask on repl.it for collaboration.
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Swift</span>
                    </div>
                </a>

                <a href="https://www.figma.com/file/IzmlnXqbbzZbSIqiyG5vFv/MRS.WORLDWIDE-%F0%9F%8C%90?type=design&node-id=99%3A3466&mode=design&t=MS3yjeKdCsm3yJfB-1" className="p-5 m-2 flex flex-col items-start bg-black rounded-3xl cursor-pointer hover:bg-gray-500 text-left hover:scale-105 duration-200">
                    <h3 className="text-2xl mt-4 font-medium">FigBud</h3>
                    <h4>[Finalist for Camp Figma 2021]</h4>
                    <p className="mt-2 opacity-50 font-light">
                      This plug-in recognizes inefficient workflows and suggests tools and features for users to utilize and learn about.
                      By reinforcing the user&apos;s understanding of Figma tools and use cases, FigBud encourages learning by doing, and guides new designers as they bring their ideas to life. FigBud&apos;s ultimate goal is to make design more accessible, especially to those designers just starting out!
                    </p>
                    <div className="flex justify-between mt-4 text-black">
                      <span className="text-sm py-2 px-4 bg-purple-100 rounded-3xl mr-1">Figma</span>
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