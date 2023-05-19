import React, { useState } from 'react'


function Card({id, image, info, price, name}) {

    let [readmore, setReadMore]=useState(false);
    let desc=`${info.substring(0,150)}...`;

    let readmoreHandler = () =>{
        setReadMore(!readmore);
    }

  return (
    <div className=''>
        <div class="card" style={{width: "18rem"}}>
            <img src={image} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h6 class="card-title">Rs. {price}</h6>
                <p class="card-text">
                    {desc}
                    <span className='readmore' onClick={readmoreHandler}>{readmore ? 'show less': 'read more'}</span>
                </p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  )
}
export default Card
