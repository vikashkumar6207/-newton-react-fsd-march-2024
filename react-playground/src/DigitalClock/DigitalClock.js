import React, { useEffect, useState } from "react";
import "./DigitalClock.css";
function DigitalClock(){

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    

    useEffect(() => {
       const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => {
            clearInterval(intervalId);
        };
    }, [])

    return (
        <>
        <div className="Clock-container">
            <h1>Digital Clock</h1>
            <div>
                <div id="DisplayTimer" >{time}</div>
            </div>
        </div>
            
        </>
        

    )
}

export default DigitalClock;