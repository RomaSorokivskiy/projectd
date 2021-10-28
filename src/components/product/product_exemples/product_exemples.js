export default function  Product_Exemples(props){
    return(
        <div className="product__item">
            <img src={props.img} alt="product_img"/>
            <h3>{props.name}</h3>
            <p><a href="#">Learn More</a></p>
        </div>
    )
}
