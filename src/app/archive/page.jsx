import Navbar from '../pages/Navbar';

const Archive = () => {
  return (
    <section className='bg-white'>
    <div className=' text-black flex justify-center'>
        <Navbar/>
        
    </div>
    <div className='text-center text-black'>
        <h1 className='text-3xl'>&lt;archive/&gt;</h1>
        <h4 className=''><i>hi, welcome to keira&apos;s archive!</i></h4>
        <br></br>
        <h1 className='text-2xl text-left pl-10 text-blue-500'>awards</h1>
        <div className='text-left pl-10'>
          <li>INRIX Amazon University Hack 2023 Finalist – 2023</li>
          <li>DubHacks 2023 Winner – 2023</li>
          <li>Horizon x NYC Girl Scouts Hackathon Organizer – 2023</li>
          <li>HackPNW Hackathon Lead Organizer – 2023</li>
          <li>Hack+Policy Foundation MERGE Hackathon: 2nd Place Winner – 2021</li>
          <li>Figma’s Virtual Design Jam: 2nd Place Winner – 2020</li>
          <li>Google Change the Game Dahyun Challenge Winner – 2020</li>
          <li>Microsoft “Girls in AI” Hackathon: 2nd Place Winner – 2019</li>
        </div>

      <div>
        <h1 className='text-2xl pl-10 pt-5 text-center pb-2 text-blue-700'>publication + speakers</h1>
        <div className='text-left pl-10'></div>
        <li>Speaker “Impact in My Community” hosted by Bill and Melinda Gates Foundation Teen Lounge Event – 2023</li>
        <li>Published by Journal of Interdisciplinary Public Policy - “ReNews: A Real Solution to Fake” – 2022</li>
        <li>Panelist “Experiences and challenges in the beautiful world of Computer Science by NCWIT” – 2022</li>
        <li>Speaker, “National Day of Solidarity Against AAPI Hate” rally in Bellevue Downtown, sponsored by Pathway Foundation – 2021</li>
      </div>

      <div>
        <h1 className='text-2xl pt-5 pb-2'>past experiences</h1>
        <div className='text-left flex justify-center'>
          <p>Titan Robotics Club, Executive/Software Programmer/Mentor/Outreach Head, Redmond, WA<br></br>
            ● Designed, built program, and debugged robot for the national FIRST Robotics Competitions<br></br>
            ● Instructed and mentored a group of 80+ middle school students in robotics programming<br></br>
            ● Managed multiple competitions simultaneously through effective collaboration<br></br>
            ● Identified, drove, and implemented improvements in robot operations resulting in a score increase of 20%<br></br><br></br>
            International School of Bellevue, Founder and President of Civic Club/IS Hack Club, Bellevue, WA<br></br>
            ● Provided student-centered educational projects including leadership growth and community engagement<br></br>
            ● Partnered with Microsoft to drive a variety of Civic and Community events including voter registration and annual debate on current<br></br>
            issues<br></br>
            ● Hosted hackathon to promote cybersecurity awareness through a highly stimulative learning path<br></br><br></br>
            Pathway Foundation Civic and Social, Information Technology Lead/Outreach Executive, Bellevue, WA 2019 – Present<br></br>
            ● Served as technical lead to support the organization’s strategic planning and execution<br></br>
            ● Mentored 30+ underserved students in Python programming year-round<br></br>
            </p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Archive;