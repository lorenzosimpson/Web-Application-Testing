import React from 'react';
const Display = props => {
    console.log(props, 'props')
    return (
        <div>
            <h1 data-testid='ball-display'>Ball {props.ball}</h1>
            <h1 data-testid='strike-display'>Strike {props.strike}</h1>
        </div>
    )
}

export default Display;