import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons/faTachometerAlt';
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons/faThermometerHalf';
import { faTint } from '@fortawesome/free-solid-svg-icons/faTint';
import { faWind } from '@fortawesome/free-solid-svg-icons/faWind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function App() {
  let [city, setCity] = useState('');
  let [wdetail, setWdetail] = useState();
  let getData = (e) => {
    e.preventDefault();
    if (city !== '') {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f00c38e0279b7bc85480c3fe775d518c`
      )
        .then((res) => res.json())
        .then((finalData) => {
          setWdetail(finalData);
        });
      setCity('');
    } else {
      alert('please enter city name');
    }
  };
  return (
    <>
      <div className="bg-gradient-to-br from-blue-400 to-purple-600 min-h-screen flex justify-center items-center">
        <div className="max-w-lg m-auto  bg-white p-8 rounded-md shadow-lg w-full h-auto">
          <h1 className="text-3xl font-semibold mb-6  text-green-500 text-center">
            Weather App UI using Tailwind CSS
          </h1>
          <form id="weather-form" className="mb-6 relative" onSubmit={getData}>
            <label
              htmlFor="city"
              className="block text-blue-700 font-medium mb-2"
            >
              Enter City:
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="city"
                name="city"
                className="mt-1 px-4 py-2 block w-64 h-12 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button
                type="submit"
                className="ml-1 bg-blue-500 text-white py-2 px-4 h-12 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Get Weather
              </button>
            </div>
          </form>
          {wdetail && wdetail.cod !== '404' ? (
            <>
              <h1>
                {wdetail.name}, <span>{wdetail.sys.country}</span>
              </h1>
              <div id="weather-info" className="grid grid-cols-2 gap-4">
                <div className="border rounded-md p-3 bg-yellow-200 hover:bg-yellow-300 transition-colors duration-300 ease-in-out">
                  <span className="text-gray-900 mr-1">
                    <FontAwesomeIcon
                      icon={faThermometerHalf}
                      className="text-red-500 text-lg pr-1"
                    />
                    Temperature:
                  </span>
                  <span className="text-gray-800 font-medium">
                    {}
                    {Math.round(wdetail.main.temp - 273.15)}°C
                  </span>
                </div>
                <div className="border rounded-md p-3 bg-blue-200 hover:bg-blue-300transition-colors duration-300 ease-in-out">
                  <span className="text-gray-900 mr-2">
                    <FontAwesomeIcon
                      icon={faCloudSun}
                      className="text-blue-500 text-lg pt-1 mr-1"
                    />
                    Weather:
                  </span>
                  <span className="text-gray-800 font-medium">
                    {wdetail.weather[0].description}
                  </span>
                </div>
                <div className="border rounded-md p-3 bg-green-200 hover:bg-green-300 transition-colors duration-300 ease-in-out">
                  <span className="text-gray-900 mr-2">
                    <FontAwesomeIcon
                      icon={faTint}
                      className="text-green-500 text-lg pt-1 mr-2"
                    />
                    Humidity:
                  </span>
                  <span className="text-gray-800 font-medium">
                    {wdetail.main.humidity} %
                  </span>
                </div>
                <div className="border rounded-md p-3 bg-purple-200 hover:bg-purple-300 transition-colors duration-300 ease-in-out">
                  <span className="text-gray-900 mr-2">
                    <FontAwesomeIcon
                      icon={faWind}
                      className="text-yellow-500 text-lg pt-1 mr-1"
                    />
                    Wind Speed:
                  </span>
                  <span className="text-gray-800 font-medium">
                    {wdetail.wind.speed} km/h
                  </span>
                </div>
                <div className="border rounded-md p-3 bg-red-200 hover:bg-red-300 transition-colors duration-300 ease-in-out">
                  <span className="text-gray-900 mr-2">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-indigo-500 text-lg pt-1 mr-1"
                    />
                    Visibility:
                  </span>
                  <span className="text-gray-800 font-medium">
                    {wdetail.visibility / 1000} km
                  </span>
                </div>
                <div className="border rounded-md p-3 bg-pink-200  hover:bg-pink-300 transition-colors duration-300 ease-in-out">
                  <span className="text-gray-900 mr-2">
                    <FontAwesomeIcon
                      icon={faTachometerAlt}
                      className="text-pink-500 text-lg pt-1 mr-1"
                    />
                    Pressure:
                  </span>
                  <span className="text-gray-800 font-medium">
                    {wdetail.main.pressure} hPa
                  </span>
                </div>
                <div className="border rounded-md p-3  bg-yellow-200  hover:bg-yellow-300 transition-colors duration-300 ease-in-out">
                  <span className="text-gray-900 mr-2">
                    <FontAwesomeIcon
                      icon={faSun}
                      className="text-yellow-500 text-lg pt-1 mr-1"
                    />
                    Sunrise:
                  </span>
                  <span className="text-gray-800 font-medium">
                    {new Date(wdetail.sys.sunrise * 1000).toLocaleTimeString()}
                  </span>
                </div>
                <div className="border rounded-md p-3  bg-gray-300 hover:bg-gray-400transition-colors duration-300 ease-in-out">
                  <span className="text-gray-900 mr-2">
                    <FontAwesomeIcon
                      icon={faMoon}
                      className="text-yellow-500 text-lg pt-3 mr-1"
                    />
                    Sunset:
                  </span>
                  <span className="text-gray-800 font-medium">
                    {new Date(wdetail.sys.sunset * 1000).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-center">
              <h3>{wdetail && wdetail.message}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
