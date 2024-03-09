import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "../styles/cards.css";
import { Link } from "react-router-dom";
import { services } from './data';

function Cards() {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className='cards_holder'>
      <div className="moving_cards" ref={containerRef}>
        {services.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{
              translateY: card.id === 1 || card.id === 3 || card.id === 4 || card.id === 6
                ? Math.max(-110, Math.min(0, scrollY - 110))
                : 0
            }}
          >
            <Link to={card.link} className="card-link">
              <div className="card" id="card">
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
      </div>
    </div>
  );
}

export default Cards;
