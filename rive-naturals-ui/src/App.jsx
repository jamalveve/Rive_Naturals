import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SkinCareLanding from './pages/SkincareLanding';
import LoginPage from './components/UserAuth/LoginForm';
import RegisterPage from './components/UserAuth/RegisterationForm';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/skincarelanding" replace />} />
          <Route path="/skincarelanding" element={<SkinCareLanding />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
