import '../../css/join/join.css'
import footerImg from '../../img/logo_footer.png'

export default Join=>{
    return(
        <div className="join">
            <div className="container">
                <div className="join_text">
                    <h3>We Hope You'll Join Us</h3>
                    <h4>READ MORE ABOUT OUR STORY</h4>
                </div>
                <div className="wtf_this">
                    <img src={footerImg} alt="img"/>
                    <h2>Design Inspires</h2>
                    <p>Build your dream workspace, so you can get your best work done.</p>
                </div>
            </div>
        </div>
    )
}
