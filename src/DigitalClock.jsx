import React, {useState, useEffect} from "react";

function DigitalClock(){
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date())
        }, 100)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    function formatDate(){
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()

        return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}`
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number
    }

    return(
    <div>
        <div>
            <span>{formatDate()}</span>
        </div>
    </div>
    )
}

export default DigitalClock