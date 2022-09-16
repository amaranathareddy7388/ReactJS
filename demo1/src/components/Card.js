import { useState } from "react";
import '../styles/card.css'
import '../styles/util.css'



const Card = (props) =>{
    const[dark, setDark] = useState(true);
    console.log(props);
    return <div className="card-wrapper" style={{
        backgroundColor: dark ? '#181818' : '#F2F2F2',
        color: dark ? '#F2F2F2' : '#181818',
    }}>
        <div className="card-header">
            <h1 className='heading'>{props.title}</h1>
        </div>
        <div className="card-body">
            <p>{props.subTitle}</p>
            <p>{props.details}</p>
        </div>
        <button style={{
            backgroundColor: dark ? '#181818' : '#F2F2F2',
            color: dark ? '#F2F2F2' : '#181818',
            border: '5px solid',
            borderColor: dark ? '#F2F2F2' : '#181818',
            borderRadius: '5px',
        }}
        onClick={()=>{
            setDark(!dark);
        }}>
            {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
    </div>
};
export default Card;