import React from 'react'

function Footer() {
    return (
        <div className='flex flex-col justify-center text-white bg-gray-500 md:pt-8 '>
            <div className='flex flex-col px-10 py-4 gap-4 md:px-36 md:flex-row md:gap-x-20'>
                <div className='md:basis-1/2 flex flex-col mb-2'>
                    <p className='footerHead'>Contact us</p>
                    <p>Location</p>
                    <p>Call +91 9999999999</p>
                    <p>foodOrdering@gmail.com</p>
                </div>
                <div className='md:basis-1/2 flex flex-col mb-2'>
                    <p className='footerHead'>FoodOrdering</p>
                    <p>Necessary,making this the first true generator on the internet. It uses a dictionary of over 200 Ltin words, combined with</p>
                    <p>Logos</p>
                </div>
                <div className='md:basis-1/2 flex flex-col mb-2'>
                    <p className='footerHead'>Opening hours</p>
                    <p>Everyday</p>
                    <p>10.00 Am - 10.00 Pm</p>
                </div>
            </div>
            <p className='text-center text-slate-300 bg-black p-2'>@copyrights</p>
        </div>
    )
}

export default Footer

