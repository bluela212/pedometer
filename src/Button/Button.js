import React from 'react';
import { Button } from 'react-bootstrap';
import './Button.css';

const ButtonTrzy = (props) => {
    return (
        <div>
            <Button variant='primary' className='main-btn' onClick={ props.addOneToCounterProps}>Add 1</Button>
            <Button variant='warning' className='main-btn' onClick={ props.resetToProps}>Relnit</Button>
            <Button variant='danger' className='main-btn' onClick={ props.resetCounterProps}>Reset</Button>
        </div>
    )
}

// class ButtonTrzy extends Component {
// }
export default ButtonTrzy