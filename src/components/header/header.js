import React from 'react';

//StyleSheet
import '../../css/headerStyle/headerStyle.css'
//img import
import logo from '../../img/logo.png'

//render Header
export default Header=>{
    return(
        <header>
            <div className="container">
                <div className="header_wrapper">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#">Shop</a></li>
                        <li className="nav__item"><a href="#">Explore</a></li>
                    </ul>
                    <a href="#"><img src={logo} alt="logo"/></a>
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#">My Cart</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
