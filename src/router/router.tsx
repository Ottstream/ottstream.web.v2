import { createBrowserRouter, Navigate } from 'react-router-dom';

import AdminLayout from '@/layout/AdminLayout';
import AuthLayout from '@/layout/AuthLayout';

import { importPages } from './lazyRoute';
import RouterPaths from './routerPaths';

const router = createBrowserRouter([
  {
    path: RouterPaths.Home,
    element: <Navigate to={RouterPaths.Login} />,
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: RouterPaths.Dashboard,
        element: importPages.Dashboard,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: RouterPaths.Login,
        element: importPages.Login,
      },
    ],
  },

  {
    path: RouterPaths.NotFound,
    element: <div>Not Found</div>,
  },
]);

export default router;
