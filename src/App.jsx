import './App.css';
import { useState } from 'react';
import FooterComponent from './components/FooterComponent';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PrepagasPage from './pages/PrepagasPage';
import CotizadorPage from './pages/CotizadorPage';
import ConocenosPage from './pages/ConocenosPage';
import Error404Page from './pages/Error404Page';
import ScrollToTop from './components/ScrollToTop';

function App() {
    const [formData, setFormData] = useState({});

    return (
        <>
            <ScrollToTop />
            <header className="fixed top-0 w-full z-50">
                <Navbar />
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/prepagas" element={<PrepagasPage />} />
                    <Route path="/cotizador" element={<CotizadorPage setFormData={setFormData} />} />
                    <Route path="/conocenos" element={<ConocenosPage />} />
                    <Route path="*" element={<Error404Page />} />
                </Routes>
            </main>

            <footer className="mt-auto">
                <FooterComponent />
            </footer>
        </>
    );
}

export default App;
