import React from 'react';
import './Categories-style.css';

const Categories = () => {
    return (
        <article className="container_categories">
            <h2>Categorias</h2>
            <div>
                <div>
                    <i className="fa-solid fa-bowl-food"></i>
                    <span>Alimento</span>
                </div>
                <div>
                    <i className="fa-solid fa-bone"></i>
                    <span>Snacks</span>
                </div>
                <div>
                    <i className="fa-solid fa-house-medical"></i>
                    <span>Farmapet</span>
                </div>
                <div>
                    <i className="fa-solid fa-soap"></i>
                    <span>Cuidado e Higiene</span>
                </div>
                <div>
                    <i className="fa-solid fa-baseball"></i>
                    <span>Juguetes</span>
                </div>
                <div>
                    <i className="fa-solid fa-ring"></i>
                    <span>Accesorios</span>
                </div>
                <div>
                    <i className="fa-solid fa-shield-dog"></i>
                    <span>Para PetLovers</span>
                </div>
            </div>
        </article>
    );
};

export default Categories;