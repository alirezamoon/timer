

import React from 'react'
import classes from './Timer.module.css'
import TimerControl from './TimerControl/TimerControl'


class Timer extends React.Component {


    state = {
        second: 0,
        minute: 0,
        hour: 0,
        time: 0,
        started: false,
        starting: false
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
            }, 1000),
            started: true,
            starting: true
        });
    }
    stop = () => {
        clearInterval(this.state.time)
        this.setState({ started: false })
    }
    reset = () => {
        clearInterval(this.state.time)
        this.setState({ second: 0, minute: 0, hour: 0, started: false, starting: false })

    }


    render() {





        return (
            <div className={classes.Timer}>
                <div className={classes.timeCard}>
                    <h1 className={classes.h1}>T I M E R</h1>
                    <div className={classes.line}></div>
                </div>
                <div className={classes.timeCard}>
                    <p className={classes.time}>
                        <span>{this.state.hour < 10 ? `0${this.state.hour}` : this.state.hour}</span>&nbsp;:&nbsp;
                        <span>{this.state.minute < 10 ? `0${this.state.minute}` : this.state.minute}</span>&nbsp;:&nbsp;
                        <span>{this.state.second < 10 ? `0${this.state.second}` : this.state.second}</span>
                    </p>
                    <div className={classes.line}></div>

                </div>
                <div className={classes.timeCard}>
                    <TimerControl
                        start={this.start}
                        stop={this.stop}
                        reset={this.reset}
                        started={this.state.started}
                        starting={this.state.starting} />
                    <div className={classes.line}></div>
                </div>
            </div>
        )

    }


}

export default Timer