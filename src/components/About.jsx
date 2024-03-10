import { motion } from 'framer-motion';
import '../styles/about.css';

function About() {
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

  return (
    <>
      <div>
        <motion.section
          className="about-section"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >        
          <h2>About</h2>
          <p className='about_p'>
            At VeletAI, we're passionate about harnessing the power of artificial intelligence to empower businesses and individuals alike. Our mission is simple: to amplify intelligence and revolutionize the way work gets done.
            <br />
            <strong>Who We Are:</strong> 
            VeletAI is a team of dedicated innovators, driven by a shared vision of leveraging cutting-edge technology to solve real-world challenges. With expertise spanning AI, machine learning, and software development, we're committed to delivering transformative solutions that make a difference.
            <br />
            <strong>What We Do:</strong>  
            Through our range of AI-powered tools and services, we're here to streamline workflows, enhance productivity, and unlock creativity. Whether it's automating mundane tasks, refining code, or generating stunning visuals, VeletAI is your trusted partner in achieving more, with less effort.
            <br />
            <strong>Why Choose VeletAI:</strong> 
            With a focus on innovation and excellence, VeletAI stands at the forefront of the AI revolution. We pride ourselves on delivering solutions that not only meet but exceed expectations, empowering our clients to thrive in an ever-evolving digital landscape.
            <br />
            <strong>Join Us:</strong> 
            Join us on our journey to reshape the future of work and creativity. Let's unlock new possibilities, together.
          </p>
        </motion.section>
      </div>
    </>
  );
}

export default About;
