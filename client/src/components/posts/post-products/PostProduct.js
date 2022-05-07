import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';

const PostProduct = () => {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        axios.get('https://laikaapi.herokuapp.com/api/v1/products')
            .then( res => setProducts(res.data.products));
    }, []);

    return (
        <section className="container_product">
            <h3>Favoritos Laika</h3>
            <div className="container_product_list">
                {
                    products.map( product => <PostList product={product} key={product.id}/> )
                }
            </div>
        </section>
    );
};

export default PostProduct;