import React, { useState } from 'react';

const FoodDonationForm = () => {
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [foodDetails, setFoodDetails] = useState({
    foodType: '',
    quantity: '',
    expirationDate: '',
  });
  const [pickupRequest, setPickupRequest] = useState(false);
  const [foodQuality, setFoodQuality] = useState({
    condition: '',
    storage: '',
    qualityAssured: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission, e.g., send data to the server
    console.log('Form submitted:', { donorInfo, foodDetails, pickupRequest, foodQuality });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Food Donation Form</h2>
      
      <h3>Donor Information</h3>
      <label>
        Name:
        <input type="text" value={donorInfo.name} onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })} required />
      </label>
      <label>
        Email:
        <input type="email" value={donorInfo.email} onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })} required />
      </label>
      <label>
        Phone Number:
        <input type="tel" value={donorInfo.phone} onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })} required />
      </label>
      
      <h3>Food Item Details</h3>
      <label>
        Food Type:
        <select value={foodDetails.foodType} onChange={(e) => setFoodDetails({ ...foodDetails, foodType: e.target.value })}>
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
        Expiration Date:
        <input type="date" value={foodDetails.expirationDate} onChange={(e) => setFoodDetails({ ...foodDetails, expirationDate: e.target.value })} />
      </label>
      
      <h3>Drop-off or Pickup Options</h3>
      <label>
        Preferred Food Hub Location:
        <select>
          {/* Populate with food hub locations */}
          <option value="Hub 1">Food Hub 1</option>
          <option value="Hub 2">Food Hub 2</option>
        </select>
      </label>
      <label>
        Drop-off Time:
        <input type="time" />
      </label>
      <label>
        Special Pickup Request:
        <input type="checkbox" checked={pickupRequest} onChange={() => setPickupRequest(!pickupRequest)} />
      </label>
      
      <h3>Food Quality Questions</h3>
      <label>
        Condition:
        <select value={foodQuality.condition} onChange={(e) => setFoodQuality({ ...foodQuality, condition: e.target.value })}>
          <option value="Fresh">Fresh</option>
          <option value="Near Expiry">Near Expiry</option>
          <option value="Frozen">Frozen</option>
          <option value="Non-perishable">Non-perishable</option>
        </select>
      </label>
      <label>
        Storage:
        <select value={foodQuality.storage} onChange={(e) => setFoodQuality({ ...foodQuality, storage: e.target.value })}>
          <option value="Refrigerated">Refrigerated</option>
          <option value="Frozen">Frozen</option>
        </select>
      </label>
      <label>
        Quality Assurance:
        <input type="checkbox" checked={foodQuality.qualityAssured} onChange={() => setFoodQuality({ ...foodQuality, qualityAssured: !foodQuality.qualityAssured })} />
      </label>
      
      <button type="submit">Submit Donation</button>
    </form>
  );
};

export default FoodDonationForm;
