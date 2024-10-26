import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-section donations">
            <h3>ABOUT US</h3>
            <p> Our mission is to create a sustainable food system that connects excess food from donors to those in need in our community. By establishing local food hubs, we aim to reduce food waste while providing nutritious meals to individuals and families who may be facing food insecurity.</p>
            <p>Click the below button if you wish to Donate.</p>
            <button className="donate-button">DONATE</button>
          </div>

          <div className="footer-section newsletter">
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <input type="email" placeholder="Email Address*" />
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>

          <div className="footer-section contact">
            <h3>CONTACT US</h3>
            <address>
              WZ-49/2A F/F, Budella Village,<br />
              Near Community Hall, Vikas Puri,<br />
              New Delhi – 110018 Delhi, India<br /><br />
              Email : myangelsacademy@gmail.com<br />
              Landline: 011 – 47039983,<br />
              Mobile: +91 7701927625, +91 9654793872<br />
            </address>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
