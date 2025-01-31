import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/products';

const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts({
            setters: {
                setLoading,
                setProducts,
            }
        });
    }, []);

    return { products, loading };
};

export default useFetchProducts;
