import React from 'react'

const ControlContext = React.createContext ({
    start: () => { },
    stop: () => { },
    reset: () => { },
    started: false,
    starting: false
})

export default ControlContext