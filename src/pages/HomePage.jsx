import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import PrepagasSection from '../components/PrepagasSection';
import FAQSection from '../components/FAQSection';
import TrabajaSection from '../components/TrabajaSection';

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? prepagas.length - 1 : prev - 1));
    const nextSlide = () => setCurrentIndex((prev) => (prev === prepagas.length - 1 ? 0 : prev + 1));

    return (
        <>
            {/* Hero Section */}
            <HeroSection />

            {/* Prepagas Section */}
            <PrepagasSection/>

            {/* Trabaja con Nosotros Section */}
            <TrabajaSection />

            {/* FAQ Section */}
            <FAQSection />
        </>
    );
};

export default HomePage;




