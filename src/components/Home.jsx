
import { motion } from 'framer-motion';
import '../styles/home.css';
import {Link} from 'react-router-dom'
import Services from './Services'
import About from './About'
import { useEffect } from 'react';

function Home() {

  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 4,
      },
      transition: {
        delay: 0,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 1,
      },
    },
  };

  const handleNavigate = (path) => {
    history.push(path);
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <motion.section
        className="home-section"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={sectionVariants}
      >
        <h1>VeletAI. Intelligence. Empowered</h1>
        <p>Amplifying Intelligence, Revolutionizing Business.</p>
        <img
          src="/home_image_1.svg"
          alt="Home Image"
        />
        <Link className="main__action" to='/howtouse'>
          <a className="main__scroll" href="#" onClick={() => handleNavigate('/howtouse')}>
            <div className="main__scroll-box">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="#3F4E5C"></path>
              </svg>
            </div>
            <span className="main__scroll-text">Slide</span>
          </a>
        </Link>
      </motion.section>
      <div className='cards'>
        <Services />
      </div>
      <div className='demos'>
        <About />
      </div>
    </>
  );
}

export default Home;
