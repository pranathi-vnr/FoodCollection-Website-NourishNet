import React, { useState } from 'react';
import './donater.css'; // We'll use a separate CSS file for styling

const DonorPage = () => {
  const [foodDetails, setFoodDetails] = useState({
    foodType: '',
    quantity: '',
    expirationDate: '',
    condition: '',
    storage: '',
    qualityAssured: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission, e.g., send data to the server
    console.log('Food Donation:', foodDetails);
  };

  return (
    <div className="donor-page">
      <div className="guide-section">
        <h2>Donor Guidelines</h2>
        <p>
          Welcome, and thank you for your interest in donating! Please ensure the following:
        </p>
        <ul>
          <li>Only donate foods that are fresh or safely packaged.</li>
          <li>No expired items are allowed.</li>
          <li>Properly package and label your food donations.</li>
          <li>Perishable items should be refrigerated or frozen as necessary.</li>
        </ul>
      </div>

      <form className="donation-form" onSubmit={handleSubmit}>
        <h3>Food Donation Form</h3>
        
        <label>
          Food Type:
          <select value={foodDetails.foodType} onChange={(e) => setFoodDetails({ ...foodDetails, foodType: e.target.value })}>
            <option value="">Select Food Type</option>
            <option value="Fresh Produce">Fresh Produce</option>
            <option value="Bakery">Bakery</option>
            <option value="Packaged">Packaged</option>
            <option value="Prepared Meals">Prepared Meals</option>
          </select>
        </label>
        
        <label>
          Quantity:
          <input type="text" value={foodDetails.quantity} onChange={(e) => setFoodDetails({ ...foodDetails, quantity: e.target.value })} required />
        </label>
        
        <label>
          Expiration Date (if applicable):
          <input type="date" value={foodDetails.expirationDate} onChange={(e) => setFoodDetails({ ...foodDetails, expirationDate: e.target.value })} />
        </label>
        
        <h3>Food Quality Check</h3>
        <label>
          Condition:
          <select value={foodDetails.condition} onChange={(e) => setFoodDetails({ ...foodDetails, condition: e.target.value })}>
            <option value="">Select Condition</option>
            <option value="Fresh">Fresh</option>
            <option value="Near Expiry">Near Expiry</option>
            <option value="Frozen">Frozen</option>
            <option value="Non-perishable">Non-perishable</option>
          </select>
        </label>
        
        <label>
          Storage Method:
          <select value={foodDetails.storage} onChange={(e) => setFoodDetails({ ...foodDetails, storage: e.target.value })}>
            <option value="">Select Storage</option>
            <option value="Refrigerated">Refrigerated</option>
            <option value="Frozen">Frozen</option>
            <option value="Room Temperature">Room Temperature</option>
          </select>
        </label>
        
        <label>
          <input
            type="checkbox"
            checked={foodDetails.qualityAssured}
            onChange={() => setFoodDetails({ ...foodDetails, qualityAssured: !foodDetails.qualityAssured })}
          />
          I confirm that the food is safe and was stored properly.
        </label>
        
        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
};

export default DonorPage;
