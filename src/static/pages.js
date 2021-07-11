const pages = [
    {
        title: 'ColorsOfCode Collection',
        description: "Galería de arte de los productos de marca de SoftDevs. Acá podrán ver los diseños desplegados y a desplegar.",
        imageUrl: 'https://i.ibb.co/T1cVVj3/COC.png',
        direction: 'left',
        buttonTitle: 'Go galery',
        startIcon: "HomeIcon",
        href: "http://colorsofcodecollection.netlify.app",
        time: 1500,
    },
    {
        title: 'SoftDevs Shop',
        description: "Todo el equipo que necestirarás para ser el programador más poderoso de todos los tiempos. Compra algo de nuestra tienda para que aumentes el poder en tus lineas de código.",
        imageUrl: process.env.PUBLIC_URL + '/assets/SDShopBanner.png',
        direction: 'right',
        buttonTitle: 'Go Shop',
        startIcon: "ShoppingCartIcon",
        href: "http://sdshop.netlify.app",
        time: 1500,
    },
]

export default pages;