import React from 'react';
import EditableTimebox from './EditableTimebox';
import ErrorBoundary from "./ErrorBoundary";
import TimeboxList from './TimeboxList';
import LoginForm from './LoginForm';
import AutenticationAPI from '../api/FetchAuthenticationAPI';
import UserGreeting from './UserGreeting';

class App extends React.Component {

    state = {
        accessToken: null,
        previousLoginAttemptFailed: false
    }

    isUserLoggedIn() {
        return !!this.state.accessToken;
    }

    handleLogout = () => {
        this.setState({
            accessToken:null,
            previousLoginAttemptFailed:false
        })
    }
    handleLoginAttempt = (credentials) => {
        AutenticationAPI.login(credentials)
        .then(({accessToken}) => {
            this.setState({
                accessToken, previousLoginAttemptFailed:false
            })
               
            }
        ).catch( () => {
            this.setState({ previousLoginAttemptFailed:true })
            console.log("invaiild email or password")
        })
        
    }
    render() {
        return (

            <div className="App">
                <ErrorBoundary message="Coś nie działa w całej aplikacji">
                    {
                        this.isUserLoggedIn() ?
                            <>
                            
                                <header className="header">
                                <UserGreeting accessToken={this.state.accessToken}/> 
                                    <a onClick={this.handleLogout}
                                        className="header__logout-link" href="#">Wyloguj się</a>
                                </header>
                                <TimeboxList accessToken={this.state.accessToken}/>
                                <EditableTimebox />
                            </>
                            :
                            <LoginForm
                                errorMessage={this.state.previousLoginAttemptFailed ? "Nie udało się zalogować" : null}
                                onLoginAttempt={this.handleLoginAttempt}
                            />

                    }
                </ErrorBoundary>
            </div>

        )
    }

}

export default App;