import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SkinCareLanding from './pages/SkincareLanding';
import LoginPage from './components/LoginForm';
import RegisterPage from './components/RegisterationForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Show landing page */}
        <Route path="/" element={<SkinCareLanding />} />
        {/* Login and Register pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
