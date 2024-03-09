import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import "../styles/cards.css";
import { Link } from "react-router-dom";

function Cards() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const cardsData = [
    {
      id: 1,
      title: "PrettifyPro",
      pricing: "Free",
      subTitle: "Code Formatting Tool",
      description: "Automatically format and beautify your code, improving readability and maintainability. Spend less time on manual formatting and more time on what matters most—writing high-quality code.",
      link: "/prettifypro"
    },
    {
      id: 2,
      title: "BackgroundMagic",
      pricing: "Free",
      subTitle: "Effortless Background Removal",
      description: "Instantly remove backgrounds from your images with BackgroundMagic. With advanced AI technology, say hello to beautifully edited images in seconds.",
      link: "/backgroundmagic"
    },
    {
      id: 3,
      title: "ImageGenius",
      pricing: "Free",
      subTitle: "Create Stunning Images",
      description: "Unleash your creativity with ImageGenius. Generate captivating images for your projects with ease. From abstract designs to realistic scenes, ImageGenius has you covered.",
      link: "/imagegenius"
    },
    {
      id: 4,
      title: "TextPerfect",
      pricing: "Free",
      subTitle: "Polish Your Texts",
      description: "Transform your written content with TextPerfect. Automatically correct grammar, punctuation, and style errors to produce flawless text. Impress your readers with professional-quality writing.",
      link: "/textperfect"
    },
    {
      id: 5,
      title: "IdeaForge",
      pricing: "Free",
      subTitle: "Inspiration Generator",
      description: "Unlock your creativity with IdeaForge. Get personalized ideas and prompts to jumpstart your creative projects. From writing prompts to design inspiration, let IdeaForge spark your imagination.",
      link: "/ideaforge"
    },
  ];

  const cardVariants = cardsData.map((card, index) => ({
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.2, // Adjust the delay for each card
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 1,
      },
    },
  }));

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const x = event.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust multiplier for smoother/faster scrolling
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className='cards_holder'>
      <div
        className="moving_cards"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence>
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants[index]} // Use unique variant for each card
            >
              <Link to={card.link} className="card-link">
                <div className="card" id="card" style={card.id === 1 || card.id === 3 || card.id === 4 ? { transform: 'translateY(-110px)' } : {}}>
                  <div className="badges">
                    <div className="badge">{card.title}</div>
                    <div className="badge">{card.pricing}</div>
                  </div>
                  <h2>{card.subTitle}</h2>
                  <h4>{card.description}</h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Cards;
