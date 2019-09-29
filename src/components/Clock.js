import React from "react";

function Clock ({className,  minutes, seconds }) {      
    return  (
<h2 className={"clock " + className }>
      Pozostało
      <div>
      <div className="clock__minutes">{formater(minutes)}</div>
      <div className="clock__separator">:</div>
      <div className="clock__seconds">{formater(seconds)}</div>
      </div>
      
    </h2>
    )
    
  }
  function formater (props){
    let formater;
      if (props < 0){
      formater = `00`;
      }else if(props < 10){
        formater = `0${props.toString()}`;
      }else{
         formater = props;
      }            
     return `${formater}`;
    }

  export default Clock;