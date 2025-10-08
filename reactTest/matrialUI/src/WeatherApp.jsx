import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "udupi",
    feelsLike: 26.61,
    humidity: 89,
    temp: 25.66,
    tempMax: 89,
    tempMin: 25.66,
    weather: "overcast clouds",
  });
  let updateWeatherInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <SearchBox updateWeatherInfo={updateWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
