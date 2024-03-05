import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage, ProjectPage, ContactPage } from "./pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "/home",
        element: <HomePage />
      },
      {
        path: "/projects",
        element: <ProjectPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: '/:slug',
        element: <HomePage />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
