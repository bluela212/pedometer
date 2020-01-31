import React, { Component } from 'react';
import './Step.css';

class Step extends Component {

    state = { content: '' }
    
    // arrow funcja
    submitForm = (event) => {
        // zeby forma nie wykonywala przeladowanie strony na inny serwer
        event.preventDefault();
        // polaczyly component rodzica
        this.props.addXToCounter(this.state.content)
    }

    handleChange = (event) => {
        // target w tej sytuacji to sam input
        this.setState({ content: event.target.value })
    }

    render() {
        return (
            <form class='form-inline' onSubmit={this.submitForm}>
                <div class='form-group'>
                    <label>Krok:</label>

                    <input class='form-control' onChange={this.handleChange} type="number" />
                </div>
                <button class='main-btn btn btn-primary'>Add krok</button>
            </form>
        )
    }
}
export default Step;