import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decrementCartItem } from '../utilies/cartActions';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Cart.css';


// Cart component to display items added to the cart
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
    navigate('/order', { state: { cartItems } });
  };

  return (
    <>
      <div className="cart">
        <h1>Your Cart</h1>
        <div className='item-details'>
            <div className='cart-items'>
                <ul>
                {cartItems.map((item) => (
                    
                        <li key={item.id} className="cart-item">
                            <div className='cart-parent'>
                                <div className="cart-item-details">
                                    <img src={item.thumbnail} alt={item.title} width="50px" height="50px" style={{backgroundColor:'grey'}}/>
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="cart-item-controls">
                                    <p>Total Price : ${(item.price * item.quantity).toFixed(2)}</p>
                                    <p>Quantity : </p><span><button onClick={() => handleDecrement(item.id)}>-</button>
                                    <span>{item.quantity || 1}</span>
                                    <button onClick={() => handleIncrement(item)}>+</button></span>
                                </div>
                                <br></br>
                            </div>
                        </li>
                        
                ))}
                </ul>
            </div>
            <div className="price-details">
                <h2>Price Details</h2>
                <p>Price ({priceDetails.totalItems} items): ${priceDetails.price}</p>
                <p>Discount: ${priceDetails.discount}</p>
                <p>Delivery Charges: ${priceDetails.deliveryCharges}</p>
                <p><strong>Total Amount: ${priceDetails.totalAmount}</strong></p>
                <p>You will save ${priceDetails.discount} on this order</p>
                <button className="place-order" onClick={handlePlaceOrderClick}>Place Order</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Cart;