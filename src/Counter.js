import React, {Component} from 'react';
import './Counter.css';
import {Card} from 'react-bootstrap';
import ButtonTrzy from './Button/Button'
import Step from './Pedometer/Step';

class Counter extends Component {

    // construktor to filter na propsy (straznik)
    constructor(props){
        super(props);
        let number = 0;

        // zamieniamy stringa z app.js
        if(isNaN(this.props.value)=== false) {
            number = parseInt(this.props.value)
        } else {
            // alert("przeslales nie liczbe!")
        }
    
        let napis = ''
        if(this.props.test === undefined){
            napis = ""
        } else {
            napis = this.props.test
        }
        this.state = {
            counterView: number,
            napisView: napis
        }
    }   

    // strałkowa funkcja która bedzie resetowac naszą wartość
    resetCounter = () => {
        this.setState({
            counterView: 0
        })
    }
    // albo taka funkcja
    // resetCounter () {}

    addOneToCounter = () => {
        this.setState({
            counterView: this.state.counterView +1
        })
    }

    addXToCounter = (number) => {
        this.setState({
            counterView: this.state.counterView + parseInt(number)
        })
    }

    resetToProps = () => {
        this.setState({
            counterView: parseInt(this.props.value)
        })
    }

    // render zawsze jest ostatni! to jest medoda wykonania/opublikuj
    render(){
        return(
            <div>
                <Card>
                    <Card.Body>{this.props.name + this.state.counterView + this.state.napisView}</Card.Body>
                    <ButtonTrzy resetCounterProps = {this.resetCounter} addOneToCounterProps = {this.addOneToCounter} resetToProps={this.resetToProps}/>
                </Card>
                <Step addXToCounter={this.addXToCounter}></Step>
            </div>

            // <div style = {{
            //     height: this.props.wysokosc,
            //     color: this.props.color
            // }} >
            //     <Card>
            //         <Card.Body>{this.props.name + 'wartośc równa ' + this.props.value}</Card.Body>
            //     </Card>
            // </div>

            // a w app.js było to:
            
            //<div className="App">
            //<Counter name='Licznik pierwszy' value='108' wysokosc='200px' color='red'></Counter>
            //</div>
        )
    }
}
export default Counter;