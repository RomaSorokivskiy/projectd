import '../../css/way/way.css'
import img_office from '../../img/office.png'


export default Way =>{
    return(
        <div className="way">
            <div className="container">
                <div className="way__text">
                    <h3>Made The Hard Way</h3>
                    <p>
                        Our signature craftsmanship has been honed over a decade of manufacturing innovation here in Portland, Oregon.
                        We combine the skills of our small in-house team with the collective strength of
                        collaborators throughout the US to deliver quality products worth investing in.
                    </p>
                    <img src={img_office} alt="office"/>
                </div>
            </div>
        </div>
    )
}
