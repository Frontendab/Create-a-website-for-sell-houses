import React from 'react';
import './components/prices/pricing.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import { About } from './components/about/about';
import { Service } from './components/services/services';
import { Blog } from './components/blog/blog';
import { PricesHead } from './components/pricing/pricesHead';
import { Contacts } from './components/contacts/contacts';
import { Login } from './pages/login/login';
import NotFound from './pages/page_not_found/notFound';

function App() {
  return (
    <>
    <Router>
        {/* -------- PAGES FROM PROTOCOL SO LINK PATH -------- */}
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/pricing" element={<PricesHead />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/" exact element={<Home />} />
        </Routes>
    </Router>
    </>
  );
};

export default App;
