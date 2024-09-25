import React from 'react'

const ConocenosPage = () => {
    return (
        <div className="conocenos-page  text-white" style={{ backgroundImage: `url('/src/assets/svgs/waves-conocenos-2')` }}>
            {/* Hero Section */}
            <section className="hero-section  text-white pt-24 pb-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-4">Conocenos</h1>
                    <p className="text-xl">Te ayudamos a encontrar la mejor solución a tus problemas, conectándote con personas dispuestas a solucionarlos.</p>
                </div>
            </section>

            {/* Nosotros */}
            <section className="company-overview py-16">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mr-4 text-pretty">
                        <h2 className="text-4xl font-semibold mb-4">Quiénes Somos</h2>
                        <p className="text-lg mb-4">
                            Somos un Broker destinado a conectarte con empresas o personas dispuestas a satisfacer tus necesidades, formados por un amplio equipo de ventas que te brindará atención personalizada cuando lo necesites y un círculo de prestadores dispuesto a ofrecerte lo mejor para vos.
                        </p>
                        <p className="text-lg">
                            No somos una obra social, prepaga ni aseguradora, pero te ofrecemos estos servicios mediante nuestro círculo de prestadores. Esto significa que nuestro equipo de ventas se encargará de asesorarte y ofrecerte opciones entre nuestros prestadores para que puedas encontrar una solución acordea a tus necesidades.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <img src="https://i.postimg.cc/28qsRQ5X/sales-team.jpg" alt="Company overview" className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </section>

            {/* Mision */}
            <section className="our-mission  py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-semibold mb-4">Nuestra Misión</h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        Ayudarte a satisfacer tus necesidades mediante nuestro círculo de prestadores, ofreciéndote una gran variedad de soluciones a tus problemas y guiándote a la que mejor se acomode a tus necesidades y exigencias.
                    </p>
                    <img src="https://via.placeholder.com/800x400" alt="Nuestra misión" className="mx-auto rounded-lg shadow-md" />
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-12">Nuestro Equipo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* CEO */}
                        <div className="team-member">
                            <img src="https://via.placeholder.com/300" alt="Team member" className="rounded-full mx-auto mb-4 w-48 h-48 object-cover shadow-lg" />
                            <h3 className="text-2xl font-bold">Sebastián Langella</h3>
                            <p className="text-lg text-gray-600">CEO & Fundador</p>
                            <p className="mt-2">Con más de 20 años de experiencia en el mercado, Sebastián nos lidera con visión y pasión.</p>
                        </div>

                        {/* Administración */}
                        <div className="team-member">
                            <img src="https://via.placeholder.com/300" alt="Team member" className="rounded-full mx-auto mb-4 w-48 h-48 object-cover shadow-lg" />
                            <h3 className="text-2xl font-bold">María José Cáceres</h3>
                            <p className="text-lg text-gray-600">Administración</p>
                            <p className="mt-2">María José se encarga de supervisar todas las operaciones diarias, asegurando la excelencia en todo lo que hacemos.</p>
                        </div>

                        {/* Equipo de ventas */}
                        <div className="team-member">
                            <img src="https://via.placeholder.com/300" alt="Team member" className="rounded-full mx-auto mb-4 w-48 h-48 object-cover shadow-lg" />
                            <h3 className="text-2xl font-bold">Walter Pingo</h3>
                            <p className="text-lg text-gray-600">Jefe de ventas</p>
                            <p className="mt-2">Walter lidera nuestro equipo de ventas, guiándolo y ayudándonos a crecer como empresa.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contactanos */}
            <section className="cta-section bg-blue-600 text-white py-16 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-semibold mb-4">Unite a Nosotros</h2>
                    <p className="text-lg mb-8">Estamos siempre en la búsqueda de personas apasionadas que quieran hacer la diferencia. Si te interesa formar parte de nuestro equipo de ventas o nuestro círculo de prestadores podes contactarnos mediante whatsapp o mail haciendo click debajo. </p>
                    <a href='mailto:broker360business@gmail.com' className='flex justify-center'>
                        <button className="block w-full sm:w-auto border-2 border-white hover:border-white rounded-full px-6 py-3 font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-white hover:bg-white hover:text-blue-400 mt-4">
                            Contáctanos
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
};


export default ConocenosPage