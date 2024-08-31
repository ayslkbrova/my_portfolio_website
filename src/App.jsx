import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
function App() {
  return (
    <ThemeProvider>
      <Nav />
      <Home />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
