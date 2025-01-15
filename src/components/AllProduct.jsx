import React, { useState, useEffect } from 'react';
import '../stylesheets/AllProduct.css';
import ProductList from './ProductList';


function AllProduct(){
  const [search,setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } 
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  function handleChange(e){
    setSearch(e.target.value);
  }
  return(
    <div className='AllProducts'>
        <div className='searchBar'>
        <input
            type="text"
            className="search-input"
            placeholder="Search Products..."
            value={search}
            onChange={handleChange}
          />
        </div>
        <div className='product-container'>
            <h2>All Products</h2>
            <div className='products'>
                {filteredProducts.length > 0 ? (
                    <ProductList products={filteredProducts} />
                ) : (
                    <p className="no-products">No products found.</p>
                )}
            </div>
        </div>
    </div>
  );
};

export default AllProduct;