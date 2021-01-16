import React , {useContext} from 'react'
import TimeContext from './../../Context/timeContext'

import classes from './Time.module.css'


const Time = () => {
    const timeContext = useContext(TimeContext)
    return (
        <p className={classes.time}>
            <span>{timeContext.hour < 10 ? `0${timeContext.hour}` : timeContext.hour}</span>&nbsp;:&nbsp;
            <span>{timeContext.minute < 10 ? `0${timeContext.minute}` : timeContext.minute}</span>&nbsp;:&nbsp;
            <span>{timeContext.second < 10 ? `0${timeContext.second}` : timeContext.second}</span>
        </p>
    )
}


export default Time