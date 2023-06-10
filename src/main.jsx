import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    errorElement: <h1>Error Page</h1>,
    children:[
      {
        path:"/trainers",
        element: <h1>trainer</h1>
      },
      {
        path:"/resources",
        element: <h1>resources</h1>
      },
      {
        path:"/",
        element: <App/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
