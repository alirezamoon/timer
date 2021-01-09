import classes from './TimerControl.module.css'


const TimerControl = (props) => {
    return (
        <div className={classes.TimerControl}>
            <button className={classes.btn} onClick={props.start}>START</button>
            <button className={classes.btn} onClick={props.stop}>STOP</button>
            <button className={classes.btn} onClick={props.reset}>RESET</button>
        </div>
    )
}

export default TimerControl