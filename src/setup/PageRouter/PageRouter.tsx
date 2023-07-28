import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { HomePage } from 'pages/HomePage'
import { TodoDetailPage } from 'pages/TodoDetailPage'

import { paths } from './routes'

export const PageRouter = () => {
  const router = createBrowserRouter([
    {
      path: paths.home,
      element: <HomePage />,
    },
    {
      path: paths.todoDetail,
      element: <TodoDetailPage />,
    },
  ])

  return <RouterProvider router={router} />
}
