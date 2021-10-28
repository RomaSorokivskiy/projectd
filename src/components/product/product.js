import '../../css/productStyle/productStyle.css'
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import phone from '../../img/phone.png'
import laptop from '../../img/laptop.png'
import tablet from '../../img/tablet.png'
import monitor from '../../img/monitor.png'
import ProductE from '../product/product_exemples/product_exemples'
import SliderItem from '../product/slider_item/slider_items'

export default Product =>{

    return(
        <div className="product">
            <div className="container">
                <div className="product__text">
                    <h2>Design Inspires</h2>
                    <p>Build your dream workspace, so you can get your best work done.</p>
                    <h4>GET STARTED</h4>
                </div>
                <div className="product_exemples">
                    <ProductE
                        img={img1}
                        name="Desk Pads"
                    />
                    <ProductE
                        img={img2}
                        name="Laptop Stands"
                    />
                </div>
                <div className="featuredProducts__text">
                    <h2>Featured Products</h2>
                    <p>See What’s Trending Right Now</p>
                </div>
                <div className="buttons">
                    <div className="buttons_wrapper">
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className="slider" >
                    <SliderItem
                    img={monitor}
                    name="Walnut MagSafe Stand"
                    money="$120"
                    />
                    <SliderItem
                        img={laptop}
                        name="Walnut Laptop Riser"
                        money="$150"
                    />
                    <SliderItem
                        img={tablet}
                        name="Walnut iPad Stand"
                        money="$80"
                    />
                    <SliderItem
                        img={monitor}
                        name="Walnut MagSafe Stand"
                        money="$100"
                    />
                    <SliderItem
                        img={laptop}
                        name="Walnut Laptop Riser"
                        money="$120"
                    />
                </div>
            </div>
        </div>
    )
}
