import React , {useContext } from 'react'
import ControlContext from './../../Context/controlContext'
import classes from './TimerControl.module.css'


const TimerControl = () => {


    const controlContext = useContext(ControlContext)

    return (
        <div className={classes.TimerControl}>
            {!controlContext.started
                ? controlContext.starting
                    ? <>
                        <button className={[classes.btn, classes.success].join(' ')} onClick={() => controlContext.start()}>RESUME</button>
                        <button className={[classes.btn, classes.warning].join(' ')} onClick={() => controlContext.reset()}>RESET</button>
                    </>
                    : <button className={[classes.btn, classes.success].join(' ')} onClick={() => controlContext.start()}>START</button>
                : <>
                    <button className={[classes.btn, classes.danger].join(' ')} onClick={() => controlContext.stop()}>STOP</button>
                    <button className={[classes.btn, classes.warning].join(' ')} onClick={() => controlContext.reset()}>RESET</button>
                </>
            }
        </div>
    )
}

export default TimerControl