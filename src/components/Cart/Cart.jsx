import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteProductFromCart} from './../../redux/actions/actions';


const Cart = (props) => {


    const cartItems = useSelector(state => state.carts.cartITems)
    const dispatch = useDispatch();
    const onBackClick = () => {
        props.history.goBack();
    }
    const onDeleteClick = (id) => {
        debugger
        let newCartItems = cartItems.filter((item) => item.id !== id);
        dispatch(deleteProductFromCart(newCartItems));
    }
    return (
        <div className='container'>

            {
                cartItems.length ?
                cartItems.map((item) => (
                    <div className='row cart' key={item.id}>
                        <div className='col-2'>{item.title}</div>
                        <div className='col-2'>
                            <img className='small__img' src={item.img} alt={item.title}/>
                        </div>
                        <div className='col-2'>{item.price}</div>
                        <div className='col-2'>{item.count}</div>
                        <div className='col-1'>
                            <button className='btn btn-success'>-</button>
                        </div>
                        <div className='col-1'>
                            <button className='btn btn-success'>+</button>
                        </div>
                        <div className='col-1'>
                            <button onClick={() => onDeleteClick(item.id)} className='btn btn-danger'>&times;</button>
                        </div>
                        
                    </div>
                ))
                :
                <>
                <h3>There is not any items in the cart</h3>
                    <Link to='/' className='back__btn'><p >back to products</p></Link>
                </>
            }
        </div>
    )
}

export default Cart
