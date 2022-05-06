import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import './ButtonImage-style.css';

const ButtonImage = ({ images, position }) => {

    return (
        <div className="container_button">
            {
                images.map( imageLenght => (
                    <FontAwesomeIcon 
                        icon={faCircle} 
                        color={ imageLenght === images[position] ? '#603e85' : '#80808093' } 
                        onClick={() => console.log(':)')}
                        key={imageLenght.id}
                    />
                ))
            }
        </div>
    );
};

export default ButtonImage;