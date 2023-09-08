import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GoogleMaps from './components/MapsAutoComplete';
import CurrentWeather from './components/CurrentWeather';

function App() {
  const [weather, setWeather] = useState('');
  const [latLng, setLatLng] = useState('');
  const [value, setValue] = useState(null);

  useEffect(() => {
    async function getWeather(latLng) {
      const { latitude, longitude } = latLng;
      const { data } = await axios.get(
        `https://api.tomorrow.io/v4/weather/realtime?location=${latitude},${longitude}&units=imperial&apikey=${process.env.TOMORROW_IO_API_KEY}&fields=sunsetTime%2CsunriseTime%2weatherCodeNight%2weatherCodeDay`
      );
      setWeather(data.data);
    }

    if (latLng) {
      getWeather(latLng);
    }
  }, [latLng]);

  //clear weather data if input is cleared
  useEffect(() => {
    if (!value) {
      setWeather('');
    }
  }, [value]);

  return (
    <div className="App flex justify-center">
      <div className="sm:m-8  mt-8 bg-white rounded-3xl w-[100%] md:max-w-[768px]">
        <div className="m-4 p-4 text-3xl text-center font-bold capitalize">
          My Weather App
        </div>
        <div className="flex flex-row justify-center  m-4 ">
          {' '}
          <GoogleMaps
            latLng={latLng}
            setLatLng={setLatLng}
            value={value}
            setValue={setValue}
          />
        </div>
        <CurrentWeather location={value} weather={weather} />
        <div className="flex justify-end p-3">
          <img
            width="200px"
            height="200px"
            alt="powered by tomorrow.io"
            src="/images/Powered_by_Tomorrow-Black.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
