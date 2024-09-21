import '../styles/prepagas.css';
import { NavLink } from 'react-router-dom';
import prepagas from '../data/prepagas';

const PrepagasPage = () => {
    const getButtonGradient = (nombre) => {
        switch (nombre.toLowerCase()) {
            case 'premedic':
                return 'from-green-800 to-green-900 hover:from-green-900 hover:to-green-800'; // Verde oscuro
            case 'avalian':
                return 'from-green-400 to-green-600 hover:from-green-500 hover:to-green-700'; // Verde claro
            case 'unimed':
                return 'from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800'; // Rosa
            default:
                return 'from-gray-400 to-gray-600'; // Fallback
        }
    };

    return (
        <>
            {prepagas.map((prepaga, index) => (
                <section
                    key={index}
                    className={`bg-black w-full min-h-screen flex flex-col md:flex-row items-center  pt-20 px-4 md:p-8 ${prepaga.nombre.toLowerCase()}-section`}
                >
                    <div className="texto-container w-full md:w-6/12 px-4 mb-8 md:mb-0">
                        <h2 className="text-white font-semibold text-4xl md:text-6xl mb-4">{prepaga.nombre}</h2>
                        <p className="text-white text-lg md:text-2xl">{prepaga.descripcion}</p>
                        <NavLink to='/cotizador'>
                            <button
                                className={`bg-gradient-to-r ${getButtonGradient(
                                    prepaga.nombre
                                )} text-white font-semibold mt-4 py-3 px-6 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-md`}
                            >
                                Cotiza tu plan
                            </button>
                        </NavLink>
                    </div>

                    <div className="beneficios-container w-full md:w-6/12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {prepaga.beneficios.map((beneficio, i) => (
                            <div key={i} className="beneficio-container flex flex-col items-center">
                                <img src={beneficio.src} alt={beneficio.alt} className="object-cover h-[4rem] w-auto" />
                                <p className="text-white text-base sm:text-xl text-center mt-2">{beneficio.alt}</p>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </>
    );
};

export default PrepagasPage;

