import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../utilies/cartActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../../stylesheets/ProductItem.css';

const ProductItem = ({ product, isSelected }) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  const removeItem = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className='product-item'>
      <img src={product.thumbnail} alt={product.title} height='150px' width='150px' />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div className='prodcut-buttons'>
        <button className='secondary-button'><Link to={`/products/${product.id}`}>View Details</Link></button>
        {
          isSelected
            ? <button className='app-button danger-button' onClick={removeItem}>Remove</button>
            : <button className='app-button' onClick={handleAddToCart}>Add to Cart</button>
        }
      </div>
      {showPopup && <div className='popup'>Product added to cart!</div>}
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool,
};

export default ProductItem;
