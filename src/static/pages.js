const pages = [
    {
        title: 'SoftDevs Home',
        description: "Welcome to SoftDevs, a community in which you enter and automatically become part of the collective intelligence that will defeat artificial intelligences. Taaaake a coffee and come to program with us. ",
        imageUrl: process.env.PUBLIC_URL + '/assets/ComingSoonBanner.png',
        direction: 'left',
        buttonTitle: 'Go Home',
        startIcon: "HomeIcon",
        time: 1500,
    },
    {
        title: 'SoftDevs Shop',
        description: "All the equipment you will need to become the most powerful developer of all time. Buy something in our store to develop with more power.",
        imageUrl: process.env.PUBLIC_URL + '/assets/SDShopBanner.jpg',
        direction: 'right',
        buttonTitle: 'Go Shop',
        startIcon: "ShoppingCartIcon",
        time: 1500,
    },
]

export default pages;