import React from 'react';

const Box=({item,description})=>{
    return(
        <div className='bg-lightest-blue dim dib pa5 ma5 grow bw2 shadow-5 tc'>
            <h4>{item}</h4>
            <p>{description}</p>
        </div>
    );
}



export default Box;