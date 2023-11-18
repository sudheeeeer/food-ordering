import React from 'react';

function About() {
    return (
        <div className='flex flex-col md:flex-row items-center w-full mt-16 gap-x-20 bg-black md:px-32 px-10 gap-4 py-12'>
            <img className='w-[250px] md:w-[300px] rounded-2xl' src='chefimg.jpg' alt='image2' />
            <div>
                <h1 className='text-xl font-bold text-white'>Welcome !</h1>
                <article className='text-2xl font-bold text-slate-500'>
                    There are many variaties in Pizzas,Donuts
                    Burgers.We are serving with the budget low
                    prices also we aimed Quality food too.
                </article>
            </div>
        </div>
    )
}

export default About
