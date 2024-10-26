import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-section donations">
            <h3>DONATIONS</h3>
            <p>Currently My Angels academy supports 300+ underprivileged children with items like sports equipments, books, stationery, nutrition, clothes, jerseys, conveyance, medical and other day-to-day needs. Every month substantial amount is required to carry out these activities.</p>
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
              Mobile: +91 7701927625, +91 9654793872<br /><br />
              Registered Office:<br />
              31, Naval apartment,<br />
              Vasundhara Enclave Delhi 110096
            </address>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
