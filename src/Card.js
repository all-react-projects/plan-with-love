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
            <div class="card" style={{width: "18rem"}}>
                <img src={image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h6 class="card-title" style={{color:"green"}}>Rs. {price}</h6>
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">
                        {desc}
                        <span className='readmore' onClick={readmoreHandler}>{readmore ? 'show less': 'read more'}</span>
                    </p>
                    <a class="btn btn-outline-primary" onClick={()=>removeTour(id)}>Not Interested</a>
                </div>
            </div>
        </div>
    )
}
export default Card
