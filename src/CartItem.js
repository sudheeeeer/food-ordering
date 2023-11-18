import React from 'react';

function CartItem({ item, handleRemoveCart, quantityDec, quantityInc }) {
    return (

        <div className='flex flex-row items-center gap-4 py-2 md:gap-x-16 md:py-3'>
            <div className='flex flex-col'>
                <img className='w-[100px] md:w-[200px]' src={item.src} alt='image5' />
                <p className='text-sm md:text-lg'>{item.title}</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <p className='text-xs md:text-lg'>Quantity:- </p>
                <button className='text-sm font-semibold bg-slate-200 rounded-full py-1 px-2 md:text-lg' onClick={() => quantityDec(item)}>-</button>
                <p className='text-xs md:text-lg'> {item.qty} </p>
                <button className='text-sm font-semibold bg-slate-200 rounded-full py-1 px-2 md:text-lg' onClick={() => quantityInc(item)}>+</button>
            </div>
            <p className='text-xs md:text-lg'>Price: {item.price * item.qty} /-</p>
            <button onClick={() => handleRemoveCart(item)} className='text-slate-400 md:text-2xl'><i class="fa-solid fa-trash"></i></button>
        </div>
    )
}

export default CartItem
