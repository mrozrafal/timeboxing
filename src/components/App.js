import React from 'react';
import ErrorBoundary from "./ErrorBoundary";
import LoginForm from './LoginForm';
import AutenticationAPI from '../api/FetchAuthenticationAPI';
import AuthenticationContext from '../contexts/AuthenticationContext';


const AuthenticatedApp = React.lazy(() => import("./AuthenticatedApp"));


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
            accessToken: null,
            previousLoginAttemptFailed: false
        })
    }
    handleLoginAttempt = (credentials) => {
        AutenticationAPI.login(credentials)
            .then(({ accessToken }) => {
                this.setState({
                    accessToken, previousLoginAttemptFailed: false
                })

            }
            ).catch(() => {
                this.setState({ previousLoginAttemptFailed: true })
                console.log("invaiild email or password")
            })

    }
    render() {
        return (

            <div className="App">
                <ErrorBoundary message="Coś nie działa w całej aplikacji">
                    {
                        this.isUserLoggedIn() ?
                            <AuthenticationContext.Provider value={{ accessToken: this.state.accessToken }}>
                                <React.Suspense fallback={"... Loading"}>
                                    <AuthenticatedApp onLogout={this.handleLogout} />
                                </React.Suspense>
                            </AuthenticationContext.Provider>
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