import React from 'react';

  
function Timebox({ title, totalTimeInMinutes, onDelete, onEdit }) {
    if (totalTimeInMinutes > 0) {
        throw new Error("Czas musi być większy od zera!")
    }
    
    return (
        <div className="Timebox">
            <h3> {title} - {totalTimeInMinutes} min. </h3>
            <button onClick={onDelete}>Usuń</button>
            <button onClick={onEdit}>Zmień</button>
        </div>
        
    )
 }


export default Timebox;