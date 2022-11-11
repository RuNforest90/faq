import React, { useState } from 'react';
import Moon from './Moon';
import './Sky.css';
import Star from './Star';

function Sky() {
  const [stars, setStars] = useState([]);

  const changeSky = (event) => {
    console.log(event)
    const newStars = stars 
    newStars.push({
      left: event.pageX-6,
      top: event.pageY-6,
    })
    setStars([...newStars])
  }

  return (
    <div className="Sky" onClick={event => changeSky(event)}>
      < Moon />
      {stars.map((star, index) => (
        < Star star={star} key={index}/>
      ))}
    </div>
  ); 
}

export default Sky;
