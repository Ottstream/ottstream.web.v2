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
      {
        path: RouterPaths.Review,
        element: importPages.Review,
      },
      {
        path: RouterPaths.Providers,
        element: importPages.Providers,
      },
      {
        path: RouterPaths.Users,
        element: importPages.Users,
      },
      {
        path: RouterPaths.Clients,
        element: importPages.Clients,
      },
      {
        path: RouterPaths.Transactions,
        element: importPages.Transactions,
      },
      {
        path: RouterPaths.Packages,
        element: importPages.Packages,
      },
      {
        path: RouterPaths.Equipments,
        element: importPages.Equipments,
      },
      {
        path: RouterPaths.Discounts,
        element: importPages.Discounts,
      },
      {
        path: RouterPaths.Appointments,
        element: importPages.Appointments,
      },
      {
        path: RouterPaths.Shippings,
        element: importPages.Shippings,
      },
      {
        path: RouterPaths.Flussonics,
        element: importPages.Flussonics,
      },
      {
        path: RouterPaths.Help,
        element: importPages.Help,
      },
      {
        path: RouterPaths.Chat,
        element: importPages.Chat,
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
      {
        path: RouterPaths.Registration,
        element: importPages.Registration,
      },
    ],
  },

  {
    path: RouterPaths.NotFound,
    element: <div>Not Found</div>,
  },
]);

export default router;
