import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDays(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return days[day];
    }
    return (
        <div>
            <h3 className="weekname"> {day()}</h3>
            <WeatherIcon code={props.data.weather[0].icon} size={25}  />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="degree">
                <span className="degree-cel"> {minTemp()}</span> |
                <span className="degree-fah"> {maxTemp()}</span>
            </span>
        </div>
    );
            
}