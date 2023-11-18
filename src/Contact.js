import React from 'react';

function Contact() {
    return (
        <div className='mt-24'>
            <p className='text-center md:text-left px-12 text-xl font-bold uppercase underline md:font-extrabold md:text-2xl'>Contact Details</p>
            <div className=' my-6 flex flex-wrap md:text-2xl text-white font-semibold' >
                <div className='contact_div'>
                    <p>Name: <span className='contact_details'>Sudheer</span></p>
                    <p>Mobile.No: <span className='contact_details'>9999999999</span></p>
                    <p>Position: <span className='contact_details'>Manager</span></p>
                </div>
                <div className='contact_div'>
                    <p>Name: <span className='contact_details'>Vijay</span></p>
                    <p>Mobile.No: <span className='contact_details'>9999999999</span></p>
                    <p>Position: <span className='contact_details'>M.D</span></p>
                </div>
                <div className='contact_div'>
                    <p>Name: <span className='contact_details'>Vamshi</span></p>
                    <p>Mobile.No: <span className='contact_details'>9999999999</span></p>
                    <p>Position: <span className='contact_details'>Reception</span></p>
                </div>
            </div>
        </div>
    )
}

export default Contact
