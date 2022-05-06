import React, { useState, useEffect } from 'react';
import ButtonImage from '../buttonImage/ButtonImage';
import './Carrusel-style.css';

const Carrusel = () => {

    const [ position, setPosition ] = useState(0);

    const images = [
        {
            id: 1,
            image: 'https://laikapp.s3.amazonaws.com/dev_images_banners/1649287314BANNER_MARCAS_COLOMBIA.jpg',
            name: 'Image 1'
        },
        {
            id: 2,
            image: 'https://laikapp.s3.amazonaws.com/dev_images_banners/1651535369MicrosoftTeams-image%20%2835%29.png ',
            name: 'Image 2'
        },
        {
            id: 3,
            image: 'https://laikapp.s3.amazonaws.com/dev_images_banners/165159674820220502-ALL-ALL-RET-BAN-ALL-Agrega-a-Mascota%20%281%29.jpg',
            name: 'Image 3'
        },
        {
            id: 4,
            image: 'https://laikapp.s3.amazonaws.com/dev_images_banners/1651528596banner%20%282%29.jpg',
            name: 'Image 3'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (position === images.length - 1) {
                setPosition(0);
            } else {
                setPosition(position + 1);
            }
        }, 6000)
        return () => clearInterval(interval);
    }, [position]);

    const width = {
        width: images.length * 100 + '%',
        transform: `translateX(-${(position - 1) * 100 / images.length}%)`,
        transition: '0.5s'
    };

    return (
        <div style={{ overflow: 'hidden'}}>
            <section className="flex" style={width}>
                {
                    images.map( ({ id, image, name }) => (
                        <div key={id} className="container_images">
                            <img src={image} alt="name" />
                        </div>
                    ))
                }
            </section>
            <ButtonImage 
                images={images}
                setPosition={setPosition}
                position={position}
            />
        </div>
    );
};

export default Carrusel;