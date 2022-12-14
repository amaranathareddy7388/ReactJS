 
import './styles/main.css';
import { useState } from 'react';

function App(){

  const [count, setCount] = useState(0);
  const[name, setName] = useState('Amar');
  const apppName = "COUNTER APPð";

  const increase = () => {
    setCount(count+1);
  };
  const decrease = () => {
    setCount(count-1);
  }
  return (
    <div className="container">
      <h1>{name}</h1>
      <input 
        onChange={function(e){
          setName(e.target.value);
        }}
      />

      
      <h2
      onClick={()=>{
        alert('You clicked the heading');
      }}>{apppName}</h2>
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'#E80F88',
      marginBlock: '10px',
      padding:'10px',
      borderRadius:'10px',
    }}>
      <h2>
        
        <span>Count - </span>
      </h2>
      <h2>
        <span>{count}</span>
      </h2>
    </div>
    <div>
      <button onClick={increase}>â</button>
      <button onClick={decrease}>â</button>
    </div>
    </div>
  );
}

export default App;
