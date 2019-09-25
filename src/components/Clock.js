import React from "react";

function Clock ({className = "" ,  minutes=3, seconds=4, }) {      
    return  <h2 className={"Clock " + className }>Pozostało {formater(minutes)}:{formater(seconds)}</h2>;
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