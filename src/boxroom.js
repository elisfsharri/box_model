import React from 'react';
import Box from './Box';
import {Data} from './DataBase';
import NewBox from './NewBox';


const BoxRoom = () => {
    const DataArray = Data.map((item,i)=>{
        return <Box item={Data[i].item} description={Data[i].description}/>
    })
    return (
        <div>
            {DataArray}
            <NewBox />
        </div>
    )
}

export default BoxRoom;