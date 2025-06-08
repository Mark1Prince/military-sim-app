import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import TrainingTopicsPage from './TrainingTopicsPage'; // создадим дальше
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/topics" element={<TrainingTopicsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
