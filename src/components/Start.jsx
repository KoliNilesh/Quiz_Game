import React, { useEffect, useRef } from 'react'
import useSound from 'use-sound';
import DRUM from "../Assets/DRUM.mp3"

export default function Start({setUserName}) {

    const inputRef = useRef();
    const [latsdrum] = useSound(DRUM);
    useEffect(()=>{
        latsdrum();
    })
    const handleClick = ()=>{
        inputRef.current.value && setUserName(inputRef.current.value);
    } ;
  return (
    <div className='start'>
      <input placeholder='Enter The Your Name ?' className='startInput' ref ={inputRef}/>
      <button className='startButton' onClick={handleClick}>Start Quiz</button>  
        
    </div>
  )
}
