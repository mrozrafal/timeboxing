import React from 'react';

class TimeboxCreator extends React.Component {
    constructor(props) {
        super(props);
        this.titleInput = React.createRef();
        this.totalTimeInMinutesInput = React.createRef();
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onCreate({
            title: this.titleInput.current.value,
            totalTimeInMinutes: this.totalTimeInMinutesInput.current.value
        });
        this.titleInput.current.value = "";
        this.totalTimeInMinutesInput.current.value = "";
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="TimeboxCreator">
                <label className="Labels">Co robisz?
                   <input
                   className="input"
                        ref={this.titleInput}
                        type="text"
                    />
                </label>
                <label
                    className="Labels">
                    Ile minut?
                   <input
                   className="input"
                        ref={this.totalTimeInMinutesInput}
                        type="number"
                    />
                </label>
                <button >Dodaj Timebox</button>
            </form>

        )
    }

}

export default TimeboxCreator;