// import React from 'react'

// function Navbar() {
//   return (
//     <div></div>
//   )
// }

// export default Navbar
import React from "react";

const Navbar = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 p-4 rounded-lg shadow-lg">
        
        {/* Extra div for overall container */}
        <div className="space-y-6">
          
          {/* Header Section */}
          <div className="extra-div-header bg-gray-700 p-4 rounded-lg">
            <h1 className="text-3xl font-bold">Madrid</h1>
            <p>Chance of rain: 0%</p>
            <h2 className="text-6xl font-bold">31°</h2>
          </div>

          {/* Today's Forecast */}
          <div className="extra-div-today-forecast bg-gray-700 p-4 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">Today's Forecast</h3>
            <div className="flex justify-between text-center">
              {["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"].map((time, index) => (
                <div key={index} className="extra-div-time-slot space-y-1">
                  <p>{time}</p>
                  <p>{index % 2 === 0 ? "25°" : "28°"}</p>
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
                <p>30°</p>
              </div>
              <div className="extra-div-condition">
                <p>Wind</p>
                <p>0.2 km/h</p>
              </div>
              <div className="extra-div-condition">
                <p>Chance of Rain</p>
                <p>0%</p>
              </div>
              <div className="extra-div-condition">
                <p>UV Index</p>
                <p>3</p>
              </div>
            </div>
          </div>

          {/* 7-Day Forecast */}
          <div className="extra-div-7day-forecast bg-gray-700 p-4 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">7-Day Forecast</h3>
            <div className="space-y-2">
              {[
                { day: "Today", condition: "Sunny", high: 36, low: 22 },
                { day: "Tue", condition: "Sunny", high: 37, low: 21 },
                { day: "Wed", condition: "Sunny", high: 37, low: 21 },
                { day: "Thu", condition: "Cloudy", high: 37, low: 21 },
                { day: "Fri", condition: "Cloudy", high: 37, low: 21 },
                { day: "Sat", condition: "Rainy", high: 37, low: 21 },
                { day: "Sun", condition: "Storm", high: 37, low: 21 },
              ].map((forecast, index) => (
                <div key={index} className="extra-div-day-forecast flex justify-between items-center">
                  <p>{forecast.day}</p>
                  <p>{forecast.condition}</p>
                  <p>{forecast.high}/{forecast.low}°</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
