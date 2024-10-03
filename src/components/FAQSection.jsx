import React from 'react';

const FAQSection = () => {
    const faqs = [
        { question: "¿Broker 360 es una obra social?", answer: "No, Broker 360 es un nexo entre clientes y empresas dispuestas a satisfacer sus necesidades, dentro de las cuales se encuentran obras sociales o prepagas." },
        { question: "¿Cuál es el costo por la cotización?", answer: "Ninguno. En Broker 360 te ofrecemos un sistema para que puedas cotizar tu servicio cuando quieras sin ningún costo adicional." },
        { question: "¿Cómo funciona el cotizador?", answer: "Nuestro cotizador se encarga de comparar todos los servicios disponibles basados en los datos que ingreses, brindándote precios certeros e información para que puedas decidir cuál es la mejor solución a tus problemas." },
        { question: "¿Puedo hablar con un asesor?", answer: "¡Por supuesto! Podés contactarnos mediante whatsapp, facebook o instagram si necesitás más información." },
    ];

    return (
        <section
            className="section-faq min-h-screen bg-cover bg-center py-12"
            style={{
                backgroundImage: `url('src/assets/img/bg/wave-4.webp')`,
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
                <h2 className="text-4xl font-extrabold text-white text-center mb-12">Preguntas Frecuentes</h2>

                {/* Línea central de la timeline solo en pantallas grandes */}
                <div className="relative timeline-container">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-white hidden sm:block"></div>

                    {faqs.map((faq, index) => (
                        <div key={index} className="timeline-item mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                            
                            {/* Punto y Pregunta (en móviles el punto se muestra antes de la pregunta) */}
                            <div className="flex items-center w-full sm:w-5/12 mb-4 sm:mb-0">
                                {/* Punto azul */}
                                <div className="w-4 h-4 bg-[#03a5f7] rounded-full mr-4 sm:hidden"></div>
                                <p className="text-xl font-semibold text-white">{faq.question}</p>
                            </div>

                            {/* Punto azul en el centro (solo en pantallas grandes) */}
                            <div className="relative z-10 w-4 h-4 bg-[#03a5f7] rounded-full order-1 mx-6 hidden sm:block"></div>

                            {/* Respuesta */}
                            <div className="w-full sm:w-5/12 text-left sm:text-right">
                                <p className="text-lg text-gray-300 mx-4 sm:mx-14">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

