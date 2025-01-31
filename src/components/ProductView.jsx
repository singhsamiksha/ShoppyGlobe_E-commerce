import { useState, useEffect } from 'react';
import '../stylesheets/AllProduct.css';
import ProductList from './common/products/ProductList';
import Loader from './common/Loader';
import useFetchProducts from '../hooks/ProductsHook';

function AllProduct() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { products, loading } = useFetchProducts();

  useEffect(() => {
    const newFilteredList = products.filter(product =>product.title.toLowerCase().includes(search.toLowerCase()));
    setFilteredProducts(newFilteredList);
  }, [search, products]);

  if (loading) {
    return <Loader />;
  }

  return(
    <div className="AllProducts">
      <h2>All Products</h2>
      <div className="searchBar">
        <input
          type="text"
          className="search-input"
          placeholder="Search Products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="product-container">
        <div className="products">
          {filteredProducts.length > 0 ? (
            <ProductList products={filteredProducts} />
          ) : (
            <p className="no-products">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
