import React, { ElementType, lazy, Suspense } from 'react';

// const pageList = ['Login', 'Dashboard'];

type Props = {
  loading?: ElementType;
  error?: ElementType;
  factory: () => Promise<{
    default: () => JSX.Element;
  }>;
};
type Pages = Record<string, JSX.Element>;

export function lazyRoute({ factory }: Props) {
  const Elem = lazy(factory);
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Elem />
    </Suspense>
  );
}

// const importPages = (routes: string[]): Pages => {
//   return routes.reduce((acc, route) => {
//     acc[route] = lazyRoute({
//       factory: () =>
//         /* @vite-ignore */ import(`./pages/${route}/${route}Page.tsx`),
//     });
//     return acc;
//   }, {} as Pages);
// };
// export const pages: Pages = importPages(pageList);
export const importPages: Pages = {
  Login: lazyRoute({
    factory: () => import('@/pages/Login/LoginPage'),
  }),
  Dashboard: lazyRoute({
    factory: () => import('@/pages/Dashboard/DashboardPage'),
  }),
};
