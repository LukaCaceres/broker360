import '../styles/prepagas.css';
import { NavLink } from 'react-router-dom';
import prepagas from '../data/prepagas';

const PrepagasPage = () => {
    const getButtonColor = (nombre) => {
        switch (nombre.toLowerCase()) {
            case 'premedic':
                return 'bg-green-800  hover:text-green-800'; // Verde oscuro
            case 'avalian':
                return 'bg-green-600   hover:text-green-600'; // Verde claro
            case 'unimed':
                return 'bg-pink-600 hover:text-pink-600'; // Rosa
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
                                className={`bg- ${getButtonColor(
                                    prepaga.nombre
                                )} w-full sm:w-auto border-2 border-white hover:border-white rounded-full px-6 py-3 font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-white hover:bg-white mt-4`}
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

