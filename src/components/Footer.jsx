import { FaFire, FaRegCopyright } from 'react-icons/fa'; // Import the fire and copyright icons from react-icons/fa
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Created with <FaFire /> by VeletAI, <FaRegCopyright />all rights reserved</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
