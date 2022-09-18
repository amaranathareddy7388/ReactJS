import './styles/App.css';
import Button from './components/Button.js';

import {useState, useEffect} from 'react';
const App = () =>{
    const [number, setNumber] = useState(0);
  
    const[randomNumber, setRandomNumber] = useState(0);
    
    const[guess, setGuess] = useState("Take a guess🤔");
    const[score, setScore] = useState(5);
    const[hint, setHint] = useState('')

    const handleOnChangeEvent = (event) =>{
      setNumber(event.target.value);
    }
    const randomNumberGenerator = () =>{
      const randomNumber = Math.floor(Math.random()*20);
      setRandomNumber(randomNumber);
    }
    
    useEffect(randomNumberGenerator, []);
    const handleCheck = () =>{
      if (number == randomNumber){
        setGuess('You win');
        setHint('');
      }else{
        setGuess('Your guess is wrong Try again');
        setScore(score-1);
        setNumber(0);
        
        if(number > randomNumber){
          setHint('Guess Lower');
        }else{
          setHint('Guess Higher');
        }
        if(score == 0){
          
          setHint('');
          handleReset();
        }

      }
    };
    const handleReset = ()=>{
      setNumber(0);
      randomNumberGenerator();
      setGuess("Take a guess")
      setHint('');
      setScore(5);
    }
  
  return (

      <div className='container'>
        <h1 className="head1">Number Guessing Game </h1>
        
        <h1 className="head2" >{guess}</h1>
        <h2 className='hint'>{hint}</h2>
        <input onChange={handleOnChangeEvent} className="input" placeholder="check your guess" />
        <Button title='check num' click ={handleCheck} />
        <Button title='play again' click ={handleReset} />
        <h3 style={{
          color:'white',
          marginTop: '2rem',
        }}>SCORE - {score}</h3>
        
      </div>

  ); 
    
}

export default App;
