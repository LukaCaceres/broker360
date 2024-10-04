import React from 'react';
import { Link } from 'react-router-dom';

const Error404Page = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
            style={{ backgroundImage: `url('https://i.postimg.cc/XvmYm7YC/error404.png')` }} 
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
                    className="w-full sm:w-auto bg-white text-[#6810dc] hover:bg-[#6810dc] hover:text-white border-2 border-white hover:border-[#6810dc] rounded-full px-6 py-3 font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
};

export default Error404Page;
