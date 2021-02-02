const Box=({item,description})=>{
  return(
    <div className='box dim grow bw2 shadow-5'>
      <h4 className='h3'>{item}</h4>
      <p className='h3'>{description}</p>
    </div>
  )
}

export default Box;