import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../stylesheets/PlaceOrder.css';

// CheckoutPage component to display the checkout process
const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;
  const cartItems = location.state?.cartItems || [];

  const handleEditAddress = () => {
    navigate('/order', { state: { cartItems } });
  };

  const handleEditBag = () => {
    navigate('/cart');
  };

  const calculatePriceDetails = () => {
    const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const price = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const discount = (price * 0.05).toFixed(2); // Assuming 5% discount
    const deliveryCharges = 50.0;
    const totalAmount = (price - discount + deliveryCharges).toFixed(2);

    return { totalItems, price: price.toFixed(2), discount, deliveryCharges, totalAmount };
  };

  const priceDetails = calculatePriceDetails();

  return (
    <>
      <div className="checkout-page">
      <div className="card">
          <h2>Shipping Details</h2>
          {formData && (
            <div className='formData'>
              <p><strong>Name : </strong><span>{formData.fullName}</span></p>
              <p><strong>Address : </strong><span>{formData.streetAddress}, {formData.apartment}, {formData.city}, {formData.state}, {formData.zipcode}, {formData.country}</span></p>
              <p><strong>Email : </strong><span>{formData.email}</span></p>
              <p><strong>Phone : </strong><span>{formData.phoneNumber}</span></p>
            </div>
          )}
          
        </div>
        <div className="card">
          <h2>Your Order Summary</h2>
          <div className='edit-buttons'>
              <button onClick={handleEditBag}>Edit Bag</button>
              <button onClick={handleEditAddress}>Edit Address</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Quantity</th>
                <th>Saving</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                    <p>{item.brand}</p>
                  </td>
                  <td>{item.quantity || 1}</td>
                  <td>7.17% Off</td>
                  <td>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Subtotal: ${priceDetails.price}</p>
          <p>Shipping Charges: ${priceDetails.deliveryCharges}</p>
          <p style={{color: "red", fontSize: "25px"}}>Total: ${priceDetails.totalAmount}</p>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;