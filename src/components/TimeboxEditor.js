import React from 'react';

function TimeboxEditor (props){         
    const {
 title, 
 totalTimeInMinutes,
 onTitleChange,
 onTotalTimeInMinutesChange,
 onConfirm,
 isEditable
 
 } = props;
return (
<div className={`TimeboxEditor ${isEditable ? "" : "inactive"}`}>
<label className="Labels">Co robisz?
 <input className="Inputs" value={title} type="text" onChange={onTitleChange} disabled={!isEditable}/>
</label>
<label className="Labels">Ile minut?
 <input className="Inputs" value={totalTimeInMinutes} type="number" onChange={onTotalTimeInMinutesChange} disabled={!isEditable}/>
</label>
<button  disabled={!isEditable} onClick={onConfirm}>Zatwierdź zmiany</button>
</div>

)

}

export default TimeboxEditor;