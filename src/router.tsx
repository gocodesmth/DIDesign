import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Main, Services, AboutUs, Careers, NotFound } from './pages'

const publicRoutes: RouteObject[] = [
  {
    element: <Main />,
    path: '/',
  },
  {
    element: <AboutUs />,
    path: '/about',
  },
  {
    element: <Services />,
    path: '/services',
  },
  {
    element: <Careers />,
    path: '/careers'
  },
]

const router = createBrowserRouter([
  ...publicRoutes,
  {
    element: <NotFound />,
    path: '*',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
