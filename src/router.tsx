import { ErrorPage, NotFoundPage, ProjectPage, RootPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/layout';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <RootPage />,
          errorElement: <ErrorPage />
        },
        {
          path: 'projects/:projectSlug',
          element: <ProjectPage />,
          errorElement: <ErrorPage />
        }
      ]
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ],
  {
    basename: '/portfolio'
  }
);
