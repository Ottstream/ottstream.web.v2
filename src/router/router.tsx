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
        path: RouterPaths.Users,
        element: importPages.Users,
      },
      {
        path: RouterPaths.UserList,
        element: importPages.UserList,
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
      // {
      //   path: RouterPaths.RegistrationCompany,
      //   element: importPages.RegistrationCompanyInformation,
      // },
      {
        path: RouterPaths.ResetPassword,
        element: importPages.ResetPassword,
      },
    ],
  },

  {
    path: RouterPaths.NotFound,
    element: <div>Not Found</div>,
  },
]);

export default router;
