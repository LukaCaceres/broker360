import React, { useState } from 'react';
import '../styles/home.css';
import Card from '../components/Card';
import FAQSection from '../components/FAQSection';
import { NavLink } from 'react-router-dom';

const prepagas = [
    {
        nombre: 'Premedic',
        imgSrc: 'https://i.postimg.cc/3RmfnyQp/premedic.webp',
        dato1: 'Cobertura Nacional',
        dato2: 'Cobertura',
        dato3: 'Centros medicos',
        dato4: 'medicos de calidad',
        dato5: 'buenos precios',
        dato6: 'Centros medicos',
        dato7: 'medicos de calidad',
        dato8: 'buenos precios',
    },
    {
        nombre: 'Avalian',
        imgSrc: 'https://i.postimg.cc/76zQy3QP/logo-avalian-nav.png',
        dato1: 'Cobertura Nacional',
        dato2: 'Cobertura',
        dato3: 'Centros medicos',
        dato4: 'medicos de calidad',
        dato5: 'buenos precios',
        dato6: 'Centros medicos',
        dato7: 'medicos de calidad',
        dato8: 'buenos precios',
    },
    {
        nombre: 'Unimed',
        imgSrc: 'https://i.postimg.cc/tgLm33wp/logo-cabecera-unimed.png',
        dato1: 'Cobertura Nacional',
        dato2: 'Cobertura',
        dato3: 'Centros medicos',
        dato4: 'medicos de calidad',
        dato5: 'buenos precios',
        dato6: 'Centros medicos',
        dato7: 'medicos de calidad',
        dato8: 'buenos precios',
    },
];

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? prepagas.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === prepagas.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            {/* Hero Section */}
            <section className="section-hero min-h-screen flex flex-col items-center justify-center p-4 max-w-screen overflow-hidden">
                <div className="w-full space-y-6 lg:w-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                        Soluciones sin límites
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text ">
                        ni fronteras
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
                        Somos un grupo destinado a cumplir la función de nexo entre una persona con problemas y una empresa dispuesta a solucionarlos. Si necesitas ayuda contactanos y te brindaremos atención personalizada para que puedas encontrar la solución adecuada a tus necesidades. Si queres formar parte de nuestro círculo de prestadores podes contactarnos via mail, whatsapp o mediante nuestras redes. Para más información, hace click en el botón de abajo.
                    </p>
                </div>
                <NavLink to='/conocenos' className='mt-10'>
                    <button className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Conocenos
                    </button>
                </NavLink>
            </section>

            {/* Prepagas Section */}
            <section className="section-prepagas min-h-screen text-white relative flex flex-col justify-center items-center">
                <div className="h2-container w-full h-[10rem] flex items-center justify-center mb-8">
                    <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-center">Conoce nuestras prepagas</h2>
                </div>

                {/* Carrusel en responsive (pantallas móviles) */}
                <div className="block lg:hidden w-full max-w-screen-lg overflow-hidden flex items-center justify-center">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${prepagas.length * 100}%` }}
                    >
                        {prepagas.map((prepaga, index) => (
                            <div
                                key={prepaga.nombre}
                                className="w-full flex-shrink-0 flex justify-center items-center"
                                style={{ width: '100%' }}
                            >
                                <Card prepaga={prepaga} />
                            </div>
                        ))}
                    </div>

                    {/* Botones para mover el carrusel */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-1 md:left-20 top-3/8 transform -translate-y-1/2 bg-purple-600 p-2 rounded-full focus:outline-none"
                    >
                        &#8249;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-1 md:right-20 top-3/8 transform -translate-y-1/2 bg-purple-600 p-2 rounded-full focus:outline-none"
                    >
                        &#8250;
                    </button>
                </div>

                {/* Cards una al lado de la otra en escritorio */}
                <div className="hidden lg:flex justify-center gap-6 w-full max-w-screen-lg">
                    {prepagas.map((prepaga) => (
                        <Card key={prepaga.nombre} prepaga={prepaga} />
                    ))}
                </div>
                <img src="https://i.postimg.cc/L6sbLL7d/9109565.png" alt="doctor" className='absolute left-0 z-10 hidden lg:block' />
                <img src="https://i.postimg.cc/QxnnbVGF/9109844.png" alt="doctora" className='absolute right-0 z-10 hidden lg:block' />
            </section>

            {/* Trabaja con Nosotros Section */}
            <section className="section-trabaja-con-nosotros w-full min-h-screen flex flex-col lg:flex-row items-center justify-center lg:items-center lg:justify-between text-center lg:text-start">
                <div className="texto-container w-full lg:w-6/12 px-6 flex flex-col justify-center">
                    <h2 className="text-white font-semibold text-4xl sm:text-5xl md:text-6xl mb-8">Trabaja con nosotros</h2>
                    <p className="text-white text-base sm:text-xl md:text-2xl mb-8">
                        Sumate a nuestro círculo de prestadores para formar parte de las posibles soluciones a los problemas de nuestros clientes. Nuestro equipo de ventas se encargará de ofrecer tus servicios al público objetivo que mejor se adapte al mismo. A su vez, nuestro equipo de marketing publicitará tu empresa en redes sociales, creando contenido basado en los servicios que ofrezcas. Para más información ponete en contacto con nosotros via mail, haciendo click en el boton que se encuentra debajo, o via whatsapp mediante el icono en la barra superior.
                    </p>
                    <div className="buttons-container flex justify-center lg:justify-start gap-x-4 mb-4 [&>button]:bg-white [&>button]:border [&>button]:border-black-2 [&>button]:rounded-[.5rem] [&>button]:px-2">
                        <a href='mailto:broker360business@gmail.com'>
                            <button className='bg-white border border-black-2 rounded-[.5rem] px-2 font-semibold'>
                                Contactanos
                            </button>
                        </a>
                        <NavLink to='/conocenos'>
                            <button className='bg-white border border-black-2 rounded-[.5rem] px-2 font-semibold'>
                                Así trabajamos
                            </button>
                        </NavLink>
                        <NavLink to='/prepagas'>
                            <button className='bg-white border border-black-2 rounded-[.5rem] px-2 font-semibold'>
                                Prepagas asociadas
                            </button>
                        </NavLink>
                    </div>
                </div>

                {/* Imagen a la derecha solo en modo escritorio */}
                <div className="hidden md:block w-full md:w-6/12 md:h-1/2">
                    <img
                        src="https://i.postimg.cc/g2GnRZH1/silhouette-businessman-with-glasses.jpg"
                        alt="Personas negociando"
                        className="h-full object-cover lg:rounded-r-[2rem] lg:rounded-l-[0rem] md:rounded-[2rem] -scale-x-100"
                    />
                </div>
            </section>

            <FAQSection />
        </>
    );
};

export default HomePage;





