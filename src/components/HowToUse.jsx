import { motion } from 'framer-motion';
import '../styles/howtouse.css';
import { useState , useEffect} from 'react';

function HowToUse() {
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
      };
      useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  return (
    <>
      <div>
        <motion.section
          className="howtouse-section"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >        
          <h2>How To Use</h2>
          <p>
            To make the most out of our AI service app, follow these simple steps:
            <ol>
              <li><strong>Explore Services:</strong> Start by browsing through the variety of services offered by our app. Each service is designed to cater to different needs, from code formatting to image editing and audio enhancement.</li>
              <li><strong>Select Service:</strong> Once you've identified the service you need, click on the corresponding link or navigate to the service page within the app.</li>
              <li><strong>Input Data:</strong> Depending on the service, you may need to provide input data such as code snippets, images, or audio files. Ensure your data meets the required specifications for optimal results.</li>
              <li><strong>Customization (if applicable):</strong> Some services offer customization options to tailor the output according to your preferences. Explore these options to fine-tune the results to your liking.</li>
              <li><strong>Review Results:</strong> After processing your data, review the results provided by the AI. Ensure that the output meets your expectations and requirements.</li>
              <li><strong>Download or Save:</strong> If satisfied with the results, download or save the processed data to your device. This allows you to utilize the output in your projects or workflows.</li>
              <li><strong>Feedback and Improvement:</strong> We value your feedback! If you encounter any issues or have suggestions for improvement, feel free to provide feedback through our app. Your input helps us enhance the user experience and refine our AI algorithms.</li>
              <li><strong>Explore More:</strong> Don't hesitate to explore other services offered by our app. With a range of AI-powered tools at your disposal, unleash your creativity and productivity like never before!</li>
            </ol>
          </p>
        </motion.section>
        
      </div>
    </>
  );
}

export default HowToUse;
