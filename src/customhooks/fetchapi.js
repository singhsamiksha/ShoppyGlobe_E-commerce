import { useState, useEffect } from 'react';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError('Failed to fetch products');
      }
    };

    fetchProducts();
  }, []);

  return { products, error };
};

export default useFetchProducts;
