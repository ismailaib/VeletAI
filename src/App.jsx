import { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Loader from './components/Loader';

import { animations } from './components/data';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationCount, setAnimationCount] = useState(0);
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    leftControls.start(animations[animationIndex].left);
    rightControls.start(animations[animationIndex].right);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, [animationIndex, leftControls, rightControls]);

  const changeShapeRandomly = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    setAnimationIndex(randomIndex);
    setIsLoading(true); 
  };

  return (
    <BrowserRouter>
      <div className="content">
        <Menu onChangeShape={changeShapeRandomly} />
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              className="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loader />
            </motion.div>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
            </Routes>
          )}
        </AnimatePresence>
      </div>
      <div className="polygones">
        <motion.div className="left_polygone" animate={leftControls}></motion.div>
        <motion.div className="right_polygone" animate={rightControls}></motion.div>
      </div>
    </BrowserRouter>
  );
}

export default App;
