import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';

const WeatherPanel = () => {

  const [weather, setWeather] =useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");

  let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=8e9a1a9d11e28e84704812aa78096297&lang=es";

  let urlCity = "&q=";

  let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=8e9a1a9d11e28e84704812aa78096297&lang=es";

  const getLocation = async(loc) => {
    setLoading(true);
    setLocation(loc);

    //Weather

    urlWeather = urlWeather + urlCity + loc;

    await fetch(urlWeather).then((res) => {
      if(!res.ok) throw {res}
      return res.json();

    }).then((weatherData) => {
      console.log(weatherData);
      setWeather(weatherData);

    }).catch(error => {
      console.log(error);

      setLoading(false);
      setShow(false);
    });

    //Forecast

    urlForecast = urlForecast + urlCity + loc;

    await fetch(urlForecast).then((res) => {
      if(!res.ok) throw {res}
      return res.json();

    }).then((forecastData) => {
      console.log(forecastData);
      setForecast(forecastData);

      setLoading(false);
      setShow(true);

    }).catch(error => {
      console.log(error);

      setLoading(false);
      setShow(false);
    });
  };

  return (
    <div>
      <Form newLocation={getLocation}/>
      <Card showData={show}
            loadingData={loading}
            weather={weather}
            forecast={forecast}
      />
    </div>
  )
}

export default WeatherPanel