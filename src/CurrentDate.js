import React from "react";

export default function currentDate(props) {
    console.log(props.timezone);
    let currentdays = [
        "Sunday",
        "Monday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    let currentday = currentdays[props.date.getDay()];

    let completeMonths = [
        "January", 
        "Febuary", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September",
        "November",
        "December"
    ]
    let currentMonth = completeMonths[props.date.getMonth()];
    let currentYear = props.date.getFullYear();
    let currentDate = props.date.getDate();
    if (currentDate < 10) {
        currentDate = `0${currentDate}`;
    }
    
    let fullDateToday = `${currentMonth} ${currentDate}, ${currentYear}`;
    
    
    let currenthours = props.date.getUTCHours();
    if (currenthours < 10) {
        currenthours = `0${currenthours}`;
    }
    let currentminutes = props.date.getUTCMinutes();
    if (currentminutes < 10) {
        currentminutes = `0${currentminutes}`;
    }
    return (
        <div>
            <h2 className="day-name"> {currentday} </h2>
            <h3>
            <span className="current-date"> {fullDateToday} </span>
            &nbsp;&nbsp;&nbsp;
            <span className="current-time" > {currenthours} : {currentminutes} </span>
            </h3>
        </div>
    )
}