

import React from 'react'
import classes from './Timer.module.css'
import TimerControl from './TimerControl/TimerControl'


class Timer extends React.Component {


    state = {
        time: 0
    }


    start = () => {
        setInterval(() => {
            this.setState({ time: this.state.time + 1 })
        }, 1000);

    }
    stop = () => {

    }
    reset = () => {

    }

    render() {





        return (
            <div className={classes.Timer}>
                <h1 className={classes.h1}>T I M E R</h1>
                <p className={classes.time}>{this.state.time}</p>
                <TimerControl
                    start={this.start} />
            </div>
        )

    }


}

export default Timer