import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import Welcome from './components/Welcome';
import AllProduct from './components/AllProduct.jsx';
import store from './utilies/store.js';
import Cart from './components/Cart.jsx';
import ProductDetails from './components/common/products/ProductDetail.jsx';
import NotFound from './components/NotFound.jsx';
import PlaceOrder from './components/PlaceOrder.jsx';
import OrderPage from './components/OrderPage.jsx';
import 'font-awesome/css/font-awesome.min.css';

const appRoutes = [
    { path: "/", element: <Welcome />, },
    { path: "/products", element: <AllProduct /> },
    { path: "/cart", element: <Cart /> },
    { path: "/checkout", element: <PlaceOrder />, },
    { path: "/order", element: <OrderPage />, },
    { path: "/products/:id", element: <ProductDetails /> },
]

const appRouter = createBrowserRouter([
    ...appRoutes.map((route) => {
        return {
            path: "/",
            element: <App />,
            children: [route],
        };
    }),
    {
        path: "*",
        element: <NotFound />,
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={appRouter} />
        </Provider>
    </StrictMode>
);
