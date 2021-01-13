

import React from 'react'
import classes from './Timer.module.css'
import TimerControl from './TimerControl/TimerControl'


class Timer extends React.Component {


    state = {
        second: 0,
        minute: 0,
        hour: 0,
        time: 0
    }


    start = () => {
        this.setState({
            time: setInterval(() => {
                if (this.state.second < 59) {
                    this.setState({ second: this.state.second + 1 })
                } else if (this.state.second === 59) {
                    this.setState({
                        second: 0,
                        minute: this.state.minute + 1
                    })
                }
                if (this.state.minute === 59 && this.state.second === 59) {
                    this.setState({
                        minute: 0,
                        hour: this.state.hour + 1
                    })
                }
            }, 1000)
        });
    }
    stop = () => {
        clearInterval(this.state.time)
    }
    reset = () => {
        clearInterval(this.state.time)
        this.setState({ second: 0, minute: 0, hour: 0 })

    }

    render() {





        return (
            <div className={classes.Timer}>
                <h1 className={classes.h1}>T I M E R</h1>
                <p className={classes.time}>
                    <span>{this.state.hour < 10 ? `0${this.state.hour}` : this.state.hour}</span>&nbsp;:&nbsp; 
                    <span>{this.state.minute < 10 ? `0${this.state.minute}` : this.state.minute}</span>&nbsp;:&nbsp; 
                    <span>{this.state.second < 10 ? `0${this.state.second}` : this.state.second}</span>
                </p>
                <TimerControl
                    start={this.start}
                    stop={this.stop}
                    reset={this.reset} />
            </div>
        )

    }


}

export default Timer