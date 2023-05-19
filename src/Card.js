import React, { useState } from 'react'

function Card({id, image, info, price, name, removeTour}) {

    let [readmore, setReadMore]=useState(false);

    //if readmore=true then show full length desc (info) if readmore=false show only limited desc
    let desc= readmore ? info : `${info.substring(0,150)}...`;

    let readmoreHandler=()=>{
        setReadMore(!readmore);
    }
    
    return (
        <div className=''>
            <div className="card" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h6 className="card-title" style={{color:"green"}}>Rs. {price}</h6>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {desc}
                        <span className='readmore' onClick={readmoreHandler}>{readmore ? 'show less': 'read more'}</span>
                    </p>
                    <a className="btn btn-outline-danger" onClick={()=>removeTour(id)}>Not Interested</a>
                </div>
            </div>
        </div>
    )
}
export default Card
