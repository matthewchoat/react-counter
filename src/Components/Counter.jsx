import React from 'react';
import Display from './Display';


function Counter(props) {
    console.log(props.val)
    return (
        <div className="counter">
            <Display/>
        </div>
    )
    
}



export default Counter;