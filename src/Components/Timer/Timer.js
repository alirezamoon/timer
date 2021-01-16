

import React from 'react'
import classes from './Timer.module.css'
import TimerControl from './TimerControl/TimerControl'
import Time from './Time/Time'

import TimeContext from '../Context/timeContext'
import ControlContext from './../Context/controlContext'

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
            <TimeContext.Provider value={{
                hour: this.state.hour,
                minute: this.state.minute,
                second: this.state.second,


            }}>
                <ControlContext.Provider value={{
                    start: () => this.start,
                    stop: () => this.stop,
                    reset: () => this.reset,
                    started: this.state.started,
                    starting: this.state.starting
                }}>
                    <div className={classes.Timer}>
                        <div className={classes.timeCard}>
                            <h1 className={classes.h1}>T I M E R</h1>
                            <div className={classes.line}></div>
                        </div>
                        <div className={classes.timeCard}>
                            <Time />
                            <div className={classes.line}></div>

                        </div>
                        <div className={classes.timeCard}>
                            <TimerControl />
                            <div className={classes.line}></div>
                        </div>
                    </div>
                </ControlContext.Provider>
            </TimeContext.Provider>
        )

    }


}

export default Timer