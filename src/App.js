import React, {useState} from 'react'
import Box from './Box'
import NewBox from './NewBox'
import PopUp from './PopUp'


const App = () => {

  const [seen,setSeen] = useState(false)   
  const [data,setData]=useState([])
  const [item,setItem]=useState('')
  const [description,setDescription]=useState('')
  const [formRequest,setFormRequest] = useState('')


  const onItemChange = (event) => {
    setItem(event.target.value)
  }

  const onDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  var isValid = true

  const onInputSubmit = () => {
    if (item === '') {
      isValid = false
    }
    if (isValid) {
      setData(data.concat({item,description}))
      togglePop()
      setFormRequest('')
    }
    else {
      setFormRequest('Item must not be empty')
    }
  }

  const togglePop = () => {
    setSeen(!seen)
    setItem('')
    setDescription('')
  }

  const dataArray = data.map((entry,i)=>{
    return <Box key={i} item={data[i].item} description={data[i].description}/>
  })

  return (
    <div className='flex flex-wrap justify-center'>
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
          formRequest={formRequest}
        />
        :
        null
      }
    </div>
  )
}

export default App