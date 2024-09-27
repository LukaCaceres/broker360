import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CotizadorForm() {

    const navigate = useNavigate(); // Hook para navegar

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

        // Validaciones
        if (!nombres || nombres.length < 2 || nombres.length > 15) {
            alert('El nombre debe tener entre 2 y 15 caracteres.');
            return;
        }

        if (!apellidos || apellidos.length < 2 || apellidos.length > 15) {
            alert('El apellido debe tener entre 2 y 15 caracteres.');
            return;
        }

        if (!celular || celular.length !== 10) {
            alert('El número de celular debe tener exactamente 10 dígitos.');
            return;
        }

        if (!mail.includes('@') || mail.length > 30) {
            alert('Ingresa un correo electrónico válido.');
            return;
        }

        if (active === 'blanco' && (!sueldo || sueldo.length < 1 || sueldo.length > 13)) {
            alert('El sueldo debe tener entre 1 y 10 dígitos, con opcionalmente dos decimales.');
            return;
        }

        if (active === 'monotributista' && (!categoria || categoria.length !== 1)) {
            alert('La categoría debe ser una letra entre A y K.');
            return;
        }

        // Si todas las validaciones pasan, guardamos los datos en el localStorage
        const formData = {
            nombres,
            apellidos,
            celular,
            edad,
            provincia,
            hijos,
            afiliacion,
            sueldo,
            categoria,
            mail,
            pareja
        };

        // Guardar los datos en el localStorage
        localStorage.setItem('cotizadorData', JSON.stringify(formData));

        
        setIsValid(true);
        navigate('/planes'); // Redirigir a '/planes' después de validaciones correctas
    };



    const inputClass =
        'w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03a5f7] text-gray-200 focus:bg-white/12 ';

    return (
        <div className="md:shadow-[1px_1px_20px_2px_#03a5f7] max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-black">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Ingresa tus datos</h2>
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                <div className="grid grid-cols-2 gap-6 text-gray-200">
                    {/* Nombres */}
                    <div>
                        <label htmlFor="nombres" className="block mb-2 font-medium">Nombres</label>
                        <input
                            type="text"
                            id="nombres"
                            name="nombres"
                            className={inputClass}
                            required
                            pattern="^[A-Za-z\s]{2,15}$"
                            maxLength="15"
                            placeholder="Nombre Ejemplo"
                            title="Introduce entre 2 y 15 letras"
                            onInput={(e) => {
                                // Filtrar para permitir solo letras de la A a la Z (mayúsculas o minúsculas)
                                e.target.value = e.target.value.replace(/[^A-Za-z]/g, '');
                            }}
                            autoComplete="off"
                        />
                    </div>

                    {/* Apellidos */}
                    <div>
                        <label htmlFor="apellidos" className="block mb-2 font-medium">Apellidos</label>
                        <input
                            type="text"
                            id="apellidos"
                            name="apellidos"
                            className={inputClass}
                            required
                            pattern="^[A-Za-z\s]{2,15}$"
                            maxLength="15"
                            placeholder="Apellido Ejemplo"
                            title="Introduce entre 2 y 15 letras"
                            onInput={(e) => {
                                // Filtrar para permitir solo letras de la A a la Z (mayúsculas o minúsculas)
                                e.target.value = e.target.value.replace(/[^A-Za-z]/g, '');
                            }}
                            autoComplete="off"
                        />
                    </div>

                    {/* Celular */}
                    <div>
                        <label htmlFor="celular" className="block mb-2 font-medium">Celular</label>
                        <input
                            type="tel"
                            id="celular"
                            name="celular"
                            className={inputClass}
                            required
                            maxLength="10"
                            pattern="\d{10}"
                            placeholder="3815555555"
                            title="Número de celular de 10 dígitos"
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, ''); // Limita a solo números
                            }}
                            autoComplete="off"
                        />
                    </div>

                    {/* Edad */}
                    <div>
                        <label htmlFor="edad" className="block mb-2 font-medium">Edad</label>
                        <select id="edad" name="edad" className={inputClass + ' [&>option]:bg-gray-800'} required autoComplete="off">
                            <option value="menor-18">Menor de 18</option>
                            <option value="mayor-18">Mayor de 18</option>
                            <option value="mayor-26">Mayor de 26</option>
                        </select>
                    </div>

                    {/* Provincia */}
                    <div>
                        <label htmlFor="provincia" className="block mb-2 font-medium">Provincia</label>
                        <select id="provincia" name="provincia" className={inputClass + ' [&>option]:bg-gray-800'} required autoComplete="off">
                            <option value="tucuman">Tucumán</option>
                            <option value="cordoba">Córdoba</option>
                            <option value="buenos-aires">Buenos Aires</option>
                        </select>
                    </div>

                    {/* Hijos */}
                    <div>
                        <label htmlFor="hijos" className="block mb-2 font-medium">Hijos*</label>
                        <select name="hijos" id="hijos" className={inputClass + ' [&>option]:bg-gray-800'} required autoComplete="off">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    {/* Afiliación */}
                    <div>
                        <label htmlFor="afiliacion" className="block mb-2 font-medium">¿Trabajás?</label>
                        <select id="afiliacion" name="afiliacion" className={inputClass + ' [&>option]:bg-gray-800'} required autoComplete="off" onChange={(e) => {
                            setActive(e.target.value);
                            setNombre(e.target.value === 'blanco' ? 'Sueldo' : e.target.value === 'monotributista' ? 'Categoría' : '');
                        }}>
                            <option value="blanco">Tengo recibo de sueldo</option>
                            <option value="monotributista">Soy monotributista</option>
                            <option value="autonomo">Soy autónomo</option>
                        </select>
                    </div>

                    {/* Sueldo o Categoría */}
                    <div>
                        <label htmlFor={nombre} className="block mb-2 font-medium">{nombre}</label>

                        <input
                            type="text"
                            name="sueldo"
                            id="sueldo"
                            className={`${inputClass} ${active === 'blanco' ? 'block' : 'hidden'}`}
                            pattern="^\d{1,10}(,\d{1,2})?$"
                            maxLength="13"
                            title="Introduce un número con hasta 10 dígitos y opcionalmente dos decimales separados por coma"
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^\d,]/g, ''); // Limitar solo a números y coma
                            }}
                            placeholder="12345,67"
                            autoComplete="off"
                        />

                        <input
                            type="text"
                            name="categoria"
                            id="categoria"
                            className={inputClass + (active === 'monotributista' ? 'block' : 'hidden')}
                            maxLength="1"
                            placeholder="A-K"
                            title="Introduce una letra entre la A y la K"
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^A-Ka-k]/g, '');
                            }}
                            autoComplete="off"
                        />

                    </div>
                </div>

                {/* Email */}
                <div className="w-full">
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-200">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={inputClass}
                        required
                        maxLength="30"
                        placeholder="ejemplo@gmail.com"
                        title="Correo electrónico válido con @"
                        autoComplete="off"
                    />
                </div>

                {/* Checkbox para afiliarse con pareja */}
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

                {/* Botón de envío */}
                <button
                    type="submit"
                    className="button-cotizar mt-4 w-full px-4 py-2 text-white font-semibold rounded-lg bg-[#03a5f7] hover:bg-[#086594]"
                >
                    Cotizar
                </button>
            </form>

        </div>
    );
}
