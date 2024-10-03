import React from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import prepagas from '../data/prepagas'; 

const PrepagasSection = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? prepagas.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === prepagas.length - 1 ? 0 : prev + 1));
    };

    return (
        <section
            className="section-prepagas min-h-screen text-white relative flex flex-col justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url('src/assets/img/bg/wave-2.webp')` }}
        >
            {/* Título de la sección */}
            <div className="h2-container w-full h-[10rem] flex items-center justify-center mb-8">
                <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-center">
                    Conoce nuestras prepagas
                </h2>
            </div>

            {/* Carrusel en pantallas móviles */}
            <div className="block xl:hidden w-full max-w-screen-lg overflow-hidden flex items-center justify-center">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${prepagas.length * 100}%` }}
                >
                    {prepagas.map((prepaga, index) => (
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
                    className="absolute left-0 md:left-20 top-3/8 transform -translate-y-1/2  p-2 px-0 md:px-2 rounded-full focus:outline-none"
                >
                    <img src="src/assets/img/arrow.webp" alt="flecha hacia izquierda" className='h-[2rem] md:h-[3rem]' />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 md:right-20 top-3/8 transform -translate-y-1/2  p-2 px-0 md:px-2 rounded-full focus:outline-none"
                >
                    <img src="src/assets/img/arrow.webp" alt="flecha hacia derecha" className='h-[2rem] md:h-[3rem] rotate-180' />
                </button>
            </div>

            {/* Tarjetas en modo escritorio */}
            <div className="hidden xl:flex justify-center gap-6 w-full max-w-screen-lg">
                {prepagas.map((prepaga) => (
                    <Card key={prepaga.nombre} prepaga={prepaga} />
                ))}
            </div>

            {/* Imágenes decorativas */}
            <img
                src="src/assets/img/medico1.webp"
                alt="doctor"
                className="absolute left-0 h-3/4 z-10 hidden bottom-0 2xl:block"
            />
            <img
                src="src/assets/img/medico2.webp"
                alt="doctora"
                className="absolute right-0 h-3/4 z-10 bottom-0 hidden 2xl:block"
            />
        </section>
    );
};

export default PrepagasSection;

