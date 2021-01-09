import classes from './Timer.module.css'
import TimerControl from './TimerControl/TimerControl'


const Timer = () => {
    return (
        <div className={classes.Timer}>
            <h1 className={classes.h1}>T I M E R</h1>
            <p className={classes.time}>time</p>
            <TimerControl />
        </div>
    )
}

export default Timer