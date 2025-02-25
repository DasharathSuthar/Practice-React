import { useEffect, useState } from "react"

export default function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, []);

    function formateTime() {
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
        let meridiem = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 ||12;
        return `${padZero(hour)}:${padZero(minute)}:${padZero(second)} ${meridiem}`;
    }

    function padZero(num){
        return(num < 10 ? "0" : "") + num;
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h1 style={{ fontSize: "50px" }}>
                <span>{formateTime()}</span>
            </h1>
        </div>
    )
}