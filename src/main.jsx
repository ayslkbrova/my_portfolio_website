import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'aos/dist/aos.css'; // AOS CSS dosyasını dahil edin
import AOS from 'aos'; // AOS'u import edin

AOS.init(); // AOS'u başlatın

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
