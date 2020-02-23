import React from 'react';
import TimeboxCreator from './TimeboxCreator';
import Timebox from './Timebox';
import ErrorBoundary from './ErrorBoundary';

import TimeboxesAPI from "../api/fakeTimeboxesAPI"


//skończyłem film  lekacja 7: fake Api adapter na 6:00
class TimeboxList extends React.Component {
    state = {
        timeboxes: [],
        loading: true,
        error: null

    }

    componentDidMount() {
        TimeboxesAPI.getAllTimeboxes().then(
            (timeboxes) => this.setState({ timeboxes })
        ).catch(
            (error) => this.setState({ error })
        ).finally(
            () => this.setState({ loading: false })
        )
    }


    addTimebox = (timebox) => {
        TimeboxesAPI.addTimebox(timebox).then(
            (addedTimebox) => this.setState(prevState => {
                const timeboxes = [...prevState.timeboxes, addedTimebox];
                return { timeboxes };
            })
        )


    }
    removeTimebox = (indexToRemove) => {
        TimeboxesAPI.removeTimebox(this.state.timeboxes[indexToRemove]).then(
            () =>
                this.setState(prevState => {
                    const timeboxes = prevState.timeboxes.filter((timebox, index) => index !== indexToRemove)
                    return { timeboxes };
                })
        )

    }
    updateTimebox = (indexToUpdate, timeboxToUpdate) => {
        TimeboxesAPI.replaceTimebox(timeboxToUpdate).then(
            (updatedTimebox) =>
                this.setState(prevState => {
                    const timeboxes = prevState.timeboxes.map((timebox, index) =>
                        index === indexToUpdate ? updatedTimebox : timebox
                    )
                    return { timeboxes };
                }
                )
        )
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
                {this.state.loading ? "Timeboxy się ładują..." : null}
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