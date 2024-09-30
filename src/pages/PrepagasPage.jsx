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
                    className={`bg-black w-full min-h-screen flex flex-col xl:flex-row items-center justify-center xl:justify-start pt-20 px-4 pb-8 ${prepaga.nombre.toLowerCase()}-section`}
                >
                    <div className="texto-container w-full xl:w-6/12 px-4 mb-8">
                        <h2 className="text-white text-center xl:text-start font-semibold text-4xl md:text-6xl mb-4">{prepaga.nombre}</h2>
                        <p className="text-white text-lg md:text-2xl">{prepaga.descripcion}</p>
                        <NavLink to='/cotizador'>
                            <button
                                className={`bg- ${getButtonColor(
                                    prepaga.nombre
                                )} hidden xl:block w-full sm:w-auto border-2 border-white hover:border-white rounded-full px-6 py-3 font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-white hover:bg-white mt-4`}
                            >
                                Cotiza ahora
                            </button>
                        </NavLink>
                    </div>


                    <div className="beneficios-container w-full xl:w-6/12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {prepaga.beneficios.map((beneficio, i) => (
                            <div key={i} className="beneficio-container flex flex-col items-center">
                                <img src={beneficio.src} alt={beneficio.alt} className="object-cover h-[4rem] w-auto" />
                                <p className="text-white text-base sm:text-xl text-center mt-2">{beneficio.alt}</p>
                            </div>
                        ))}
                    </div>
                    <NavLink to='/cotizador'>
                        <button
                            className={`bg- ${getButtonColor(
                                prepaga.nombre
                            )} xl:hidden w-full sm:w-auto border-2 border-white hover:border-white rounded-full px-6 py-3 font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-white hover:bg-white mt-8`}
                        >
                            Cotiza ahora
                        </button>
                    </NavLink>
                </section>
            ))}
        </>
    );
};

export default PrepagasPage;

