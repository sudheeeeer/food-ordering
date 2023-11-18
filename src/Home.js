import React, { useContext } from 'react';
import Item from './Item';
import { PostContext } from './context/MyContext';

function Home() {
    const { input, sortDetails, submitSearch, handleInput, handleCart } = useContext(PostContext);


    return (
        <div className='mt-24 text-center'>
            <form className='w-3/6 h-[40px] border border-black m-auto py-2 items-center rounded-full shadow-inner' onChange={submitSearch}>
                <input className='w-5/6 outline-0 font-semibold' type='text' value={input} onChange={handleInput} />
                <button onClick={(e) => e.preventDefault()} className='cursor-pointer' ><i class="fa-solid fa-magnifying-glass" ></i></button>
            </form>
            <h1 className='font-bold text-4xl'>Items</h1>
            <div className='flex flex-wrap justify-center gap-x-20 gap-y-6 mt-4 mb-8'>{sortDetails.map((detail, index) => <Item key={index} detail={detail} handleCart={handleCart} />)}
            </div>


        </div>
    )
}

export default Home;
