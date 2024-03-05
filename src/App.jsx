import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import animations from './components/Animations';
import './App.css';

function App() {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationCount, setAnimationCount] = useState(0);
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    leftControls.start(animations[animationIndex].left);
    rightControls.start(animations[animationIndex].right);
  }, [animationIndex, leftControls, rightControls]);

  const changeShapeRandomly = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    setAnimationIndex(randomIndex);
  };

  return (
    <BrowserRouter>
      <div className="content">
        <Menu onChangeShape={changeShapeRandomly} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
y        </Routes>
      </div>
      <div className="polygones">
        <motion.div className="left_polygone" animate={leftControls}></motion.div>
        <motion.div className="right_polygone" animate={rightControls}></motion.div>
      </div>
    </BrowserRouter>
  );
}

export default App;
