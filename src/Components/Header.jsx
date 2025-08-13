import React, { useContext } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CartContext } from '../utils/CartContext';

const Header = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className='flex justify-center shadow p-5'>
            <div className='flex justify-between items-center max-w-7xl w-full'>
                <p className='font-bold text-3xl text-amber-400'>Shopping Cart</p>
                <span className='relative'>
                    <HiOutlineShoppingBag size={22} className='text-amber-800' />
                    {
                        cart.length > 0 && <span className='absolute -right-1 -bottom-2 bg-green-600 text-[11px] text-white rounded-full w-4 h-4 flex items-center justify-center'>{ cart.length }</span>
                    }
                </span>
            </div>
            
        </div>
    )
}

export default Header
