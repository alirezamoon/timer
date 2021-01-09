import classes from './TimerControl.module.css'


const TimerControl = () => {
    return (
        <div className={classes.TimerControl}>
            <button className={classes.btn}>START</button>
            <button className={classes.btn}>STOP</button>
            <button className={classes.btn}>RESET</button>
        </div>
    )
}

export default TimerControl