import React, { useEffect, useState } from 'react';
import weatherCodes from '../weathercodes.json';
import { getWindDirection } from '../utils/getWindDirection';
import { getIcon } from '../utils/icons';

const CurrentWeather = ({ weather, location }) => {
  const [weatherString, setWeatherString] = useState('');
  const [iconString, setIconString] = useState('');

  const windDirection = weather
    ? getWindDirection(weather?.values?.windDirection)
    : '';

  useEffect(() => {
    if (weather) {
      const currentWeatherCode = weather?.values?.weatherCode;
      const weatherString = weatherCodes.weatherCode[currentWeatherCode];
      setWeatherString(weatherString);
      const iconString = getIcon(currentWeatherCode);
      setIconString(iconString);
    }
  }, [weather]);

  const WeatherVals = ({ value }) => {
    return (
      <span className="font-bold text-grey pl-2 w-[100%] overflow-visible">
        {value}
      </span>
    );
  };

  return (
    <div className="w-[100%]">
      {!weather ? (
        <div className="p-8 text-2xl font-bold h-[356px]">
          Where would you like to see the weather?
        </div>
      ) : (
        <div className="h-[356px]">
          <h3 className="font-bold text-xl"> {location?.description} </h3>
          <h1 className="text-5xl pt-2">{weatherString}</h1>
          <div className="flex justify-center items-center">
            <div>
              <img
                width="175px"
                height="175px"
                alt="weather icon"
                src={`/images/icons/${iconString}`}
              ></img>
            </div>
            <p className="p-2 pl-4 text-[120px]">
              {Math.round(weather?.values?.temperature)}°
            </p>
          </div>
          <div className="flex flex-col p-4 pt-0 ">
            <div className=" flex flex-col text-left md:pl-8">
              <p className="">
                Relative Humidity:{' '}
                <WeatherVals value={`${weather?.values?.humidity}%`} />
              </p>
              <p className="">
                Wind:{' '}
                <WeatherVals
                  value={`${windDirection} ${Math.round(
                    weather?.values?.windSpeed
                  )} mph gusting to ${Math.round(
                    weather?.values?.windGust
                  )} mph`}
                />
              </p>
              <p className="">
                Cloud Cover:{' '}
                <WeatherVals value={`${weather?.values?.cloudCover}%`} />
              </p>
              <p className="">
                Visibility:{' '}
                <WeatherVals
                  value={`${Math.round(weather?.values?.visibility)} miles`}
                />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
