import React from 'react';

import TimeboxCreator from './TimeboxCreator';
import EditableTimebox from './EditableTimebox';
import CurrentTimebox from './CurrentTimebox';
import TimeboxList from './TimeboxList';

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