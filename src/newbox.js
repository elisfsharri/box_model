import React from "react";

const NewBox = ({togglePop}) => {

  return (
    <div 
      onClick={togglePop} 
      className='box dim grow bw2 shadow-5'>
        <h1 className='f-headline lh-solid yellow'>+</h1>
    </div>
  )
}

export default NewBox;