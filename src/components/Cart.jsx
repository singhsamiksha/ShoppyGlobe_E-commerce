import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decrementCartItem } from '../utilies/cartActions';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      dispatch({ type: 'SET_CART', payload: JSON.parse(savedCart) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (id) => {
    dispatch(decrementCartItem(id));
  };

  const calculatePriceDetails = () => {
    const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const price = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const discount = (price * 0.05).toFixed(2);
    const deliveryCharges = 50.0;
    const totalAmount = (price - discount + deliveryCharges).toFixed(2);

    return { totalItems, price: price.toFixed(2), discount, deliveryCharges, totalAmount };
  };

  const priceDetails = calculatePriceDetails();

  if (!cartItems.length) return <div>Your cart is empty.</div>;

  const handlePlaceOrderClick = () => {
    navigate('/checkout', { state: { cartItems } });
  };

  return (
    <>
      <div className="cart">
        <hr className="cart-divider" />
        <h1>Your Cart</h1>
        <div className="item-details">
          <div className="cart-items">
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-parent">
                    <div className="cart-item-details">
                      <img src={item.thumbnail} alt={item.title} width="50px" height="50px" style={{ backgroundColor: 'pink' }} />
                      <h3 className="product-name">{item.title}</h3>
                    </div>
                    <div className="cart-item-controls">
                      <p>Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="Qty">
                        <p>Quantity: </p>
                        <button  className="small-btns" onClick={() => handleDecrement(item.id)}>-</button>
                        {item.quantity || 1}
                        <button className="small-btns" onClick={() => handleIncrement(item)}>+</button>
                      </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="price-details">
            <h2>Price Details</h2>
            <div className="distribution">
              <p><strong>Price ({priceDetails.totalItems} items):</strong> ${priceDetails.price}</p>
              <p><strong>Discount:</strong> ${priceDetails.discount}</p>
              <p><strong>Delivery Charges:</strong> ${priceDetails.deliveryCharges}</p>
            </div>
            <hr className="cart-divider" />
            <div className="total">
              <p style={{ fontSize: '30px', color: 'white' }}>
                <strong>Total Amount: ${priceDetails.totalAmount}</strong>
              </p>
              <p style={{ fontSize: '15px', color: 'yellow', fontWeight: '800px' }}>
                You will save ${priceDetails.discount} on this order
              </p>
            </div>
            <button className="place-order" onClick={handlePlaceOrderClick}>Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
