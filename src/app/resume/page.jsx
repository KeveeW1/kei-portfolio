import Navbar from '../pages/Navbar';

const Resume = () => {
  return (
    <section>
    <div className='bg-white text-center flex justify-center'>
        <Navbar/>
    </div>

    {/*<div className='flex h-screen justify-center text-black'>
        <embed src="/resume/Keira Wong Mar 2024.pdf" width="800px" height="800px" />
    </div>*/}
    <p className='text-black text-center'>💌 email me for my resume, thanks!</p>
    <p></p>
    </section>
    
  );
}

export default Resume;