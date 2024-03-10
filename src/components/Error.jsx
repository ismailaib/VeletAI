import { motion } from 'framer-motion';
import '../styles/error.css';

function Error() {
    const sectionVariants = {
        hidden: {
          opacity: 0,
          x: -50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.4, // Reduced duration for smoother animation
            delay: 0,
          },
        },
      };

  return (
    <>
      <div>
        <motion.section
          className="error-section"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >        
          <h1>404 - Page Not Found</h1>
          <p>We're sorry, but the page you are looking for could not be found.</p>
          <p>Please check the URL for any mistakes or navigate back to the homepage.</p>
        </motion.section>
      </div>
    </>
  );
}

export default Error;
