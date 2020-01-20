import React from 'react';


function ProgressBar ({className = "" , percent=this.progressInPercent}) {
    
    

    let timePercent=percent; 

    
    
            return (
                <div className={"ProgressBar" + " " + className} >
                <div style= {{width: `${timePercent}%`}}></div>
                </div>
                
            );
            
    }
    export default ProgressBar;