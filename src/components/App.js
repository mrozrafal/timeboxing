import React from 'react';


import EditableTimebox from './EditableTimebox';
import Error from "./Error";
import TimeboxList from './TimeboxList';

function App() {
    return (

        <div className="App">
            <Error message="Coś nie działa w całej aplikacji">
                <TimeboxList />
                <EditableTimebox />
            </Error>
        </div>

    )
}

export default App;