import { useState, useEffect } from 'react';
import '../stylesheets/ProductList.css';
import Loader from './common/Loader';
import useFetchProducts from '../hooks/ProductsHook';
import ProductItem from './common/products/ProductItem';
import { useSelector } from 'react-redux';

function ProductList() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Retrieve cart items from Redux store
  const cartItems = useSelector(state => state.cart.cartItems);
  const [selectedItems, setSelectedItems] = useState({});

  useEffect(() => {
    // Map cart items to selectedItems state
    const newSelectedItems = {};
    cartItems.forEach(cartItem => {
      newSelectedItems[cartItem.id] = cartItem;
    });

    setSelectedItems(newSelectedItems);

    // Store cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const { products, loading } = useFetchProducts();

  useEffect(() => {
    // Filter products based on search input
    const newFilteredList = products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(newFilteredList);
  }, [search, products]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='app-container'>
      <h2 className='text-center view-header'>All Products</h2>
      <div className='search-bar'>
        <input
          type='text'
          className='search-input'
          placeholder='Search Products...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Display filtered products or message if none found */}
      {filteredProducts.length > 0 ? (
        <div className='product-list'>
          {filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} isSelected={!!selectedItems[product.id]} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductList;
