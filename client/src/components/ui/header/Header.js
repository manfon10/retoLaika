import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from '@fortawesome/free-solid-svg-icons';
import CO from '../../../assets/images/Header/colombia.png';
import './Header-styles.css';

const Header = () => {

    return (
        <>
            <div className="social_media">
                <div>
                    <span className="underlined"><FontAwesomeIcon icon={faShield}/> Compras segurdad online</span>
                    <span className="underlined"><i className="fa-solid fa-handshake"></i> Pago Contra Entrega</span>
                    <span className="underlined"><i className="fa-solid fa-truck-fast"></i> Entregas el mismo dia</span>
                </div>
                <div>
                    <span className="underlined">llámanos <i class="fa-solid fa-square-phone"></i></span>
                    <span>3009108496</span>
                    <span style={{ marginLeft: '30px'}}>Escribenos</span>
                    <span><i className="fa-brands fa-youtube"></i> <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-facebook"></i> </span>
                </div>
            </div>
            <nav className="navbar_laika">
                <i className="fa-solid fa-bars menuRes"></i>
                <div>
                    <img src="https://laika.com.co/assets/home/LaikaMascotas.svg" alt="Laika Logo" />
                    <div className="form_search">
                        <form>
                            <input type="text" placeholder="Encuentra lo mejor para tu mascota."/>
                            <button><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div className="form_city">
                        <form>
                            <img src={CO} alt="Colombia" />
                            <select>
                                <option value="BOG">BOG</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="info_user">
                        <i className="fa-regular fa-user"></i>
                        <span>Mi cuenta</span>
                    </div>
                    <div className="cart">
                        <span>0</span>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;