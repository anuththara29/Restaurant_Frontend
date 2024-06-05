import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Register from './Pages/Register';
import Details from './Pages/Details';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>,
          <Route path="/register" element={<Register/>}/>,
          <Route path="/details/:id" element={<Details/>}/>,
        </Routes>
      </Router>     
    </div>
  )
}

export default App
