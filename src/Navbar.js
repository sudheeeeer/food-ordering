import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PostContext } from './context/MyContext';

function Navbar() {
    const { cart } = useContext(PostContext);
    const [menu, setMenu] = useState(false);
    function handleClick() {
        // setMenu(false)
    }
    function handleMenu() {
        setMenu(!menu)
    }
    return (
        <div className='m-0 fixed top-0 w-full px-5 py-2 bg-cyan-300 flex items-center justify-between md:pr-16'>
            <Link to='/' onClick={handleClick} className='text-black flex items-center gap-x-3'>
                <img className='w-14 rounded-full' src='logo1.png' alt='image1' />
                <span className='text-lg font-bold md:text-3xl'>Food Ordering</span>
            </Link>
            <div className='md:flex md:gap-10'>
                {/* For Mobile */}
                <ul className={menu ? 'md:hidden absolute top-16 left-0 text-center bg-slate-400 w-screen text-slate-300' : 'hidden'}>
                    <NavLink to='/' onClick={handleClick} className={({ isActive }) => (isActive ? 'font-bold text-white ' : '')}><li className='m-2'>Home</li></NavLink>
                    <NavLink to='/about' onClick={handleClick} className={({ isActive }) => (isActive ? 'font-bold text-white' : '')}><li className='m-2'>About</li></NavLink>
                    <NavLink to='/cantact' onClick={handleClick} className={({ isActive }) => (isActive ? 'font-bold text-white' : '')}><li className='m-2'>Contact</li></NavLink>
                </ul>
                {/* For Desktop */}
                <ul className=' hidden md:flex md:text-slate-500'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'bg-slate-400 rounded-xl text-white font-semibold ' : '')}><li className='m-2'>Home</li></NavLink>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'bg-slate-400 rounded-xl text-white font-semibold' : '')} ><li className='m-2'>About</li></NavLink>
                    <NavLink to='/cantact' className={({ isActive }) => (isActive ? 'bg-slate-400 rounded-xl text-white font-semibold' : '')}><li className='m-2'>Contact</li></NavLink>
                </ul>
                <div className='text-white text-2xl'>
                    <button>
                        <NavLink to='/cart'>
                            <p className='relative items-center'><i class="fa-solid fa-cart-shopping"></i>
                                {cart.length > 0 && <p className='absolute top-0 right-[-15%] h-[14px] w-[12px] text-white text-[10px] leading-[2px] bg-slate-600 rounded-full py-[6px]'>{cart.length}</p>}
                            </p>
                        </NavLink>
                    </button>
                    <button className=' md:hidden mx-4' onClick={handleMenu}>{menu ? <>&times;</> : <i class="fa-solid fa-bars"></i>}</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
