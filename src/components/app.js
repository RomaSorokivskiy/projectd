import React from 'react';
import goup from '../img/goup.png'
//import components
import Header from './header/header'
import About from './about/about'
import Product from './product/product'
import Office from './office/office'
import Way from './way/way'
import Work from './work/work'
import Join from './join/join'
//Main app of project
export default App =>{
    return(
        <div className="App">
            <Header></Header>
            <About></About>
            <Product></Product>
            <Office></Office>
            <Way></Way>
            <Work></Work>
            <Join></Join>
            <footer>
                <div className="container">
                    <div className="first">
                        <div className="first_wrapper">
                            <div className="opo">
                                <h5><a href="#">Shop</a></h5>
                                <h5 className="mt"><a href="#">About</a></h5>
                                <h5 className="mt"><a href="#">Journal</a></h5>
                                <h5 className="mt"><a href="#">Support</a></h5>
                                <h5 className="mt"><a href="#">COVID-19 info</a></h5>
                                <h5 className="mt"><a href="#">Order Status</a></h5>
                                <h5 className="mt"><a href="#">Corporate Sales</a></h5>
                            </div>
                            <div className="newsletter">
                                <h3>Newsletter Signup</h3>
                                <p>
                                    Sign up to our Newsletter to hear about new product releases,
                                    learn about our design process,
                                    and everything else going on behind the scenes at Grovemade.
                                </p>
                                <div className="hr"></div>
                            </div>
                        </div>
                        <img src={goup} alt="goup"/>
                    </div>
                    <div className="second">
                        <h4>Макет канала @figma2html</h4>
                        <div className="second_wrapper">
                            <h4><a href="#">©2020 Grovemade</a></h4>
                            <h4><a href="#">Terms & Conditions</a></h4>
                            <h4><a href="#">Privacy Policy</a></h4>
                            <h4><a href="#">Site by Department</a></h4>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
