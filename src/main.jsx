import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Music from './Music';
import MyApps from './MyApps';
import { ContactUs } from './Contact';
import Footer from './Footer';

import 'bulma/css/bulma.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<MyApps />} />

        <Route path="/music" element={<Music />} />

        <Route path="/contact" element={<ContactUs />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);
