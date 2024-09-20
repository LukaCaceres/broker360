import React from 'react'
import { Link } from 'react-router-dom';

const Error404Page = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
            style={{ backgroundImage: 'url(src/assets/svgs/error404.svg)' }} // Replace with the actual path
        >
            {/* Error Message */}
            <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-6xl font-bold text-white mb-4">Error 404</h1>
                <h2 className="text-3xl font-semibold text-white mb-4">Página no encontrada</h2>
                <p className="text-lg text-white mb-6">
                    Lo sentimos, la página que buscas no existe o está en construcción.
                </p>

                {/* Button to go back to Home */}
                <Link
                    to="/"
                    className="bg-[#6d29a6] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#BB117F] transition"
                >
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
};

export default Error404Page