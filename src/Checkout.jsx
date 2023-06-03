import React, { useState } from 'react';

const CheckoutPage = () => {
  const [postalCode, setPostalCode] = useState('');
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleCalculateCharge = () => {
    // Define your mapping or database of postal codes and charges here
    const postalCodeCharges = {
      '12345': 5.99,
      '67890': 7.99,
      // Add more postal code charges as needed
    };

    const charge = postalCodeCharges[postalCode] || 0;
    setDeliveryCharge(charge);

    // Update the total price including delivery charge
    const total = itemPrice + charge;
    setTotalPrice(total);
  };

  const handleItemPriceChange = (event) => {
    setItemPrice(parseFloat(event.target.value));
  };

  const handleCheckout = () => {
    // Perform checkout logic here (e.g., submit order, process payment, etc.)
    // ...

    // Simulating a successful submission for demonstration purposes
    setIsSubmitted(true);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <label htmlFor="itemPrice">Item Price:</label>
        <input
          type="number"
          id="itemPrice"
          value={itemPrice}
          onChange={handleItemPriceChange}
        />
      </div>
      <div>
        <label htmlFor="postalCode">Enter Postal Code:</label>
        <input
          type="text"
          id="postalCode"
          value={postalCode}
          onChange={handlePostalCodeChange}
        />
        <button onClick={handleCalculateCharge}>Calculate Delivery Charge</button>
      </div>
      <div>
        <h3>Delivery Charge:</h3>
        <p>{deliveryCharge.toFixed(2)}</p>
      </div>
      <div>
        <h3>Total Price:</h3>
        <p>{totalPrice.toFixed(2)}</p>
      </div>
      <button onClick={handleCheckout} disabled={!isSubmitted}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CheckoutPage;
