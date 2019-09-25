import React from 'react';
import {TimeboxList, TimeboxCreator, EditableTimebox, CurrentTimebox} from '../index';

function App () {
    return (
                    
        <div className="App">
            <TimeboxList />
            <TimeboxCreator />
            <EditableTimebox />
            <CurrentTimebox />
        </div>

        )
    }

export default App;