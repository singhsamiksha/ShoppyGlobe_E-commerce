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
import ProductDetails from './components/ProductDetail.jsx';


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Welcome />,
            },
        ],
    },
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/allproducts",
                element: <AllProduct/>
            },
        ],
        
    },
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/cart",
                element: <Cart/>
            },
        ],
        
    },
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/allproducts/:id",
                element: <ProductDetails/>
            },
        ],
        
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
           <RouterProvider router={appRouter} />
        </Provider>
    </StrictMode>
);
