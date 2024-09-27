import React from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import prepagas from '../data/prepagas'; // Si los datos de prepagas están en un archivo separado

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
            style={{ backgroundImage: `url('https://i.postimg.cc/B6Fn09jw/layered-wave-2.png')` }}
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
                    <img src="https://i.postimg.cc/D0by7VmM/arrow.png" alt="flecha hacia izquierda" className='h-[2rem] md:h-[3rem]' />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 md:right-20 top-3/8 transform -translate-y-1/2  p-2 px-0 md:px-2 rounded-full focus:outline-none"
                >
                    <img src="https://i.postimg.cc/D0by7VmM/arrow.png" alt="flecha hacia derecha" className='h-[2rem] md:h-[3rem] rotate-180' />
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
                src="https://i.postimg.cc/L6sbLL7d/9109565.png"
                alt="doctor"
                className="absolute left-0 z-10 hidden bottom-0 xl:block"
            />
            <img
                src="https://i.postimg.cc/QxnnbVGF/9109844.png"
                alt="doctora"
                className="absolute right-0 z-10 bottom-0 hidden xl:block"
            />
        </section>
    );
};

export default PrepagasSection;

