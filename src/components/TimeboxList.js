import React from 'react';
import TimeboxCreator from './TimeboxCreator';
import Timebox from './Timebox';
import ErrorBoundary from './ErrorBoundary';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

function wait(ms = 1000) {
    return new Promise(
        (resolve) => {
            setTimeout(resolve, ms);
        }
    )
}
async function getAllTimeboxes() {
    await wait(1000);
    
    return [
        { id: 1, title: "Uczę się robić listy komponentów", totalTimeInMinutes: 25 }
    ]
}


class TimeboxList extends React.Component {
    state = {
        timeboxes: [],
        loading: true,
        error: null
        
    }

    componentDidMount() {
        getAllTimeboxes().then(
            (timeboxes) => this.setState({ timeboxes })
        ).catch(
            (error) => this.setState({error})
        ).finally(
            () => this.setState({loading: false})
        )
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
        try {
            this.addTimebox(createdTimebox);
        }
        catch (error) {
            console.log("Wystąpił błąd podczas tworzenia timeboxa")
        }

    }
    render() {
        return (
            <>
                <TimeboxCreator onCreate={this.handleCreate} />
                { this.state.loading ? "Timeboxy się ładują..." : null}
                {this.state.error ? "Nie udało się załadować timeboxów" : null}
                <ErrorBoundary message="Coś poszło nie tak w liście :(">

                    {

                        this.state.timeboxes.map((timebox, index) => (
                            <ErrorBoundary message="Coś poszło nie tak w timeboxie :(">
                                <Timebox
                                    key={timebox.id}
                                    title={timebox.title}
                                    totalTimeInMinutes={timebox.totalTimeInMinutes}
                                    onDelete={() => this.removeTimebox(index)}

                                />
                            </ErrorBoundary>

                        )
                        )}
                </ErrorBoundary>


            </>
        )
    }

}

export default TimeboxList;