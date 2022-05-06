import React from 'react';
import './IntroCategories-styles.css';

const IntroCategories = () => {
    return (
        <section className="intro_categories">
            <div className="types_buy">
                <div>
                    <img src="https://laika.com.co/assets/home/dog_mc.svg" alt="Perros" />
                    <span>Perro</span>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div>
                    <img src="https://laika.com.co/assets/home/cat_mc_s.svg" alt="Gatos" />
                    <span>Gato</span>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <div className="diferents_types">
                <div>
                    <span>Ofertas</span>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div>
                    <span>Servicios</span>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div>
                    <span>Blog</span>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <div>
                <img src=" https://laika.com.co/assets/laika_vetcare/membership_logo.png " alt="Laika Member" />
            </div>
        </section>
    );
};

export default IntroCategories;