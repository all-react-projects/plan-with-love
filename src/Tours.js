import React from 'react'
import Card from './Card';

export default function Tours({tours}) {

    // let {tour}=props.tour;

  return (
   <div className="container">
        <div className='cards'>
            {
              tours.map((tour) => {
                  return <Card {...tour}></Card> //passing tour object copy/cloning
              })
            }
      </div>
   </div>
  )
}
