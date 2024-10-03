import React from 'react'

const ConocenosPage = () => {
    return (
        <div className="bg-only" style={{ background: 'linear-gradient(337deg, rgba(194,52,228,1) 0%, #001220 23%, #001220 81%, rgba(110,63,185,1) 90%, rgba(73,50,186,1) 100%)' }}>
            <div className="conocenos-page text-white">
                {/* Hero Section */}
                <section className="hero-section text-white pt-24 pb-8">
                    <div className="container mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-4">Conocenos</h1>
                        <p className="text-xl text-start px-6 text-pretty xl:px-0 xl:text-center">Te ayudamos a encontrar la mejor solución a tus problemas, conectándote con personas dispuestas a solucionarlos.</p>
                    </div>
                </section>

                {/* Nosotros */}

                <section className="company-overview py-6" >
                    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                        <div className="xl:w-1/2 mr-4 text-pretty">
                            <h2 className="text-5xl text-center xl:text-start font-semibold mb-4">Quiénes Somos</h2>
                            <p className="text-lg mb-4">
                                Somos un Broker destinado a conectarte con empresas o personas dispuestas a satisfacer tus necesidades, formados por un amplio equipo de ventas que te brindará atención personalizada cuando lo necesites y un círculo de prestadores dispuesto a ofrecerte lo mejor para vos.
                            </p>
                            {/* Imagen en responsive */}
                            <div className="xl:hidden my-6">
                                <img src="src/assets/img/sales-team.webp" alt="Equipo de ventas" className="rounded-2xl shadow-md" />
                            </div>
                            <p className="text-lg">
                                No somos una obra social, prepaga ni aseguradora, pero te ofrecemos estos servicios mediante nuestro círculo de prestadores. Esto significa que nuestro equipo de ventas se encargará de asesorarte y ofrecerte opciones entre nuestros prestadores para que puedas encontrar una solución acordea a tus necesidades.
                            </p>
                        </div>
                        <div className="hidden xl:block md:w-1/2 mt-8 md:mt-0">
                            <img src="src/assets/img/sales-team.webp" alt="Equipo de ventas" className="rounded-2xl shadow-md" />
                        </div>
                    </div>
                </section>




                {/* Mision */}
                <section className="our-mission py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-5xl font-semibold text-center mb-4">Nuestra Misión</h2>
                        <p className="text-lg mb-8 max-w-3xl mx-auto xl:text-center text-pretty">
                            Ayudarte a satisfacer tus necesidades mediante nuestro círculo de prestadores, ofreciéndote una gran variedad de soluciones a tus problemas y guiándote a la que mejor se acomode a tus necesidades y exigencias.
                        </p>
                        <img src="src/assets/img/shakinghand.webp" alt="Personas haciendo negocios" className="mx-auto rounded-2xl shadow-md xl:h-[35rem]" />
                    </div>
                </section>

                {/* Team Section */}
                <section className="team-section py-16">
                    <div className="container mx-auto text-center">
                        <h2 className="text-5xl font-semibold mb-12">Nuestro representante</h2>
                        {/* CEO */}
                        <div className="team-member">
                            <img src="src/assets/img/CEO.webp" alt="imagen del CEO" className="rounded-full mx-auto mb-4 w-48 h-48 object-cover shadow-lg" />
                            <h3 className="text-2xl font-bold">Sebastián Langella</h3>
                            <p className="text-lg text-gray-600">CEO & Fundador</p>
                            <p className="mt-2 px-4 text-xl">Con más de 20 años de experiencia en el mercado, Sebastián nos lidera con visión y pasión.</p>
                        </div>
                    </div>
                </section>

                {/* Contactanos */}
                <section className="cta-section  text-white py-16">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-semibold mb-4  text-center">Unite a Nosotros</h2>
                        <p className="text-xl mb-8 px-6 xl:px-0 text-start xl:text-center">Estamos siempre en la búsqueda de personas apasionadas que quieran hacer la diferencia. Si te interesa formar parte de nuestro equipo de ventas o círculo de prestadores podes contactarnos mediante whatsapp o mail haciendo click debajo. </p>
                        <a href='mailto:broker360business@gmail.com' className='flex justify-center'>
                            <button className="block w-auto border-2 border-white hover:border-white rounded-full px-6 py-3 font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-white hover:bg-white hover:text-violet-700 mt-4">
                                Contactanos
                            </button>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};


export default ConocenosPage