import React from 'react';



class Timebox extends React.Component {
    constructor(props) {
        super(props);

     
            

        if (this.totalTimeInMinutes < 0) {
            throw new Error("Czas musi być większy od zera!")
        }
    }
    state = {
        title : this.title,
        totalTimeInMinutes : this.totalTimeInMinutes,
        onDelete : this.onDelete,
        onEdit : this.onEdit,
        onSubmit : this.onSubmit,
    }


    render() {
        return (
            <div className="Timebox">
                <h3> {this.title} - {this.totalTimeInMinutes} min. </h3>
                <button onClick={this.onDelete}>Usuń</button>
                <button onClick={this.onEdit}>Zmień</button>
                




            </div>
        )

    }
}


export default Timebox;