import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Admin from './page/Admin';
import Landing from './components/Landing';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "/admin",
      element: <Admin />
    }
  ])

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
