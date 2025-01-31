import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './components/common/Header';

const Welcome = lazy(() => import('./components/Welcome'));
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetails = lazy(() => import('./components/common/products/ProductDetail'));
const Cart = lazy(() => import('./components/CartView'));
const PlaceOrder = lazy(() => import('./components/PlaceOrderView'));
const OrderPage = lazy(() => import('./components/OrderPageView'));
const NotFound = lazy(() => import('./components/common/NotFound'));

const AppPage = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

AppPage.propTypes = {
  children: PropTypes.node.isRequired,
};

const appRoutes = [
  { path: '/', element: <AppPage><Welcome /></AppPage> },

  { path: '/products', element: <AppPage><ProductList /> </AppPage> },
  { path: '/products/:id', element: <AppPage><ProductDetails /> </AppPage> },

  { path: '/cart', element: <AppPage><Cart /> </AppPage> },
  { path: '/checkout', element: <AppPage><PlaceOrder /> </AppPage> },
  { path: '/order', element: <AppPage><OrderPage /> </AppPage> },
  { path: '*', element: <AppPage><NotFound /></AppPage> },
];

const App = () => (
  <div className='app'>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {
            appRoutes.map((route, key) => (
              <Route key={`${key}-app-routes`} path={route.path} element={route.element} />
            ))
          }
        </Routes>
      </Suspense>
    </Router>
  </div>
);

export default App;
