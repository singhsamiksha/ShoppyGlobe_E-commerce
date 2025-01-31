import { Link } from 'react-router-dom';
import '../../stylesheets/Header.css';
import AppLogo from './AppLogo';
import { useSelector } from 'react-redux';

function Header() {
  // Get cart items from Redux store
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className='header'>
      {/* Logo Section */}
      <div className='logo'>
        <Link to='/' className='nav-link'>
          <AppLogo width={150} height={70} color='primary.main' />
        </Link>
      </div>

      {/* Navigation Bar */}
      <div className='navbar'>
        <Link to='/' className='nav-link'>
          <i className='fa fa-home'></i> Home
        </Link>
        <Link to='/products' className='nav-link'>
          <i className='fa fa-cogs'></i> Products
        </Link>
        <Link to='/cart' className='nav-link'>
          <i className='fa fa-shopping-cart'></i> Cart {(cartItems || []).length ? `(${(cartItems || []).length})` : ''}
        </Link>
      </div>
    </div>
  );
}

export default Header;
