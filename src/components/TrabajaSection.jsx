import React from 'react'
import { NavLink } from 'react-router-dom'

const TrabajaSection = () => {
    return (
        <section
        className="section-trabaja-con-nosotros w-full min-h-screen flex flex-col lg:flex-row items-center justify-center lg:items-center lg:justify-between text-center lg:text-start bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/svgs/wave-3.svg')` }}
    >
        <div className="texto-container w-full lg:w-6/12 px-6 flex flex-col justify-center">
            <h2 className="text-white font-semibold text-4xl sm:text-5xl md:text-6xl mb-8">Trabaja con nosotros</h2>
            <p className="text-white text-base sm:text-xl md:text-2xl mb-8">
                Sumate a nuestro círculo de prestadores para formar parte de las posibles soluciones a los problemas de nuestros clientes. Nuestro equipo de ventas se encargará de ofrecer tus servicios al público objetivo que mejor se adapte al mismo. A su vez, nuestro equipo de marketing publicitará tu empresa en redes sociales, creando contenido basado en los servicios que ofrezcas. Para más información ponete en contacto con nosotros via mail, haciendo click en el boton que se encuentra debajo, o via whatsapp mediante el icono en la barra superior.
            </p>
            <div className="buttons-container flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
                <a href="mailto:broker360business@gmail.com" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-white text-[#003a62] hover:bg-[#003a62] hover:text-white border-2 border-white rounded-full px-6 py-3 font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        Contactanos
                    </button>
                </a>
                <NavLink to="/conocenos" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-[#003a62] text-white hover:bg-white hover:text-[#003a62] border-2 border-white rounded-full px-6 py-3 font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        Así trabajamos
                    </button>
                </NavLink>
                <NavLink to="/prepagas" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-transparent text-white hover:bg-white hover:text-[#003a62] border-2 border-white rounded-full px-6 py-3 font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        Prepagas asociadas
                    </button>
                </NavLink>
            </div>
        </div>

        {/* Imagen a la derecha solo en modo escritorio */}
        <div className="hidden md:block w-full md:w-full md:px-6 md:mt-4 lg:w-6/12 md:h-1/2">
            <img
                src="https://i.postimg.cc/g2GnRZH1/silhouette-businessman-with-glasses.jpg"
                alt="Personas negociando"
                className="h-full object-cover lg:rounded-r-[2rem] lg:rounded-l-[0rem] md:rounded-[2rem] -scale-x-100"
            />
        </div>
    </section>
);
}

export default TrabajaSection