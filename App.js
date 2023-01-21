import HomePage from './pages/homePage';
import Header from './components/header';
import ShortGeneratorPage from './pages/ShortGeneratorPage';
import Footer from './components/footer';
import './components/mystyle.css';
import ShowHistory from './components/showHistory';
import History from './pages/history';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import React from "react";


function App() {
  return (
    <div className='background'>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/shorturl' element={<ShortGeneratorPage />} />
          <Route path='/history' element={<History/>} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>

  
      <Footer />


    </div>
  );
}

export default App;
