import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import {Groceries} from './Gerocery'
import {C} from './C'

function App() {
  // const [count, setCount] = useState(0)
  const [show,setShow] = useState(true);

  return (
    <div className="App">
     {show?<C/>:""}
      <button onClick={()=>{
        setShow(show?false:true)
      }}>{show?"hide timer":"show timer"}</button>
    </div>
  )
}

export default App
