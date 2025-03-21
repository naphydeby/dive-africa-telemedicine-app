import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login";
import Admin from './Pages/Admin';

const App = () => {
  return (
    <BrowserRouter>
    
  <Login/>
    <Routes>
    <Route path='/' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  
  )
}

export default App