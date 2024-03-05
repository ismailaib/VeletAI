import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import '../styles/menu.css';

function Menu({onChangeShape }) {
  const elements = ["Home","About", "Contact"];
  const paths = ["/","/about", "/contact"];
  const [scrollBg, setScrollBg] = useState(false);

  const headerVariants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.2,
      },
    },
  };

  const headerStyle = {
    background: scrollBg ? '#ffffff91' : 'transparent',
    width: scrollBg ? '100%' : '70%',
    position: scrollBg ? 'fixed' : '',
    top: 0,
    zIndex: 1000, // Adjust the z-index as needed
  };

  const button = {
    background: scrollBg ? '#3F4E5C !important' : 'white',
    color: scrollBg ? 'white' : '#3F4E5C !important',
  };

  const placeholderStyle = {
    height: scrollBg ? '70px' : '0', // Adjust the height to match the header height
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollBg(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleNavigation = (path) => {
    onChangeShape(); // Call the function to change the shape randomly
    // Add other navigation logic
  };
  return (
    <>
      <div style={placeholderStyle} />
      <motion.header
        style={headerStyle}
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="logo">
          <h2>
            Velet<span>AI</span>
          </h2>
        </div>
        <nav>
          <ul>
            {elements.map((element, index) => (
              <li key={index}>
                <Link to={paths[index]} onClick={() => handleNavigation(paths[index])}>{element}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className={scrollBg ? 'button-scroll-bg' : 'button-white'}>Get Started</button>
      </motion.header>
    </>
  );
}

export default Menu;
