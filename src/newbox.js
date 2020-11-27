import React from "react";

const NewBox = ({togglePop}) => {

  return (
    <div onClick={togglePop}>
        <div className='bg-lightest-blue dim dib pa5 ma5 grow bw2 shadow-5 tc w-20 min-h-100l'>
            <h1 className='f-headline lh-solid yellow'>+</h1>
        </div>
    </div>
  );
}


export default NewBox;