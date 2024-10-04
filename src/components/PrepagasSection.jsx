import React, { useState } from 'react';
import Card from '../components/Card';
import prepagas from '../data/prepagas';

const PrepagasSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCardsMobile = 1; // Mostrar 1 tarjeta en pantallas pequeñas
    const visibleCardsDesktop = 3; // Mostrar 3 tarjetas en pantallas grandes
    const cardWidth = 350; // El ancho de cada tarjeta (sin el margen incluido)
    const totalCards = prepagas.length;

    // Obtener el tamaño de la pantalla para ajustar cuántas tarjetas se muestran
    const isMobile = window.innerWidth < 768; // Tamaño de pantalla para móviles
    const visibleCards = isMobile ? visibleCardsMobile : visibleCardsDesktop;

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalCards - visibleCards : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === totalCards - visibleCards ? 0 : prev + 1));
    };

    return (
        <section
            className="section-prepagas w-full min-h-screen text-white relative flex flex-col justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url('https://i.postimg.cc/B6Fn09jw/layered-wave-2.png')` }}
        >
            {/* Título de la sección */}
            <div className="h2-container w-full h-[10rem] flex items-center justify-center mb-8">
                <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-center">
                    Conoce nuestras prepagas
                </h2>
            </div>

            {/* Carrusel en pantallas móviles y medianas */}
            <div className="block xl:hidden w-full max-w-screen-lg overflow-hidden flex items-center justify-center">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${prepagas.length * 100}%` }}
                >
                    {prepagas.map((prepaga) => (
                        <div
                            key={prepaga.nombre}
                            className="w-full flex-shrink-0 flex justify-center items-center"
                        >
                            <Card prepaga={prepaga} />
                        </div>
                    ))}
                </div>

                {/* Botones para mover el carrusel */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 md:left-10 top-3/8 transform -translate-y-1/2 z-50 p-2 px-0 md:px-2 rounded-full focus:outline-none"
                >
                    <img src="https://i.postimg.cc/bNzQ1r7b/arrow.webp" alt="flecha hacia izquierda" className='h-[2rem] md:h-[3rem]' />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 md:right-10 top-3/8 transform -translate-y-1/2 z-50 p-2 px-0 md:px-2 rounded-full focus:outline-none"
                >
                    <img src="https://i.postimg.cc/bNzQ1r7b/arrow.webp" alt="flecha hacia derecha" className='h-[2rem] md:h-[3rem] rotate-180' />
                </button>
            </div>

            {/* Tarjetas en modo escritorio con carrusel de 3 elementos */}
            <div className="hidden xl:flex justify-center items-center w-full h-full relative">
                {/* Contenedor de las tarjetas */}
                <div className="relative flex overflow-hidden w-[70rem] p-4">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (cardWidth + 16)}px)`, // Mueve el carrusel basado en el ancho de la tarjeta + margen
                        }}
                    >
                        {prepagas.map((prepaga, index) => (
                            <div
                                key={prepaga.nombre}
                                className={`flex-shrink-0 w-[350px] h-[500px] flex justify-center items-center mx-2 transition-opacity duration-500 ease-in-out`}
                                style={{
                                    opacity: index >= currentIndex && index < currentIndex + visibleCards ? 1 : 0.5,
                                    transform: index >= currentIndex && index < currentIndex + visibleCards ? 'scale(1)' : 'scale(0.95)',
                                }}
                            >
                                <Card prepaga={prepaga} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botones para mover el carrusel en escritorio */}
                <button
                    onClick={prevSlide}
                    className="absolute left-[calc(50%-40rem)] top-1/2 transform -translate-y-1/2 p-2 md:px-3 rounded-full focus:outline-none"
                >
                    <img src="https://i.postimg.cc/bNzQ1r7b/arrow.webp" alt="flecha hacia izquierda" className='h-[2rem] md:h-[3rem]' />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-[calc(50%-40rem)] top-1/2 transform -translate-y-1/2 p-2 md:px-3 rounded-full focus:outline-none"
                >
                    <img src="https://i.postimg.cc/bNzQ1r7b/arrow.webp" alt="flecha hacia derecha" className='h-[2rem] md:h-[3rem] rotate-180' />
                </button>
            </div>
        </section>
    );
};

export default PrepagasSection;

