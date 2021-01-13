import classes from './TimerControl.module.css'


const TimerControl = (props) => {

    return (
        <div className={classes.TimerControl}>
            {!props.started
                ? props.starting
                    ? <>
                        <button className={[classes.btn, classes.success].join(' ')} onClick={props.start}>RESUME</button>
                        <button className={[classes.btn, classes.warning].join(' ')} onClick={props.reset}>RESET</button>
                    </>
                    : <button className={[classes.btn, classes.success].join(' ')} onClick={props.start}>START</button>
                : <>
                    <button className={[classes.btn, classes.danger].join(' ')} onClick={props.stop}>STOP</button>
                    <button className={[classes.btn, classes.warning].join(' ')} onClick={props.reset}>RESET</button>
                </>
            }
        </div>
    )
}

export default TimerControl