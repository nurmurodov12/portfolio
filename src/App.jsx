import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/root/Root'
import Home from './components/home/Home'
import About from './components/about/About'
import Project from './components/projects/Project'

const router = createBrowserRouter([
  {   
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path:"/projects",
        element: <Project/>
      }
    ] 
  }
])

function App() {

  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
