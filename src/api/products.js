import env from '../../env.json';

const baseUrl = env.BASE_API_URL;

/**
 * @description
 * @param {*} params
 */
export const fetchProducts = async params => {
  const { setters } = params || {};
  const {
    setLoading,
    setProducts
  } = setters || {};

  try {
    setLoading(true);
    const response = await fetch(`${baseUrl}/products`);
    if (!response.ok) throw new Error('Error in fetching products list');
    const data = await response.json();
    setProducts(data.products);
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    setLoading(false); // Set loading to false after fetching
  }
};

/**
 *
 * @param {*} params
 */
export const fetchProductDetail = async params => {
  const { payload, setters } = params;
  const { id } = payload;
  const { setLoading, setProduct, setError } = setters;

  try {
    setLoading(true);

    const response = await fetch(`${baseUrl}/products/${id}`);
    if (!response.ok) throw new Error('Error in fetching product details');
    const data = await response.json();

    setProduct(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
