const pages = [
    {
        title: 'ColorsOfCode Collection',
        description: "Galería de arte de los productos de marca de SoftDevs, acá podrán ver los diseños desplegados y a desplegar.",
        imageUrl: process.env.PUBLIC_URL + '/assets/ColorsOfCode.png',
        direction: 'left',
        buttonTitle: 'Go galery',
        startIcon: "HomeIcon",
        href: "http://colorsofcodecollection.netlify.app",
        time: 1500,
    },
    {
        title: 'SoftDevs Shop',
        description: "All the equipment you will need to become the most powerful developer of all time. Buy something in our store to develop with more power.",
        imageUrl: process.env.PUBLIC_URL + '/assets/SDShopBanner.png',
        direction: 'right',
        buttonTitle: 'Go Shop',
        startIcon: "ShoppingCartIcon",
        href: "http://sdshop.netlify.app",
        time: 1500,
    },
]

export default pages;