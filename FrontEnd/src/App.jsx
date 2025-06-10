import React from 'react';
import './App.css'
import MainPage from './components/MainPage';
import { Routes, Route } from 'react-router-dom';
import ConfirmationPage from './components/ConfirmationPage';
import ImageTransitions from './components/ImageTransitions';
import CustomPage from './components/CustomPage';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/ConfirmationPage" element={<ConfirmationPage />} />
      <Route path="/ImageTransitions" element={<ImageTransitions />} />
      <Route path="/CustomPage" element={<CustomPage />} />
      <Route path="/PaymentPage" element={<PaymentPage />} />

      {/* Catch-all route for 404 */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
