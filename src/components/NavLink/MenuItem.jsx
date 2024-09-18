import React from 'react'

export const MenuItem = [
    { title: 'Home', linked: '/' },
    { title: 'About', linked: '/about' },
    {
        title: 'Inventory',
        submenu: [{ title: 'Inventory Grid' }, { title: 'Inventory List' }, { title: 'Vehicle Details' }, { title: 'Booking Auto' }],
        linked: '/invent'
    },
    {
        title: 'Page',
        submenu: [{ title: 'Shop' }, { title: 'Poduct' }, { title: 'My Account' }, { title: 'Checkout' }, { title: 'Cart' }],
        linked: '/page'
    },
    {
        title: 'News',
        submenu: [{ title: 'Blog Classic' }, { title: 'Blog Grid' }],
        linked: '/news'
    },
    { title: 'Contacts', linked: '/contact' }
]