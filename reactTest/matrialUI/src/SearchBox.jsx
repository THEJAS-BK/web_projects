import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({ updateWeatherInfo }) {
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "4d8c12a08ef8a5bff2734bc6db5854ba";
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.humidity,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    return result;
  };

  let handleInputChange = (ev) => {
    setCity(ev.target.value);
  };
  let handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      let result = await getWeatherInfo();
      updateWeatherInfo(result);
      setCity("");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className="searchBox">
      <form>
        <TextField
          id="outlined-basic"
          label="City name"
          variant="outlined"
          required
          onChange={handleInputChange}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="success"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>No such place exist</p>}
    </div>
  );
}
