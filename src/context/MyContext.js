import React, { createContext, useEffect, useReducer } from 'react';
import { details } from '../Details';

const PostContext = createContext('');
function PostProvider({ children }) {
    const initVal = {
        input: "",
        loading: '',
        details: [],
        sortDetails: [],
        cart: [],
        message: ''
    };
    function reducer(state, action) {
        switch (action.type) {
            case 'Input':
                return { ...state, input: action.payload }
            case 'getDetails':
                return { ...state, details: action.payload, sortDetails: action.payload }
            case 'getSortDetails':
                return { ...state, sortDetails: state.details.filter((detail) => detail.title.toLowerCase().includes(action.payload.toLowerCase())) }
            case 'allDetails':
                return { ...state, sortDetails: state.details }
            case 'add_cart':
                return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
            case 'remove_cart':
                return { ...state, cart: state.cart.filter((c) => c.id !== action.payload.id) }
            case 'cart_quantityInc':
                return { ...state, cart: state.cart.filter(c => c.id === action.payload.id ? c.qty += 1 : c.qty) }
            case 'cart_quantityDec':
                console.log(state.cart);
                return { ...state, cart: state.cart.filter(c => c.id === action.payload.id ? c.qty -= 1 : c.qty) }
            case 'message':
                return { ...state, message: action.payload }
            default:
                throw new Error("unknown")
        }
    }

    const [{ input, sortDetails, cart, message }, dispatch] = useReducer(reducer, initVal)
    console.log(cart)
    function submitSearch(e) {
        e.preventDefault();
        dispatch({ type: 'getSortDetails', payload: e.target.value })
        if (e.target.value === '') dispatch({ type: 'allDetails' })
    }
    function handleInput(e) {
        dispatch({ type: 'Input', payload: e.target.value })
    }
    function handleCart(detail) {
        if (cart.some((c) => c.id === detail.id)) return dispatch({ type: 'message', payload: 'Already added' });
        dispatch({
            type: 'add_cart', payload: detail
        })
        dispatch({ type: 'message', payload: 'Item Added Successfully' })
    }

    function handleRemoveCart(item) {
        dispatch({ type: 'remove_cart', payload: item })
    }
    function quantityInc(i) {
        dispatch({ type: 'cart_quantityInc', payload: i })
    }
    function quantityDec(i) {
        dispatch({ type: 'cart_quantityDec', payload: i })
    }

    useEffect(() => {
        (async () => {
            dispatch({ type: 'getDetails', payload: details })
        })();
    }, []);
    return (
        <PostContext.Provider value={{ input, sortDetails, cart, message, submitSearch, handleCart, handleInput, handleRemoveCart, quantityDec, quantityInc }}>
            {children}
        </PostContext.Provider>
    )
}

export { PostProvider, PostContext };
