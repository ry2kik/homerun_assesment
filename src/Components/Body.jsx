import React from 'react'
import Cards from './Cards'


const Products = [
    {
        id: 1,
        name: 'Hettich Onsys 4447i Soft Close Hinges, 1 Set (2 Nos)',
        image: 'https://home-run.co/cdn/shop/files/Hettich_Onsys_4447i_Soft_Close_Hinges_1_Set_2_Nos_1.webp?v=1747471594&width=990',
        price: ['384', '224']
    },
    {
        id: 2,
        name: 'Hettich InnoTech Tandem Box, Silver, 470mm, 30Kg, Full Set',
        image: 'https://home-run.co/cdn/shop/files/innotech-470mm-silent-silver-30kg_03308b44-0e26-4c7c-a7e9-413cc37d60cb.jpg?v=1742901233&width=990',
        price: ["5,904", '3,065']
    },
    {
        id: 3,
        name: 'Polycab Maxima+ Green Wire HR FR-LSH LF',
        image: 'https://home-run.co/cdn/shop/files/polycabmaximaplusRed.jpg?v=1741528815&width=990',
        price: ['2,225', '1,497']
    },
    {
        id: 4, 
        name: 'Century Sainik 710 BWP Marine Plywood',
        image: 'https://home-run.co/cdn/shop/files/Century_Sainik_710_BWP_Marine_Plywood.webp?v=1740996792&width=990',
        price: ['1,092', '1,602']
    },
    {
        id: 5,
        name: 'Maha PPC Cement, 50 Kg Bag',
        image: 'https://home-run.co/cdn/shop/files/Maha_PPC_Cement_50_Kg_Bag_new.webp?v=1740485717&width=990',
        price: ['320', '370']
    },
    {   
        id: 6,
        name: 'Polycab Maxima+ Green Wire HR FR-LSH LF',
        image: 'https://home-run.co/cdn/shop/files/polycabmaximaplusRed.jpg?v=1741528815&width=990',
        price: ['2,225', '1,497']
    },
];

const Body = () => {
    return (
        <div className='flex justify-center mt-10'>
            <div className='basis-10/12'>
                <div className='flex flex-wrap gap-5'>
                    {
                        Products.map(product => <Cards key = { product.id } {...product} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Body
