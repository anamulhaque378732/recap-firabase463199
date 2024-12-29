import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Root from './components/Root'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import AuthProvider from './components/AuthProvider'




// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home>

        </Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      }


    ]
  }





])

createRoot(document.getElementById('root')).render(
  <StrictMode>


    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>


  </StrictMode>,
)
