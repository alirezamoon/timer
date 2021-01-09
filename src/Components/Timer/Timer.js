import classes from './Timer.module.css'

const Timer = () => {
    return (
        <div className={classes.Timer}>
            <h1 className={classes.h1}>T I M E R</h1>
            <p className={classes.time}>time</p>
            <p>Buttons</p>
        </div>
    )
}

export default Timer