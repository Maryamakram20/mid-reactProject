import React, { useState } from 'react';
import urlGenerator from '../components/urlGenerator';
import UrlGeneratorWithValidation from '../components/UrlGeneratorWithValidation';
import Header from '../components/header';
import { Route } from 'react-router-dom';
import '../components/mystyle.css'

function ShortGeneratorPage() {

    return (
      <div className="App">
         <h2 className='h2'> SHORT URL GENERATOR </h2>
         <p className='p'> <b>  Type Long URL == Magic == Short URL  </b></p>
         <UrlGeneratorWithValidation/>
          </div>
    );
  }
  
  export default ShortGeneratorPage;
  
  