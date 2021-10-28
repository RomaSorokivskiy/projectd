import '../../css/work/workStyle.css'

import Workrender from "./work_render";
export default Work=>{
    return(
        <div className="work">
            <div className="container">
                <div className="work__text">
                    <h3>Make Work Meaningful</h3>
                    <p>We're here because we believe that your work deserves the best. A team that loves working together is the magic that makes it all happen.</p>
                </div>
                <Workrender></Workrender>
            </div>
        </div>
    )
}
