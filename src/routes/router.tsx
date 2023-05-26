import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import Layout from '../pages/Layout';
import ErrorPage from '../pages/ErrorPage';
import AboutPage from '../pages/AboutPage';
import FaqPage from '../pages/FaqPage';
import SuccessPage from '../pages/SuccessPage';
import CancelPage from '../pages/CancelPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/products', element: <ProductListPage /> },
      { path: '/products/:id', element: <ProductDetailPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/faq', element: <FaqPage /> },
      { path: '/success', element: <SuccessPage /> },
      { path: '/canceled', element: <CancelPage /> },
    ],
  },
]);

export default router;
