import { useDispatch } from 'react-redux';
import { addToCart, decrementCartItem } from '../../../utilies/cartActions';
import PropTypes from 'prop-types';
import '../../../stylesheets/CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addToCart(item));
  };

  const handleDecrement = () => {
    dispatch(decrementCartItem(item.id));
  };

  return (
    <div className='cart-parent'>
      <div className='cart-item-details'>
        <img src={item.thumbnail} alt={item.title} width='50px' height='50px' className='cart-item-image' />
        <h3 className='product-name'>{item.title}</h3>
      </div>
      <div className='cart-item-controls'>
        <p className='total-price'>Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className='qty'>
        <p>Quantity: </p>
        <button className='small-btns' onClick={() => handleDecrement()}>-</button>
        {item.quantity || 1}
        <button className='small-btns' onClick={() => handleIncrement()}>+</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
