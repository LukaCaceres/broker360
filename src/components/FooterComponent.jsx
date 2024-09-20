import React from 'react';
import '../styles/footer.css';

const FooterComponent = () => {
    return (
        <div className='footer-container w-full h-full flex justify-between items-center p-4'>
            <div className="redes text-white flex flex-col gap-y-2 w-1/3">
                <a className="facebook flex gap-x-2" href='https://www.facebook.com/Brokerdesaludtucuman?mibextid=qi2Omg&rdid=msfA5N2hwUtXR5OE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FJ4ZXg4bR2oC18Wnt%2F%3Fmibextid%3Dqi2Omg'>                
                    <img src='https://i.postimg.cc/Z56PV4rd/facebook.png' alt='facebook' loading="lazy" className='h-[1.5rem]' />
                    <h3>Facebook</h3>
                </a>
                <a className="instagram flex gap-x-2" href='https://www.instagram.com/broker360_/'>
                    <img src='https://i.postimg.cc/5t1BrT3k/instagram.png' alt='instagram' loading="lazy" className='h-[1.5rem]' />
                    <h3>Instagram</h3>
                </a>
                <a className="whatsapp flex gap-x-2" href='https://wa.me/3814467349'>
                    <img src='https://i.postimg.cc/YS36BRD2/whatsapp.png' alt='whatsapp' loading="lazy" className='h-[1.5rem]' />
                    <h3>Whatsapp</h3>
                </a>
            </div>

            {/* Texto de diseño movido a la derecha */}
            <div className="footer-text w-1/3">
                <p className='text-white text-end md:text-center hidden sm:block'>Todos los derechos reservados 2024 Broker 360</p>
            </div>

            {/* Texto de diseñado a la derecha */}
            <div className="designed w-1/3 text-right">
                <p className='text-white'>
                    Diseñado y desarrollado por <a href='https://www.instagram.com/clancy.devsign/' className='text-purple-600 font-semibold'>Clancy DevSign</a>
                </p>
            </div>
        </div>
    );
};

export default FooterComponent;

