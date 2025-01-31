import { useState, useEffect } from 'react';
import { fetchProductDetail } from '../api/products';
import { useParams } from 'react-router-dom';

const useProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductDetail({
      payload: { id },
      setters: {
        setLoading,
        setProduct,
        setError,
      },
    });
  }, [id]);

  return { product, loading, error };
};

export default useProductDetails;
