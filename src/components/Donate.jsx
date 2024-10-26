import React, { useState } from 'react';
import './Donate.css';

function Donate() {
  const [citizenship, setCitizenship] = useState('Indian');
  const [donationType, setDonationType] = useState('once');
  const [amount, setAmount] = useState(4000);

  return (
    <div className="donation-container">
      {/* First Card */}
      <div className="donation-card">
        <h2>Donate and Save Tax</h2>

        <div className="citizenship-section">
          <label>Citizenship*</label>
          <div className="options">
            <button
              className={`option ${citizenship === 'Indian' ? 'selected' : ''}`}
              onClick={() => setCitizenship('Indian')}
            >
              Indian Citizen
            </button>
            <button
              className={`option ${citizenship === 'Foreign' ? 'selected' : ''}`}
              onClick={() => setCitizenship('Foreign')}
            >
              Foreign Citizen/NRI
            </button>
          </div>
          <p className="info-text">
            Indian citizen option is for transacting through Indian bank accounts or cards issued by Indian banks.
          </p>
        </div>

        <div className="donation-type-section">
          <button
            className={`donation-type ${donationType === 'once' ? 'selected' : ''}`}
            onClick={() => setDonationType('once')}
          >
            Give Once
          </button>
          <button
            className={`donation-type ${donationType === 'monthly' ? 'selected' : ''}`}
            onClick={() => setDonationType('monthly')}
          >
            Give Monthly
          </button>
        </div>

        <div className="amount-section">
          <p>Choose an amount to donate</p>
          <div className="amount-options">
            {[4000, 8000, 12000, 24000].map((amt) => (
              <button
                key={amt}
                className={`amount-option ${amount === amt ? 'selected' : ''}`}
                onClick={() => setAmount(amt)}
              >
                ₹{amt}
              </button>
            ))}
          </div>
          <div className="info-section">
            <span role="img" aria-label="heart">💛</span>
            Ensure 4 children are completely immunized against preventable deadly diseases through the govt system
          </div>
        </div>

        <div className="other-amount-section">
          <p>Other Amount</p>
          <input
            type="text"
            placeholder="Enter amount"
            className="other-amount-input"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      {/* New Card Below the Old Card */}
      <div className="details-card">
        <h2>Donor Details</h2>
        
        <div className="form-section">
          <label>Full Name *</label>
          <input type="text" placeholder="Enter your full name" />

          <label>Date of Birth</label>
          <input type="date" />

          <label>Email *</label>
          <input type="email" placeholder="Enter your email" />

          <label>Mobile Number *</label>
          <input type="tel" placeholder="Enter your mobile number" />

          <label>Address *</label>
          <input type="text" placeholder="Enter your address" />

          <label>Pincode *</label>
          <input type="text" placeholder="Enter your pincode" />

          <label>City</label>
          <input type="text" placeholder="Enter your city" />

          <label>State</label>
          <input type="text" placeholder="Enter your state" />

          <label>PAN Number</label>
          <input type="text" placeholder="Enter your PAN number" />
        </div>

        <div className="disclaimer">
          <p>Information is being collected to comply with government regulations...</p>
          <input type="checkbox" />
          <label>I hereby declare I am a citizen of India...</label>
        </div>

        <button className="payment-button">Continue To Payment</button>
      </div>
    </div>
  );
}

export default Donate;
