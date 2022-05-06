import React from 'react';
import { Header, IntroCategories, Carrusel, Categories, Brands, Footer } from '../components/ui/';
import PostProduct from '../components/posts/post-products/PostProduct';

const Home = () => {
    return (
        <main>
            <Header />
            <IntroCategories />
            <Carrusel />
            <Categories />
            <Brands />
            <PostProduct />
            <Footer />
        </main>
    );
};

export default Home;