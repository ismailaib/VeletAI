import { motion } from 'framer-motion';
import { IoGift } from "react-icons/io5";
import { FaCheckCircle } from 'react-icons/fa'; // Changed the icon to FaCheckCircle
import { GiPadlock } from 'react-icons/gi'; // Adding a padlock icon for user data security
import '../styles/records.css';

function Records() {
    // Define an object with icons and their corresponding text
    const recordsData = [
        { icon: <IoGift />, text: "100% Free for personal and commercial use"},
        { icon: <FaCheckCircle />, text: "5 AI services and more coming"},
        { icon: <GiPadlock />, text: "User data is 100% secure" }
    ];

    return (
        <>
            <div>
                <section className="records-section">
                    <div className="records">
                        {recordsData.map((record, index) => (
                            <div className="record" key={index}>
                                <h3>{record.icon}</h3>
                                <p>{record.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}

export default Records;
