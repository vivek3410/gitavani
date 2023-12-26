import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import './bootstrap.css'
import {BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
  </React.StrictMode>
);
