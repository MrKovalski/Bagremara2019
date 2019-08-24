import React, { Component } from 'react';
import moment from 'moment';

class Timer extends Component {
    
    render() {
        const currentDate = moment();
        const future = moment('2019.08.30', 'YYYY.MM.DD');
        const timeLeft = future.diff(currentDate, 'days');

        return (
            <div>
                <h1 className="timeUntil">Ostalo je još <span>{timeLeft}</span> dana do susreta 🙌</h1>
            </div>
        );
    }
}

export default Timer;