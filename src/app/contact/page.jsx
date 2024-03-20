import Navbar from '../pages/Navbar';

const Contact = () => {
  return (
    <section>
    <div className=' text-black text-center flex justify-center'>
        <Navbar/>
    </div>
    <div className='text-center text-black text-2xl'>
        <p>hi! 
          <br></br>you can contact me here:
          <br></br>
          <a href="https://www.linkedin.com/in/keira-w" className='text-blue-500'>[linkedin]</a> or 
          <a href="mailto:kwong111@uw.edu" className='text-blue-500'> [email]</a>
        </p>
    </div>
    </section>
    
  );
}

export default Contact;