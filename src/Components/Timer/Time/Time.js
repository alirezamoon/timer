import classes from './Time.module.css'


const Time = (props) => {
    return (
        <p className={classes.time}>
            <span>{props.hour < 10 ? `0${props.hour}` : props.hour}</span>&nbsp;:&nbsp;
            <span>{props.minute < 10 ? `0${props.minute}` : props.minute}</span>&nbsp;:&nbsp;
            <span>{props.second < 10 ? `0${props.second}` : props.second}</span>
        </p>
    )
}


export default Time