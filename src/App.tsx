import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Homepage from './Homepage';
import Login from './Login';
import Userpage from './Userpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Userpage" element={<Userpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
