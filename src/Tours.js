import React from 'react'
import Card from './Card';

export default function Tours({tours, removeTour}) {

    // let {tour}=props.tour;

  return (
   <div className="container">
        <div className='cards'>
            {
              tours.map((tour) => {
                  return <Card key={tour.id} {...tour} removeTour={removeTour}></Card> //passing tour object copy/cloning
              })
            }
      </div>
   </div>
  )
}
