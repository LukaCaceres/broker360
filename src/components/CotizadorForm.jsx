import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function CotizadorForm() {
    // States
    const [agreed, setAgreed] = useState(false);
    const [active, setActive] = useState('blanco');
    const [nombre, setNombre] = useState('Sueldo');
    const [isValid, setIsValid] = useState(false);

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Recuperación de datos
        const nombres = e.target.nombres.value;
        const apellidos = e.target.apellidos.value;
        const celular = e.target.celular.value;
        const edad = e.target.edad.value;
        const provincia = e.target.provincia.value;
        const hijos = e.target.hijos.value;
        const afiliacion = e.target.afiliacion.value;
        const sueldo = e.target.sueldo?.value;
        const categoria = e.target.categoria?.value;
        const mail = e.target.email.value;
        const pareja = agreed;

        // Validaciones
        if (nombres.length === 0) {
            alert('Debes ingresar tus nombres');
            return;
        } else if (nombres.length < 2) {
            alert('Tu nombre debe tener al menos 2 caracteres');
            return;
        }

        if (celular.length !== 10) {
            alert('El número de celular debe tener 10 dígitos');
            return;
        }

        // Otras validaciones aquí si es necesario

        // Si todas las validaciones pasan
        setIsValid(true);
    };

    const inputClass =
        'w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03a5f7] text-gray-200 focus:bg-white/12 ';

    return (
        <div className="md:shadow-[1px_1px_20px_2px_#03a5f7] max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-black">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Ingresa tus datos</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6 text-gray-200">
                    <div>
                        <label htmlFor="nombres" className="block mb-2 font-medium">Nombres</label>
                        <input type="text" id="nombres" name="nombres" className={inputClass} required minLength='2' maxLength='15' size='15' placeholder='Nombre Ejemplo' />
                    </div>
                    <div>
                        <label htmlFor="apellidos" className="block mb-2 font-medium">Apellidos</label>
                        <input type="text" id="apellidos" name="apellidos" className={inputClass} required minLength='2' maxLength='15' size='15' placeholder='Apellido Ejemplo' />
                    </div>
                    <div>
                        <label htmlFor="celular" className="block mb-2 font-medium">Celular</label>
                        <input type="tel" id="celular" name="celular" className={inputClass} required minLength='10' maxLength='10' size='10' placeholder='3815555555' pattern='[0-9]{10}' />
                    </div>
                    <div>
                        <label htmlFor="edad" className="block mb-2 font-medium">Edad</label>
                        <select id="edad" name="edad" className={inputClass + ' [&>option]:bg-gray-800'} required>
                            <option value="menor-18">Menor de 18</option>
                            <option value="mayor-18">Mayor de 18</option>
                            <option value="mayor-26">Mayor de 26</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="provincia" className="block mb-2 font-medium">Provincia</label>
                        <select id="provincia" name="provincia" className={inputClass + ' [&>option]:bg-gray-800'} required>
                            <option value="tucuman">Tucumán</option>
                            <option value="cordoba">Córdoba</option>
                            <option value="buenos-aires">Buenos Aires</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="hijos" className="block mb-2 font-medium">Hijos*</label>
                        <select name="hijos" id="hijos" className={inputClass + ' [&>option]:bg-gray-800'} required>
                            <option value="0" >0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="afiliacion" className="block mb-2 font-medium">¿Trabajás?</label>
                        <select id="afiliacion" name="afiliacion" className={inputClass + ' [&>option]:bg-gray-800'} required onChange={(e) => {
                            setActive(e.target.value);
                            if (e.target.value === 'blanco') {
                                setNombre('Sueldo');
                            } else if (e.target.value === 'monotributista') {
                                setNombre('Categoría');
                            } else {
                                setNombre('');
                            }
                        }}>
                            <option value="blanco" >Tengo recibo de sueldo</option>
                            <option value="monotributista">Soy monotributista</option>
                            <option value="autonomo">Soy autónomo</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor={nombre} className="block mb-2 font-medium">{nombre}</label>

                        <input type="text" name='sueldo' id='sueldo' className={inputClass + (active === 'blanco' ? ' block' : ' hidden')} pattern='[0-9]{9}' minLength='1' maxLength='9' />

                        <input type="text" name='categoria' id='categoria' className={inputClass + (active === 'monotributista' ? 'block' : 'hidden')} pattern='[A-K]|[a-k]{1}' maxLength='1' minLength='1' />
                    </div>

                </div>
                <div className="w-full">
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-200">Email</label>
                    <input type="email" id="email" name="email" className={inputClass} required minLength='5' maxLength='30' placeholder='ejemplo@gmail.com' />
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="agree"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="h-4 w-4 text-[#03a5f7] focus:ring-[#03a5f7] border-gray-600 rounded"
                    />
                    <label htmlFor="agree" className="font-medium text-gray-200">Quiero afiliarme con mi pareja</label>
                </div>
                <div className="text-gray-400 text-sm">*En caso de querer afiliar más de 3 hijos, elegí el máximo y luego podrás agregar más.</div>
                <NavLink to={isValid ? '/planes' : '#'}>
                    <button
                        type="submit"
                        className="button-cotizar mt-4 w-full px-4 py-2 text-white font-semibold rounded-lg bg-[#03a5f7] hover:bg-[#086594]"
                    >
                        Cotizar
                    </button>
                </NavLink>
            </form>
        </div>
    );
}
