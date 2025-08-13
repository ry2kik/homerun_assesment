import React, { useContext, useState } from 'react'
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import { CartContext } from '../utils/CartContext';


const Cards = (product) => {
    const { addToCart } = useContext(CartContext);
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState("");
    const { name, image, price } = product;


    const handleAdd = () => {
        setCounter(1);
        setError("");
        addToCart(product)
    }
    const handleIncrement = () => {
        if (counter >= 20) {
            setError("Maximum 20 allowed per order. Please place another order if required.");
        } else {
            setCounter(counter + 1);
            setError("");
        }
    }
    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            setError("");
        } else {
            setCounter(0);
            setError("");
        }
    };

    const incrementByFive = () => {
        if (counter >= 20) {
            setError("Maximum 20 allowed per order. Please place another order if required.");
        } else if (counter + 5 >= 20) {
            setCounter(20);
            setError("Maximum 20 allowed per order. Please place another order if required.");
        } else {
            setCounter(counter + 5);
            setError("");
        }
    }

    const decrementByFive = () => {
        if (counter > 4) {
            setCounter(counter - 5);
            setError("");
        } else {
            setCounter(0);
            setError("");
        }
    }

    return (
        <div className="w-72 shadow p-5 rounded-sm flex flex-col">
            <img src={image} className="rounded h-64 w-full object-cover" alt="The image not found" />
            <h1 className="mt-6 font-bold text-lg">{name}</h1>
            <p className="mt-3 font-light">
                <span className='line-through text-sm'>Rs. { price[0] }</span>
                <span className='ms-4 font-[400]'>Rs. { price[1] }</span>
            </p>
            <div className="flex-grow" />
            <div className="w-full flex flex-col items-center mb-0">
                {counter > 0 ? (
                    <span className='flex items-center text-green-500 border border-green-500 p-2 rounded-md'>
                        <FaAnglesLeft className='mr-1 cursor-pointer' onClick={ decrementByFive } />
                        <FiMinus className='mr-2 cursor-pointer' onClick={handleDecrement} />
                        <span className='mx-2'>{counter}</span>
                        <FiPlus className={`ms-2 ${counter >= 20 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={counter < 20 ? handleIncrement : undefined} />
                        <FaAnglesRight className={`ms-1 ${counter >= 20 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={counter < 20 ? incrementByFive : undefined} />
                    </span>
                ) : (
                    <span className="shadow-md rounded p-2 px-7 text-green-500 font-bold text-lg mt-4 cursor-pointer" onClick={ handleAdd }>Add</span>
                )}
                {error && (
                    <span className="text-red-500 text-xs mt-2">{error}</span>
                )}
            </div>
        </div>
    )
}

export default Cards
