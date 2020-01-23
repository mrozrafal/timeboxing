import React from 'react';


import EditableTimebox from './EditableTimebox';
import ErrorBoundary from "./ErrorBoundary";
import TimeboxList from './TimeboxList';


function App() {
    return (

        <div className="App">
            <ErrorBoundary message="Coś nie działa w całej aplikacji">
                <TimeboxList />
                <EditableTimebox />
            </ErrorBoundary>
        </div>

    )
}

export default App;