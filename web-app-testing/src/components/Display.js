import React from 'react';
const Display = props => {
    console.log(props, 'props')
    return (
        <div>
            <h1>Ball {props.ball}</h1>
            <h1>Strike {props.strike}</h1>
        </div>
    )
}

export default Display;