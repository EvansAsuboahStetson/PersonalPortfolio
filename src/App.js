import React from 'react';
import "./index.css";
import Homepage from "./routes/Homepage/Homepage";
import Contact from './routes/Contact/Contact';
import Project from './routes/Project/Project';
import About from './routes/About/About'
import { Routes, Route } from 'react-router-dom';
import Gallery from './routes/Gallery/Gallery';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element = {<Gallery/>} />
    </Routes>
    </>
  );
}

export default App;
