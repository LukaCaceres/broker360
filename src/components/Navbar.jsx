import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const navigation = [
    { name: 'Inicio', to: '/' },
    { name: 'Prepagas', to: '/prepagas' },
    { name: 'Cotizador', to: '/cotizador' },
    { name: 'Conocenos', to: '/conocenos' },
];

function Navbar() {
    return (
        <Disclosure as="nav" className="bg-black/50 backdrop-blur-[10px] border-b border-gray-500/30">
            {({ open }) => (
                <>
                    <div className="max-w-screen mx-auto w-full px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">

                            {/* Menú móvil */}
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                            {/* Logo a la izquierda con texto Broker 360 */}
                            <NavLink to='/' className="hidden md:flex md:items-center md:space-x-2">
                                <img
                                    src="https://i.postimg.cc/NjCkQtnH/icon-broker.png"
                                    alt="Broker 360 Logo"
                                    className="cursor-pointer h-[3rem] w-[3rem]"
                                    loading='lazy'
                                />
                                <h2 className="text-white font-semibold text-lg cursor-pointer">Broker 360</h2>
                            </NavLink>

                            {/* Navegación centrada */}
                            <div className="hidden sm:block sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.to}
                                            className={({ isActive }) =>
                                                `relative px-3 py-2 rounded-md text-sm font-medium ${isActive
                                                    ? 'text-white underline underline-offset-8 decoration-[3px] decoration-[#bb01ff]' // Fixed underline for active link
                                                    : 'text-gray-300 hover:text-white transition-all duration-300 ease-in-out group' // Animated underline for inactive link
                                                }`
                                            }
                                        >
                                            {item.name}
                                            {!item.isActive && (
                                                <span
                                                    className={`absolute left-0 bottom-[4px] w-full h-[3px] bg-[#8301fe] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-out`}
                                                ></span>
                                            )}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>

                            {/* WhatsApp icon a la derecha */}
                            <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-4">
                                <a href='https://wa.me/3814467349' target="_blank">
                                    <img
                                        src="src/assets/img/logos/whatsapp.webp"
                                        alt="WhatsApp"
                                        className="h-[1.8rem] w-[1.8rem] rounded-full cursor-pointer"
                                        loading='lazy'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Menú móvil */}
                    <Disclosure.Panel className="sm:hidden transition-all ease-in-out duration-500 transform origin-top">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium ${isActive
                                            ? 'text-white underline underline-offset-4 decoration-3 decoration-[#bb01ff]'
                                            : 'text-gray-300 hover:text-white transition-all duration-300 ease-in-out group'
                                        }`
                                    }
                                >
                                    {item.name}
                                    {!item.isActive && (
                                        <span
                                            className={`absolute left-0 bottom-[4px] w-full h-[3px] bg-[#8301fe] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-out`}
                                        ></span>
                                    )}
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;




