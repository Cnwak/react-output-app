import React,{Component} from 'react'
import './App.css';
import Validation from './Validation'
import Char from './Char'

class App extends Component{
  state = {
    userInput: ''
  }

changeHandler = (e) => {
this.setState ({userInput:e.target.value
})
// console.log(e.target.value);
}

deleteHandler = (index) => {
  const item = this.state.userInput.split('')
  item.splice(index,1)
  const updatedItem = item.join('')
  this.setState({userInput:updatedItem})
}


 
  render(){
    const charInput= this.state.userInput.split('').map( (ch,index)=> 
    {return <Char 
      character = {ch}  
      key= {index}
      delete = {()=>this.deleteHandler(index)}
      />;
    });


  return (
    <div className='App'>
      <h1>Emeka's practice React</h1>

      <input type='text' onChange = {this.changeHandler}
      value= {this.state.userInput} />

      <br/>
  <br/>
  <p>{this.state.userInput}</p>
  
{charInput}
<br/>
<br/>
  <Validation change = {this.state.userInput.length}/>
    </div>
  )
}
}

export default App;
