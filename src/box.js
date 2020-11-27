import React from 'react';

const Box=({item,description})=>{
  return(
    <div className='bg-lightest-blue dim dib pa5 ma5 grow bw2 shadow-5 tc w-20 min-h-100l'>
      <h4 className='h3'>{item}</h4>
      <p className='h3'>{description}</p>
    </div>
  );
}



export default Box;