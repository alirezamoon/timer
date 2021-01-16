import React from 'react'

const TimeContext = React.createContext({
    hour: 0,
    minute: 0,
    second: 0
})

export default TimeContext