import React from 'react';
import '../styles/cotizadorPage.css'
import CotizadorForm from '../components/CotizadorForm';

const CotizadorPage = () => {
    return (
        <div className="cotizador-page w-full min-h-screen flex flex-col xl:flex-row justify-around items-center px-4 md:px-6 py-8">
            {/* Texto informativo */}
            <div className="texto-info-container text-white w-full xl:w-6/12 mb-8 xl:mb-0 text-start mt-12 xl:mt-0">
                <h2 className="text-3xl md:text-6xl text-center xl:text-start font-semibold mb-4">Cotiza tu prepaga</h2>
                <p className="text-base md:text-2xl leading-relaxed text-pretty">
                    En Broker 360 te ofrecemos una cotización personalizada, que se ajuste a tus necesidades y nivel
                    económico. Ingresa tus datos y nos encargaremos de calcular el precio exacto de todos los planes disponibles para vos en los distintos servicios que ofrecemos. 
                    Tené en cuenta que solo se mostrarán los servicios disponibles en la provincia que elijas a continuación. Luego de ver los distintos precios, podrás ver más información sobre los planes de cada uno y comenzar tu trámite de afiliación si así lo deseas. 
                    Recorda que no somos una obra social ni prepaga, solo te ofrecemos un medio para compararlas y ayudarte a elegir la mejor para vos.
                </p>
            </div>

            {/* Formulario del cotizador */}
            <div className="w-full xl:w-6/12">
                <CotizadorForm />
            </div>
        </div>
    );
};

export default CotizadorPage;
