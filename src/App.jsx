import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/pages/home';
import Service from './components/pages/Service';
import About from './components/pages/about';
import Navbar from './components/navbar';


const router = createBrowserRouter([
  {
    path: '/home',
    element: <div className='bg-black w-full min-h-screen' >
      <Navbar />,
      <Home />
    </div>,
  },
  {
    path: '/about',
    element: <div className='bg-black w-full min-h-screen'>
      <Navbar />,
      <About />
    </div>
  },
  {
    path: '/service',
    element: <div className='bg-black w-full min-h-screen'>
      <Navbar />,
      <Service />
    </div>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};


export default App;
