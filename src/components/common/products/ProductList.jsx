import ProductItem from './ProductItem';
import PropTypes from 'prop-types';
import '../../../stylesheets/ProductList.css';

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map(product => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ProductList;
