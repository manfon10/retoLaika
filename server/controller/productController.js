const productList = [
    {
        id: 1,
        image: 'https://laikapp.s3.amazonaws.com/dev_images_products/13509_66932_Salvaje_Dieta_Horneada_Natural_Salmon_1618354593_500x500.jpg',
        name: 'Salvaje Dieta Horneada Natural Salmon',
        price: 7000,
        isMember: {
            price: 6035
        },
        weight: '500KG'
    },
    {
        id: 2,
        image: 'https://laikapp.s3.amazonaws.com/dev_images_products/66997_Smartbones_unidad_smartsticks_dental_1622586713_0_500x500.png',
        name: 'Smartbones unidad smartsticks dental',
        price: 4300,
        isMember: {
            price: 3655
        },
        weight: '10KG'
    },
    {
        id: 3,
        image: 'https://laikapp.s3.amazonaws.com/dev_images_products/75699_WOW_CAN_COCINADO_CERDO_300_GR_1645191447_0_500x500.jpg',
        name: 'WOW CAN COCINADO CERDE-300 GR',
        price: 4500,
        isMember: {
            price: 3825
        },
        weight: '300KG'
    },
    {
        id: 4,
        image: 'https://laikapp.s3.amazonaws.com/dev_images_products/4383_145218_Hills___Canine_Treats_Chicken_1647364179_500x500.jpg',
        name: 'Hills - Canine Treats Chicken Especial',
        price: 7000,
        isMember: {
            price: 6035
        },
        weight: '83KG'
    },
    
];

const getProducts = (req, res) => {
    try {
        const products = productList;

        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            status: 'Please validated :('
        });
    }
}

module.exports = { getProducts };