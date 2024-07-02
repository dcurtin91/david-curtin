import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Music from './Music';
import MyApps from './MyApps';
import { ContactUs } from './Contact';
import Footer from './Footer';

// import 'bulma/css/bulma.min.css';
import './App.css'
import MusicNew from './Music_New';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/david-curtin/" element={<MyApps />} />

        <Route path="/david-curtin/music" element={<Music />} />

        <Route path="/david-curtin/contact" element={<ContactUs />} />

        <Route path="/david-curtin/music-new" element={<MusicNew />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
