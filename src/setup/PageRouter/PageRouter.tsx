import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { HomePage } from 'pages/HomePage'
import { TodoDetailPage } from 'pages/TodoDetailPage'
import { SettingPage } from 'pages/SettingPage'

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
        {
          path: paths.setting,
          element: <SettingPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
