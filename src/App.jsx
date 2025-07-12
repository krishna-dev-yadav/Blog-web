import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/home";
import About from './components/pages/about';
import Service from './components/pages/Service';
import Navbar from './components/navbar';

const App = () => {
  return (
    <HashRouter>
      <div className="bg-black w-full min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;