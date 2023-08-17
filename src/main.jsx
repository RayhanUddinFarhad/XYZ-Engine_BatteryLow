import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataProvider from './context/DataProvider.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Result from './components/Result.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "/result",
    element: <Result></Result>

  }


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>

      <RouterProvider router={router} />

    </DataProvider>
  </React.StrictMode>,
)
