import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ConfirmationPage from './components/ConfirmationPage';
import ImageTransitions from './components/ImageTransitions';
import CustomPage from './components/CustomPage';
import PaymentPage from './components/PaymentPage';
import AuthPage from './components/AuthPage';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import CartPage from './components/CartPage';
import CheckoutForm from './components/CheckoutForm'; // This should be the checkout page

function App() {
  return (
    <>
      <Header /> {/* Displayed on all pages */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/images" element={<ImageTransitions />} />
        <Route path="/Auth" element={<AuthPage />} />
        <Route path="/cart" element={<CartPage />} />
        

        {/* Private routes */}
        
        <Route path="/paymentPage" element={ <PrivateRoute><PaymentPage /></PrivateRoute>}/>
        <Route path="/customPage" element={ <PrivateRoute><CustomPage /></PrivateRoute>}/>
        <Route path="/checkoutForm" element={ <PrivateRoute><CheckoutForm /></PrivateRoute> }/>

        {/* 404 fallback */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
