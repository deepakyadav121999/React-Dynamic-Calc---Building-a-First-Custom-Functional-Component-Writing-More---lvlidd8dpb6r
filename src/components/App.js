import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const[number1,setnumber1]=useState(0);
  const[number2,setnumber2]=useState(0);
  const[total,setTotal]= useState(number1 + number2);
  function ip1(e){
   
    setnumber1(+e.target.value)
    // setTotal(number1 +number2);
 

  }
  function ip2(e){
    setnumber2(+e.target.value)
  
      // setTotal(number1 +number2);
   
   
  }
  useEffect(()=>{
    setTotal(number1 +number2);
  })

  return (
    <div id="main">
      <input id='input1' type='number' onChange={ip1} />
       +
      <input id='input2' type='number' onChange={ip2}/> 
      
      <p id='result' >{total}</p>
    </div>
  )
}


export default App;
