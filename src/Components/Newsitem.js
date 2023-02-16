import React, { Component } from 'react'

export class Newsitem extends Component {
    
    render() {
        let {title,imgurl,newsurl,cardcolr,txtcolr} = this.props;
        return (
            <div>
                <div className={`card my-3 bg-${cardcolr} text-${txtcolr}`} style={{width: "18rem"}}>
                    <img src={imgurl?imgurl:"https://live-production.wcms.abc-cdn.net.au/4273843cf270710bb72e589d6c8581b3?impolicy=wcms_crop_resize&cropH=1458&cropW=2592&xPos=0&yPos=243&width=862&height=485"} className="card-img-top" style={{height: "13rem"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">...</p>
                        <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Newsitem