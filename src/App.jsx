import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Home />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
