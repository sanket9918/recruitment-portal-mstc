import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/hero-login.component';
import Navbar1 from './components/navbar.component';
import Footer from './components/footer.component';

function App() {
  return (
    <div>
    <Navbar1 />
    <Login />
    <Footer />
    </div>
  );
}

export default App;
