const Button = (props) =>{
   return (
   <div>
    <button onClick={props.click} className='button'>{props.title}</button>
   </div>
   );
};

export default Button;