import React from 'react';

function Item({ detail, handleCart }) {
    return (
        <div className='bg-slate-950 text-white rounded-3xl p-2 flex flex-col items-center py-4 shadow-2xl shadow-slate-950/150'>
            <img className='w-[250px] h-[170px] md:h-[200px] md:w-[270px] rounded-xl' src={detail.src} alt={detail.title} />
            <div className='w-full text-left flex justify-between px-4 py-4 items-end'>
                <div>
                    <p className='font-semibold uppercase'>{detail.title}</p>
                    <p className='text-slate-300'>Price : {detail.price}</p>
                </div>
                <button className='text-black bg-white rounded-full p-1 text-lg' onClick={() => handleCart(detail)}><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
            <div>
                <p className='text-gray-500 text-sm md:text-base'>{detail.description}</p>
            </div>
        </div>
    )
}

export default Item;
