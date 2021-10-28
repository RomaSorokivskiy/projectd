

export default function Slider_items(props){
    return(
        <div className="slider_item">
            <img src={props.img} alt="slider_img"/>
            <p className="slider_item__name">{props.name}</p>
            <p className="slider_item_money">{props.money}</p>
        </div>
    )
}
