import React from 'react';

function ProgressBar ({className = "" , percent=this.progressInPercent}) {
    let nameOfClass="ProgressBar";
    let timePercent=percent; 

    
    
            return (
                <div className={nameOfClass + " " + className} >
                <div style= {{width: `${timePercent}%`}}></div>
                </div>
                
            );
            
    }
    export default ProgressBar;