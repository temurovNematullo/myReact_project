import dilogs from './../Dialog.module.css';
import React from 'react';



export default function Message(props) {



  return (
    
    <div className={dilogs.message}>{props.message}</div>
    
  );
}



