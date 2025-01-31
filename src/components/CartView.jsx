import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Cart.css';
import Loader from './common/Loader';
import CartItem from './common/carts/CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      dispatch({ type: 'SET_CART', payload: JSON.parse(savedCart) });
    }
    setLoading(false);
  }, [dispatch]);

  // Save cart items to local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculate total price details
  const calculatePriceDetails = () => {
    const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const price = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const discount = (price * 0.05).toFixed(2);
    const deliveryCharges = 50.0;
    const totalAmount = (price - discount + deliveryCharges).toFixed(2);
  
    return { totalItems, price: price.toFixed(2), discount, deliveryCharges, totalAmount };
  };

  const priceDetails = calculatePriceDetails();

  if (loading) {
    return <Loader />;
  }

  if (!cartItems.length) return <div>Your cart is empty.</div>;

  // Navigate to checkout page with cart items
  const handlePlaceOrderClick = () => {
    navigate('/checkout', { state: { cartItems } });
  };

  return (
    <div className='app-container cart'>
      <h1 className='view-header'>Your Cart</h1>
      <hr className='cart-divider' />

      <div className='item-details'>
        {/* Cart Items List */}
        <div className='cart-items'>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className='cart-item'>
                <CartItem item={item} />
              </li>
            ))}
          </ul>
        </div>

        {/* Price Details Section */}
        <div className='price-details'>
          <h2>Price Details</h2>
          <div className='distribution'>
            <p><strong>Price ({priceDetails.totalItems} items):</strong> <span className='amount'>${priceDetails.price}</span></p>
            <p><strong>Discount:</strong> <span className='discount'>-${priceDetails.discount}</span></p>
            <p><strong>Delivery Charges:</strong> <span className='delivery-charges'>${priceDetails.deliveryCharges}</span></p>
          </div>
          <hr className='cart-divider' />
          <div className='total'>
            <p className='total-amount'>
              <strong>Total Amount: <span className='total-price'>${priceDetails.totalAmount}</span></strong>
            </p>
            <p className='savings'>
              You will save <span className='discount-amount'>${priceDetails.discount}</span> on this order
            </p>
          </div>
          <button className='place-order' onClick={handlePlaceOrderClick}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
