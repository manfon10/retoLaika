import React from 'react';
import './Brands-style.css';

const Brands = () => {
    return (
        <section className="container_brands">
            <h2>Marcas estacadas</h2>
                <div>
                    <div>
                        <img src="https://laikapp.s3.amazonaws.com/dev_images_categories/GUAU_MOR_CIRCULO1.png" alt="" />
                    </div>
                    <div>
                        <img src="https://s3.us-east-1.amazonaws.com/laikapp/images_categories/total_max_circulo2.png" alt="" />
                    </div>
                    <div>
                        <img src="https://laikapp.s3.amazonaws.com/dev_images_categories/hills_circulo4.png" alt="" />
                    </div>
                    <div>
                        <img src="https://s3.us-east-1.amazonaws.com/laikapp/images_categories/EQUILIBRIO_CIRCULO2.png" alt="" />
                    </div>
                    <div>
                        <img src="https://laikapp.s3.amazonaws.com/images_categories/1588258126_WHOLE_BARF_981X980.png" alt="" />
                    </div>
                    <div>
                        <img src="https://laikapp.s3.amazonaws.com/dev_images_categories/1592410196_SALVAJE_FOOD_SAS__1226X1028.PNG" alt="" />
                    </div>
                </div>
        </section>
    );
};

export default Brands;