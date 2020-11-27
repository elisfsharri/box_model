import React, { useState } from 'react';
import Box from './Box';
import NewBox from './NewBox';
import PopUp from './PopUp';


const App = () => {

  const [seen,setSeen] = useState(false)   
  const [data,setData]=useState([]);
  const [item,setItem]=useState('');
  const [description,setDescription]=useState('');

  const onItemChange = (event) => {
    setItem(event.target.value);
  }

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const onInputSubmit = () => {
    setData(data.concat({item,description}));
    togglePop();
  }

  const togglePop = () => {
    setSeen(!seen);
  }

  const dataArray = data.map((entry,i)=>{
    return <Box key={i} item={data[i].item} description={data[i].description}/>
  })

  return (
    <div>
      {dataArray}
      <NewBox 
        togglePop={togglePop}
      />

      {
        seen 
        ? 
        <PopUp 
          togglePop={togglePop}
          onItemChange={onItemChange}
          onDescriptionChange={onDescriptionChange}
          onInputSubmit={onInputSubmit}
        /> 
        :
        null
      }
    </div>
  )
}

export default App;