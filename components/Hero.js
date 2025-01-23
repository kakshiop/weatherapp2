import React, { useEffect, useState } from "react";
import { getWeather } from "../public/utils/getWeather"; // Assuming you have the utility function in the utils folder
import Searchbar from "./Searchbar";


const Hero = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Value:", searchValue);
  };
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the weather data for a specific city and country
    const fetchWeather = async () => {
      try {
        const data = await getWeather( "landon", "EN"); // Replace with desired city/country
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch weather data.");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <form onSubmit={handleSearchSubmit}>
        <Searchbar value={searchValue} onChange={handleSearchChange} />
      </form>
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 p-4 rounded-lg shadow-lg">
        <div className="space-y-6">
          {/* Current Weather */}
          <div className="extra-div-header bg-gray-700 p-4 rounded-lg">
            <h1 className="text-3xl font-bold">{weatherData.name}</h1>
            <p>Chance of rain: {weatherData?.weather[0].description || "N/A"}</p>
            <h2 className="text-6xl font-bold">{weatherData?.main.temp || "N/A"}°</h2>
          </div>

          {/* Today's Forecast */}
          <div className="extra-div-today-forecast bg-gray-700 p-4 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">Today's Forecast</h3>
            <div className="flex justify-between text-center">
              {["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"].map((time, index) => (
                <div key={index} className="extra-div-time-slot space-y-1">
                  <p>{time}</p>
                  <p>{index % 2 === 0 ? `${weatherData?.temperature?.current || "N/A"}°` : "28°"}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Air Conditions */}
          <div className="extra-div-air-conditions bg-gray-700 p-4 rounded-lg space-y-2">
            <h3 className="text-xl font-semibold">Air Conditions</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="extra-div-condition">
                <p>Real Feel</p>
                <p>{weatherData?.temperature?.feels_like || "N/A"}°</p>
              </div>
              <div className="extra-div-condition">
                <p>Wind</p>
                <p>{weatherData?.wind?.speed || "N/A"} km/h</p>
              </div>
              <div className="extra-div-condition">
                <p>Chance of Rain</p>
                <p>{weatherData?.precipitation || "N/A"}%</p>
              </div>
              <div className="extra-div-condition">
                <p>UV Index</p>
                <p>{weatherData?.uv_index || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* 7-Day Forecast */}
          <div className="extra-div-7day-forecast bg-gray-700 p-4 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">7-Day Forecast</h3>
            <div className="space-y-2">
              {weatherData?.forecast?.map((forecast, index) => (
                <div key={index} className="extra-div-day-forecast flex justify-between items-center">
                  <p>{forecast.day || "N/A"}</p>
                  <p>{forecast.condition || "N/A"}</p>
                  <p>{forecast.high || "N/A"}/{forecast.low || "N/A"}°</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;