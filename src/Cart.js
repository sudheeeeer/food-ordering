import React, { useContext, useEffect, useState } from 'react';
import CartItem from './CartItem';
import { PostContext } from './context/MyContext';

function Cart() {
    const { cart, handleRemoveCart, quantityDec, quantityInc } = useContext(PostContext);
    const [total, setTotal] = useState();
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setTotal(cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0))
        if (total === 0) setDisplay(false)
        else setDisplay(true)

    }, [cart, total])

    return (
        <div className='p-4 mt-20 md:w-3/5 md:m-auto md:mt-20'>
            {display ?
                <>
                    <ul className='divide-y divide-stone-300'>
                        {cart.map((item) => <CartItem key={item.id} item={item} cart={cart} handleRemoveCart={handleRemoveCart} quantityDec={quantityDec} quantityInc={quantityInc} />)}
                    </ul>
                    <hr></hr>
                    <br></br>
                    <div className='text-lg font-semibold flex justify-around md:text-2xl'>
                        <p>Total :</p>
                        <p className='font-semibold md:font-bold'>{total} /-</p>
                    </div>
                </> : <h3 className='text-center bg-slate-300 rounded-full py-2 text-sm md:text-2xl font-bold'>No items , try to add items into the Cart</h3>
            }

        </div>
    )
}

export default Cart
