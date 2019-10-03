import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Dashboard = props => {
    return (
        <div>
            <button onClick={props.changeBall}>Ball</button>
            <button onClick={props.changeStrike}>Strike</button>
        </div>
    )
}

export default Dashboard;