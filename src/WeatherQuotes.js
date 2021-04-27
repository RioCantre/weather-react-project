import React from "react";

export default function WeatherQuote(props) {
    const codeMapping = {
        "01d":  "Wherever you go, no matter the weather, always bring your own sunshine.",
        "01n":  "I like the kind of people who get excited over the stars at night.",
        "02d":  "Clouds are the sky's imagination.",
        "02n":  "Clouds are the sky's imagination.",
        "03d":  "Clouds are the sky's imagination.",
        "03n":  "Clouds are the sky's imagination.",
        "04d":  "Clouds are the sky's imagination.",
        "04n":  "Clouds are the sky's imagination.",
        "09d":  "Smell the rain.",
        "09n":  "Smell the rain.",
        "10d":  "Smell the rain.",
        "10n":  "Smell the rain.",
        "11d":  "Smell the rain.",
        "11n":  "Smell the rain.",
        "13d":  "Snowflakes are kisses from heaven.",
        "13n":  "Snowflakes are kisses from heaven.",
        "50d":  "One should see that all appearance is like mist and fog.",
        "50n":  "One should see that all appearance is like mist and fog."
    }
    return (
        <div>
            <p className="weather-quote" >
                {codeMapping[props.code]}
            </p>
        </div>
    );
}