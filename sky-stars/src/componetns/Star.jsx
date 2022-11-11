import React from 'react';
import './Sky.css';

function Star(props) {
  return (
    <div 
    className="Star__wrapper"
    style={{
      left: props.star.left,
      top: props.star.top,
    }}
    >
      <div className="Star"></div>
    </div>
  );
}

export default Star;