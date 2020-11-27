import React, { useState } from "react";
import PopUp from "./PopUp";

const NewBox = () => {
  
  const [seen,setSeen] = useState(false)

  const toggleOn = () => {
    setSeen(true);
  };

  return (
    <div onClick={toggleOn}>
        <div className='bg-lightest-blue dim dib pa5 ma5 grow bw2 shadow-5 tc w-20 min-h-100l'>
            <h1 className='f-headline lh-solid yellow'>+</h1>
        </div>
        {seen ? <PopUp toggle={toggleOn} /> : null}
    </div>
  );
}


export default NewBox;