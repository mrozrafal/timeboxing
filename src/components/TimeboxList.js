import React from 'react';
import TimeboxCreator from './TimeboxCreator';
import Timebox from './Timebox';
import Error from './Error';



class TimeboxList extends React.Component {
    state = {
        timeboxes: [
            { id: "a", title: "Uczę się robić listy komponentów", totalTimeInMinutes: 25 },
            { id: "b", title: "Uczę się reacta tak ogólnie", totalTimeInMinutes: 360000 },
            { id: "c", title: "Lubię placki", totalTimeInMinutes: 5 }
        ],
        hasError: false
    }



    addTimebox = (timebox) => {
        this.setState(prevState => {
            const timeboxes = [timebox, ...prevState.timeboxes];
            return { timeboxes };
        })
    }
    removeTimebox = (indexToRemove) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.filter((timebox, index) => index !== indexToRemove)
            return { timeboxes };
        })
    }
    updateTimebox = (indexToUpdate, updatedTimebox) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.map((timebox, index) =>
                index === indexToUpdate ? updatedTimebox : timebox
            )
            return { timeboxes };
        })
    }
    handleCreate = (createdTimebox) => {
        try{
            this.addTimebox(createdTimebox);
        }
        catch(error)
        {
console.log("Wystąpił błąd podczas tworzenia timeboxa")
        }
        
    }
    render() {
        return (
            <>
                <TimeboxCreator onCreate={this.handleCreate} />
                <Error message="Coś poszło nie tak w liście :(">

                    {

                        this.state.timeboxes.map((timebox, index) => (
                            <Error message="Coś poszło nie tak w timeboxie :(">
                                <Timebox
                                    key={timebox.id}
                                    title={timebox.title}
                                    totalTimeInMinutes={timebox.totalTimeInMinutes}
                                    onDelete={() => this.removeTimebox(index)}
                                    onEdit={() => this.updateTimebox(index, { ...timebox, title: "Updated" })}
                                />
                            </Error>

                        )
                        )}
                </Error>


            </>
        )
    }

}

export default TimeboxList;