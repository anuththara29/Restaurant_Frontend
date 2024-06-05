import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Register from './Pages/Register';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>,
          <Route path="/register" element={<Register/>}/>,
        </Routes>
      </Router>     
    </div>
  )
}

export default App
