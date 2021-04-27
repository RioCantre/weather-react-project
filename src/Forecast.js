import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDays from "./ForecastDays";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    // console.log(response.data)
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
        let apiKey = "97ab832bf6f8aa6eae3f8515460ad577";
        let longtitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);
  }
 
  if (loaded) {
    return (
      <div>
        <section>
          {forecast.map(function (dailyForecast, index){
            if (index < 6) {
              return (
                <div key={index}>
                  <ForecastDays data={dailyForecast} />            
                </div>              
              );
            } else {
              return null;
            }
          })}        
        </section>
      </div>
  
    );

  } else {
    load();
    return null;

  }
}