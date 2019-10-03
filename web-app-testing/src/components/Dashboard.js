import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Dashboard = props => {
    return (
        <div>
            <button data-testid='ball-button' onClick={props.changeBall}>Ball</button>
            <button data-testid='strike-button' onClick={props.changeStrike}>Strike</button>
            <button onClick={props.reset}>Hit</button>
            <button onClick={props.foul}>Foul</button>
            <button onClick={props.reset}>Reset Game</button>
        </div>
    )
}

export default Dashboard;