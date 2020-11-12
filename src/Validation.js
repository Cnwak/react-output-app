import React from 'react'

const validation = (prop) =>{
if (prop.change < 5){
  return(
    <div>
    <p>Too short</p>
    </div>
  )
}else{
  return(
    <div>
    <p>Long enough</p>
    </div>
  )
}


 
}


export default validation