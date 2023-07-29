import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { HomePage } from 'pages/HomePage'
import { TodoDetailPage } from 'pages/TodoDetailPage'

import { paths } from './routes'
import { PageLayout } from 'layouts/PageLayout'

export const PageRouter = () => {
  const router = createBrowserRouter([
    {
      element: <PageLayout />,
      children: [
        {
          path: paths.home,
          element: <HomePage />,
        },
        {
          path: paths.todoDetail,
          element: <TodoDetailPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
