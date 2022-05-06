import React from 'react';
import './Product-style.css';

const PostList = ({ product }) => { 

    console.log(product)

    return (
        <div className="product_list">
            <img src={product.image} alt="" />
            <p style={{ fontweight: 'bold' }}>{product.name}</p>
            <p>$ {product.price}</p>
            <p style={{ color: 'red' }}>$ {product.isMember.price} <img src="https://laika.com.co/assets/laikamemeber.svg" alt="" /> <button>ADQUIERELA YA</button></p>
            <span>{product.weight}</span>
            <button><i className="fa-solid fa-cart-shopping"></i> Añadir al carrito</button>
        </div>
    );
};

export default PostList;