import React from 'react';
import '../styles/card.css';
import { NavLink } from 'react-router-dom';

const Card = ({ prepaga }) => {
    return (
        <div className={`${prepaga.nombre.toLowerCase()}-glow relative overflow-hidden h-[500px] w-[350px] py-4 rounded-2xl`}>
            <div className={`${prepaga.nombre.toLowerCase()}-card-border absolute inset-0 z-20 rounded-2xl`} />

            {/* Background gradient */}
            <div className="absolute inset-[6px] rounded-2xl bg-gradient-to-b from-black to-neutral-800 z-30" />

            {/* Card Header */}
            <div className="card-header w-full h-1/4 flex justify-between items-center pl-4">
                <img src={prepaga.imgSrc} alt={prepaga.nombre} loading="lazy" className="h-12 z-40" id={`${prepaga.nombre.toLowerCase()}-logo`} />
                <div className={`${prepaga.nombre.toLowerCase()}-nombre-container w-6/12 h-10 rounded-l-full pt-1 pl-1 z-40 animate-gradient`}>
                    <h2 className="font-semibold text-white text-3xl text-center">{prepaga.nombre}</h2>
                </div>
            </div>

            {/* Card Body */}
            <div className="card-body w-full h-2/4 max-h-1/2 px-4 relative z-40 flex justify-start">
                <ul className="[&>li]:text-xl [&>li]:text-white">
                    {prepaga.datos.map((dato, index) => (
                        <li key={index} className="flex items-center mb-1">
                            <svg className="w-5 h-5 text-purple-300 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {dato}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Card Footer */}
            <div className="card-footer w-full h-1/4 flex justify-center items-center pt-8 relative z-40">
                <NavLink to='/cotizador'>
                    <div className={`${prepaga.nombre.toLowerCase()}-button block w-full sm:w-auto  rounded-full px-6 py-3 font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-white mt-4`}>
                        <h2 className="text-white text-2xl font-semibold">Cotizá ahora</h2>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Card;


