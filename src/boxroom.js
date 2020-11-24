import React from 'react';
import Box from './box';
import {data} from './database';
import Newbox from './newbox';


const Boxroom = () => {
    const dataArray = data.map((item,i)=>{
        return <Box item={data[i].item} description={data[i].description}/>
    })
    return (
        <div>
            {dataArray}
            <Newbox />
        </div>
    )
}

export default Boxroom;