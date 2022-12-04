import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

const BoilingVerdict = (props) => {
    if (props.celsius >= 100) {
        return <p>물이 끓어요 🥵</p>;
    }
    return <p>물이 끓지 않아요! 🥶</p>;
}

const toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
}

const toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32; 
}

const tryConvert = (temperature, convert) => {
    const input = parseFloat (temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
// tryConvert () 함수는 온도값과 변환하는 함수를 파라미터로 받아서 값을 변환시켜 리턴해 주는 함수다.
// 숫자가 아닌 값을 입력하면 empty string 을 리턴하도록 함!

const Calculrator = (props) => {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput 
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput 
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculrator;