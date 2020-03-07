import React from 'react';
import Header from './Header'
import TimeboxList from './TimeboxList';
import EditableTimebox from './EditableTimebox';

function AuthenticatedApp({accessToken, onLogout}) {
    return <>
    <Header accessToken={accessToken} onLogout={onLogout}/>
                                <TimeboxList accessToken={accessToken}/>
                                <EditableTimebox />
    </>
}

export default AuthenticatedApp;