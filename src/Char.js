import React from 'react'


const char = (props)=>{
const inlineStyle= {
  display: 'inline',
  padding: '16px',
margin: '16px',
border: '1px solid black',
textAlign: 'center'
}

  return(
    <div style = {inlineStyle} onClick= { props.delete}>
    {props.character}
     
    </div>
  )
}


export default char 