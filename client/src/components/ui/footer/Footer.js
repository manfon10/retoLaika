import React from 'react';
import './Footer-style.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="info_laika">
                    <img src="https://laika.com.co/assets/LAIKA.png  " alt="" />
                    <p>Siguenos en:</p>
                    <div className="footer_icons">
                        <span><i className="fa-brands fa-youtube"></i> <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-facebook"></i> </span>
                    </div>
                </div>
                <div>
                    <h3>ACERDA DE LAIKA</h3>
                    <i className="fa-solid fa-angle-right footer_link"></i>
                    <p>Sobre Laika</p>
                    <p>Servicios</p>
                    <p>Trabaja con nosotros</p>
                    <p>Blog</p>
                    <p>Terminos y condiciones</p>
                </div>
                <div>
                    <h3>LINKS DE INTERÉS</h3>
                    <i className="fa-solid fa-angle-right footer_link"></i>
                    <p>Preguntas frecuentes</p>
                    <p>¿Cómo comprar en Laika?</p>
                    <p>Politica de Privacidad</p>
                    <p>Contáctenos</p>
                    <p>Politicas de Entrega</p>
                </div>
                <div>
                    <h3>INFORMACIÓN</h3>
                    <i className="fa-solid fa-angle-right footer_link"></i>
                    <p>Telefono: 3009108596</p>
                    <p>Servicioclientes@laika.com.co</p>
                    <p>Bogotá D.C, Colombia</p>
                </div>
                <div className="subscribe_laika">
                    <h3>SUBSCRIBETE</h3>
                    <i className="fa-solid fa-angle-right footer_link"></i>
                    <p>recibe noticioas y promociones al insante.</p>
                    <input type="email" className="emailInput" placeholder="Correo Electronico"/>
                    <button><i className="fa-solid fa-angle-right"></i></button>
                    <input type="checkbox" className="checkInput" />
                    <p>He leido y acepto las Politicas de privacidad</p>
                </div>
            </footer>
            <section className="images_footer">
                <div>
                    <img src="https://laika.com.co/assets/laika_vetcare/Mercado_pago.png" alt="" />
                    <img src="https://laika.com.co/assets/laika_vetcare/VISA.png" alt="" />
                    <img src="https://laika.com.co/assets/laika_vetcare/AMERICAN.png" alt="" />
                </div>
                <div>
                    <img src="https://laika.com.co/assets/APP.png  " alt="" />
                    <img src="https://laika.com.co/assets/GOOGLEP.png  " alt="" />
                    <img src="https://laika.com.co/assets/huaweiGallery.png  " alt="" />
                </div>
            </section>
        </>
    );
};

export default Footer;