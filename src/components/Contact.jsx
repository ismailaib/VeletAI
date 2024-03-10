import { useState , useEffect} from 'react';
import { motion } from 'framer-motion';
import '../styles/contact.css';

function Contact() {
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

    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., sending data to server
        console.log(formData);
        // Clear form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <>
            <div className='contact'>
                <motion.section
                    className="contact-section"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                >
                    <h1>Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    <h4 style={{color:"red"}}> Contact functionality is currently unavailable. We apologize for any inconvenience.</h4>
                </motion.section>
            </div>
        </>
    );
}

export default Contact;
