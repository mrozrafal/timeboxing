import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onLoginAttempt({
            email: this.emailInput.current.value,
            password: this.passwordInput.current.value
        });
        this.emailInput.current.value = "";
        this.passwordInput.current.value = "";
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="LoginForm">
                {this.props.errorMessage ?
                    <div className="LoginForm__error-message">{this.props.errorMessage}</div>
                    : null}

                <label className="Labels">email
                   <input
                        className="input"
                        ref={this.emailInput}
                        type="text"
                        defaultValue="kevinalone@gmail.com"
                    />
                </label>
                <label
                    className="Labels">
                    password
                   <input
                        className="input"
                        ref={this.passwordInput}
                        type="password"
                        defaultValue="safehause"
                    />
                </label>
                <button >Zaloguj się</button>
            </form>

        )
    }

}

export default LoginForm;