import React from 'react'
import { useState } from 'react'
const AccordionBody = (props) => {
    let [time, setTime] = useState(1)
    function prev() {
        if (time == 1) {
            setTime(1)
        }
        else {
            setTime(time - 1)
        }
    }
    function next() {
        setTime(time + 1)
    }
    return (
        <div className="Element">
            <h3>{props.title}</h3>
            <div className="count">
                <p>{'Количество часов'}</p>
                
                <div className="time">
                    <div><button onClick={prev}>-</button></div>
                    <div className="time_count">{time}</div>
                    <button onClick={next}>+</button>
                </div>
            </div>
            {props.children}
            <button>+</button>
        </div>
    )
}

export default AccordionBody