import React from 'react';
import TimeboxEditor from './TimeboxEditor';
import CurrentTimebox from './CurrentTimebox';





class EditableTimebox extends React.Component {
      
    state = {
        title: "Uczę się wyciągać stan w górę",
        totalTimeInMinutes: 60,
        isEditable: true
    }
    handleTotalTimeInMinutesChange = (event) =>{
        this.setState({totalTimeInMinutes : event.target.value})
    }
    handleTitleChange = (event) => {
        this.setState({title: event.target.value})
    }
    handleConfirm = () => {
        this.setState({isEditable:false})
    }
    handleEdit = () => {
        this.setState({isEditable:true})
    }

    render() {
        const {title, totalTimeInMinutes, isEditable}= this.state;
    return (
   <>
   <React.StrictMode>
{
    isEditable ? (
    <TimeboxEditor 
     title={title}
     totalTimeInMinutes={totalTimeInMinutes}
 onTitleChange={this.handleTitleChange} 
 onTotalTimeInMinutesChange={this.handleTotalTimeInMinutesChange}
 isEditable = {isEditable}
 onConfirm ={this.handleConfirm}
 />
     )    
    :
    (
    <CurrentTimebox 
     isEditable={isEditable}
     title={title} 
     totalTimeInMinutes={totalTimeInMinutes}
     onEdit={this.handleEdit}
     />
     )
    

}
   </React.StrictMode>
   
       
   </>
    )
    }
}

export default EditableTimebox;