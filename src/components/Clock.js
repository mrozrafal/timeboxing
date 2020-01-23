import React from "react";
import PropTypes from "prop-types";
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
  Clock.defaultProps = {
    className : ""
  }
  const NumberOrStringType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
  Clock.propTypes = {
    className: PropTypes.string.isRequired,
    minutes: NumberOrStringType.isRequired,
    seconds: NumberOrStringType.isRequired
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
    function NonNegativeNimberType(props, propName, componentName){
      if (props[propName] < 0 ) {
        return new Error (`Invalid prop ' ${propName}' issued to commponent '${componentName}'. It has to be greater or equal to 0.`)
      }
    }

  export default Clock;