import React from 'react';
import { NavLink } from 'react-router-dom';
import useTypingAnimation from '../hooks/useTypingAnimation';

const HeroSection = () => {
    const text = useTypingAnimation('Soluciones sin límites', 'Soluciones sin fronteras');

    return (
        <section
            className="section-hero min-h-screen flex flex-col items-center justify-center p-4 max-w-screen overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url('src/assets/img/bg/wave-1.webp')` }}
        >
            <div className="w-full space-y-6 lg:w-auto sm:text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                    Soluciones sin{' '}
                    {text.includes('fronteras') ? (
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent font-semibold bg-clip-text">
                            {text.slice(15)}
                        </span>
                    ) : (
                        text.slice(15)
                    )}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 text-start lg:max-w-2xl">
                    Somos un grupo destinado a cumplir la función de nexo entre una persona con problemas y una empresa dispuesta a solucionarlos. Si necesitás ayuda contactanos y te brindaremos atención personalizada para que puedas encontrar la solución adecuada a tus necesidades. Si queres formar parte de nuestro círculo de prestadores podes contactarnos via mail, whatsapp o mediante nuestras redes. Para más información, hace click aquí  <img src="src/assets/img/arrow.webp" alt="flecha hacia abajo" className='h-[1rem] rotate-[270deg] inline mx-2' />
                </p>
            </div>
            <NavLink to='/conocenos' className='mt-10'>
                <button className="w-full sm:w-auto bg-white text-[#6810dc] hover:bg-[#6810dc] hover:text-white border-2 border-white hover:border-[#6810dc] rounded-full px-6 py-3 font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    Conocenos
                </button>
            </NavLink>
        </section>
    );
};

export default HeroSection;
