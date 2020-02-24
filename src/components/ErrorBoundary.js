import React from "react";
import propTypes from "prop-types";

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error) {
        // Zaktualizuj stan, aby następny render pokazał zastępcze UI.
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        // Możesz także zalogować błąd do zewnętrznego serwisu raportowania błędów
        console.log("Wystąpił błąd:", error, info);
    }
    render() {
        const { message, children } = this.props;
        return this.state.hasError ? message : children;
    }


}
ErrorBoundary.propTypes = {
    message: propTypes.string.isRequired,
    children: propTypes.any.isRequired,
    

}
export default ErrorBoundary;