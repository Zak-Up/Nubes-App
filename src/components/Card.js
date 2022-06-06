import React from 'react';
import Loader from './Loader';

const Card = ({showData, loadingData, weather, forecast}) => {

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = day + '/' + month + '/' + year;

  let url = "";
  let iconUrl = "";

  let iconUrl3 = "";
  let iconUrl6 = "";
  let iconUrl9 = "";

  let forecastDate3 = "";
  let forecastDate6 = "";
  let forecastDate9 = "";

  if(loadingData){
    return <Loader/>;
  };

  if(showData){
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);
  };

  return (
    <div className='mt-5'>
      {
        showData === true ? (
          <div className='container'>
            <div className='card mb-3 mx-auto  text-light'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <h2 className='card-title h3'>{weather.name}</h2>
                  <p className='card-date h3'>{date}</p>
                  <h1 className='card-temp h3'>{(weather.main.temp - 273.15).toFixed(1)}<b className='grado'>°</b>C</h1>
                  <p className='card-desc'><img src={iconUrl} alt='icon'/>{weather.weather[0].description}</p>
                  <img src='https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='img-fluid rounded-start' alt=''></img>
                </div>
                <div className='col-md-8'>
                  <div className='card-body text-start mt-2'>
                    <h5 className='card-text'>🌤 Temperatura máxima: {((weather.main.temp_max - 273.15).toFixed(1))}°C</h5>
                    <h5 className='card-text'>🌨 Temperatura mínima: {((weather.main.temp_min - 273.15).toFixed(1))}°C</h5>
                    <h5 className='card-text'>🌫 Sensación Térmica: {((weather.main.feels_like - 273.15).toFixed(1))}°C</h5>
                    <h5 className='card-text'>⛈ Humedad: {((weather.main.humidity))}%</h5>
                    <h5 className='card-text'>🌪 Velocidad del viento: {((weather.wind.speed))}m/s</h5>

                    <hr/>

                    <div className='row mt-4'>
                      <div className='col'>
                        <p className='date3'>{forecastDate3}h</p>
                        <p className='description'><img src={iconUrl3} alt='icon3'/>{forecast.list[1].weather[0].description}</p>
                        <p className='temp'>{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                      </div>
                      <div className='col'>
                        <p className='date6'>{forecastDate6}h</p>
                        <p className='description'><img src={iconUrl6} alt='icon6'/>{forecast.list[2].weather[0].description}</p>
                        <p className='temp'>{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                      </div>
                      <div className='col'>
                        <p className='date9'>{forecastDate9}h</p>
                        <p className='description'><img src={iconUrl9} alt='icon9'/>{forecast.list[3].weather[0].description}</p>
                        <p className='temp'>{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ):(
          <h3 className='text-light h3'>Sin Datos</h3>
        )
      }
    </div>
  )
}

export default Card