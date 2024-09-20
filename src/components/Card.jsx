import React from 'react';
import '../styles/card.css';
import { NavLink } from 'react-router-dom';

const Card = ({ prepaga }) => {
    // Extract 'datos' keys dynamically
    const datos = [
        prepaga.dato1, prepaga.dato2, prepaga.dato3, prepaga.dato4,
        prepaga.dato5, prepaga.dato6, prepaga.dato7, prepaga.dato8
    ];

    return (
        <div className={`${prepaga.nombre.toLowerCase()}-glow relative overflow-hidden h-[500px] w-[350px] py-4 rounded-2xl`}>
            <div className={`${prepaga.nombre.toLowerCase()}-card-border absolute inset-0 z-20 rounded-2xl`} />

            {/* Background gradient */}
            <div className="absolute inset-[6px] rounded-2xl bg-gradient-to-b from-black to-neutral-800 z-30" />

            {/* Card Header */}
            <div className="card-header w-full h-1/4 flex justify-between items-center mb-2 pl-4">
                <img src={prepaga.imgSrc} alt={prepaga.nombre} loading="lazy" className="h-12 z-40" id={`${prepaga.nombre.toLowerCase()}-logo`} />
                <div className={`${prepaga.nombre.toLowerCase()}-nombre-container w-6/12 h-10 rounded-l-full pt-1 pl-1 z-40 animate-gradient`}>
                    <h2 className="font-semibold text-white text-3xl text-center">{prepaga.nombre}</h2>
                </div>
            </div>

            {/* Card Body */}
            <div className="card-body w-full h-2/4 px-6 relative z-40 flex justify-start">
                <ul className="[&>li]:text-xl [&>li]:text-white">
                    {datos.map((dato, index) => dato && <li key={index}>{dato}</li>)}
                </ul>
            </div>

            {/* Card Footer */}
            <div className="card-footer w-full h-1/4 flex justify-center items-center relative z-40">
                <NavLink to='/cotizador'>
                    <div className={`${prepaga.nombre.toLowerCase()}-button rounded-full px-4 py-1 cursor-pointer`}>
                        <h2 className="text-white text-2xl font-semibold">Cotiza tu plan</h2>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Card;
