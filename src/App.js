import React, {useState} from 'react'
import './App.css';
import TodoList from './components/TodoList';
const App = () => {
  const [value, setvalue] = useState([]);
  const [inputText, setinputText] = useState('');
  const addItems = (inputText) =>{
    setvalue([...value,inputText]);
    setinputText('')
  }
  const DeleteItems = (key) =>
  {
    let newValue = [...value];
    newValue.splice(key,1);
    setvalue(newValue);
  }
  return (
    <div className="container">
    <div className="center-container">
      <h1>TODO LIST</h1>
      <hr></hr>
      <div className='input-Field'>
      <input type='text' placeholder='Enter Tasks' value={inputText} onChange={(e)=>setinputText(e.target.value)}/>
       <button className='Add' onClick={()=>addItems(inputText)}>+</button>
       </div>
       {value.map((value,i)=>{
        return(
          <TodoList value={value} key={i} DeleteItems={DeleteItems} index={i}/>
        )
       })}

    </div>
  
  </div>
  )
}

export default App


