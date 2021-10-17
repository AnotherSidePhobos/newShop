import React from 'react';
import {Link} from 'react-router-dom';
import {BsCartFill} from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cartItems = useSelector(state => state.carts.cartITems)

    debugger

    let commonCount = () => {
        let comAm = 0;
        cartItems.map((item) => (
            comAm += item.count
        ))
        return comAm;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
                <a className="navbar-brand" href="/">Sneakers Shop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">Contacts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart"><BsCartFill/><span className='cart__items-length'>{commonCount() > 0 ? commonCount() : ""}</span></Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
