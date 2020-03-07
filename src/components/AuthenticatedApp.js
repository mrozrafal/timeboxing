import React from 'react';
import Header from './Header'
import TimeboxList from './TimeboxList';
import EditableTimebox from './EditableTimebox';

function AuthenticatedApp({ onLogout}) {
    return <>
    <Header  onLogout={onLogout}/>
     <TimeboxList />
     <EditableTimebox />
    </>
}

export default AuthenticatedApp;