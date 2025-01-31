import { useDispatch } from 'react-redux';
import { addToCart } from '../../../utilies/cartActions';
import '../../../stylesheets/ProductDetails.css';
import Loader from '../Loader';
import useProductDetails from '../../../hooks/ProductDetailsHook';

// ProductDetails component to display detailed information about a selected product
const ProductDetails = () => {
  const dispatch = useDispatch();

  const { product, loading, error } = useProductDetails();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Error loading product details.</div>;
  }

  return (
    <div className="product-details">
        <hr></hr>
            <div className="card-header">
                <div className='product-img'>
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                <hr></hr>
                <div className='product-info'>
                    <h3>{product.title}</h3>
                    <hr></hr>
                      <p className="price" >
                          <b>Price:</b> ${product.price}
                      </p>
                      <p className="discounted-price">
                          <b>Discounted Price:</b> ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                      </p>
                      <p className="stock" style={{color:'green'}}>
                          <b>Stock:</b> {product.stock > 0 ? 'In Stock' : 'Low Stock'}
                      </p>
                      <p className="brand">
                          <b>Brand:</b> {product.brand}
                      </p>
                      <p className="category">
                          <b>Category:</b> {product.category}
                      </p>
                      <p className="description" style={{textAlign: 'start'}}>
                          <b>Description:</b> {product.description}
                      </p>
                      <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            <div className="product-details">
                <h3>More Information</h3>
                    <table className="product-table">
                        <tbody>
                            {product.dimensions && (
                                <>
                                    <tr>
                                        <td>Width:</td>
                                        <td>{product.dimensions.width} cm</td>
                                    </tr>
                                    <tr>
                                        <td>Height:</td>
                                        <td>{product.dimensions.height} cm</td>
                                    </tr>
                                    <tr>
                                        <td>Depth:</td>
                                        <td>{product.dimensions.depth} cm</td>
                                    </tr>
                                </>
                            )}
                            <tr>
                                <td>Weight:</td>
                                <td>{product.weight} gm</td>
                            </tr>
                            <tr>
                                <td>Discount:</td>
                                <td>{product.discountPercentage}%</td>
                            </tr>
                            <tr>
                                <td>Minimum Order Quantity:</td>
                                <td>{product.minimumOrderQuantity}</td>
                            </tr>
                            <tr>
                                <td>Rating:</td>
                                <td>{product.rating}</td>
                            </tr>
                            <tr>
                                <td>Return Policy:</td>
                                <td>{product.returnPolicy}</td>
                            </tr>
                            <tr>
                                <td>Shipping Information:</td>
                                <td>{product.shippingInformation}</td>
                            </tr>
                            <tr>
                                <td>Warranty:</td>
                                <td>{product.warrantyInformation}</td>
                            </tr>
                            <tr>
                                <td>Availability:</td>
                                <td>{product.availabilityStatus}</td>
                            </tr>
                            <tr>
                                <td>SKU:</td>
                                <td>{product.sku}</td>
                            </tr>
                            <tr>
                                <td>Tags:</td>
                                <td>{product.tags.join(', ')}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
  );
};

export default ProductDetails;