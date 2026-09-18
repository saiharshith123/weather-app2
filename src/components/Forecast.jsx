import { useState } from "react";

function Forecast({ forecast, unit }) {
  const [selectedDay, setSelectedDay] =
    useState(null);
  const dailyForecast = [];
  const usedDates = new Set();
  forecast.list.forEach((item) => {
    const date = new Date(
      item.dt * 1000
    );
    const dateKey =
      date.toISOString().split("T")[0];
    if (!usedDates.has(dateKey)) {
      usedDates.add(dateKey);
      dailyForecast.push(item);
    }
  });
  const visibleForecast =
    dailyForecast.slice(0, 5);
  const convertTemperature = (temp) => {
    if (unit === "C") {
      return Math.round(temp);
    }
    return Math.round(
      temp * 9 / 5 + 32
    );
  };

  return (
    <div className="w-full">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            5-Day Forecast
          </h2>
          <p className="text-sm text-gray-500">
            Click a day for more information
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {visibleForecast.map((day) => {
          const date = new Date(
            day.dt * 1000
          );
          const isSelected =
            selectedDay?.dt === day.dt;
          return (
            <button
              type="button"
              key={day.dt}
              onClick={() =>
                setSelectedDay(day)
              }
              className={`rounded-2xl p-5 text-center transition duration-200 ${
                isSelected
                  ? "bg-blue-600 text-white shadow-xl -translate-y-1"
                  : "bg-white text-gray-800 shadow-sm hover:-translate-y-1 hover:shadow-lg"
              }`}
            >
              <p className="font-bold">
                {date.toLocaleDateString(
                  "en-US",
                  {
                    weekday: "short",
                  }
                )}
              </p>
              <p
                className={`text-xs ${
                  isSelected
                    ? "text-blue-100"
                    : "text-gray-400"
                }`}
              >
                {date.toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                  }
                )}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                className="mx-auto my-3 h-16 w-16"
              />
              <p className="text-2xl font-bold">
                {convertTemperature(day.main.temp)}
                °{unit}
              </p>
              <p
                className={`mt-2 text-xs capitalize ${
                  isSelected
                    ? "text-blue-100"
                    : "text-gray-500"
                }`}
              >
                {day.weather[0].description}
              </p>
            </button>
          );
        })}
      </div>

      {selectedDay && (
        <div className="mt-5 rounded-2xl bg-white p-5 shadow-md">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Selected forecast
              </p>
              <h3 className="text-xl font-bold text-gray-800">
                {new Date(
                  selectedDay.dt * 1000
                ).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </h3>
            </div>

            <div className="flex items-center gap-5">
              <div>
                <p className="text-xs text-gray-400">
                  Temperature
                </p>
                <p className="font-bold">
                  {convertTemperature(
                    selectedDay.main.temp
                  )}
                  °{unit}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Humidity
                </p>
                <p className="font-bold">
                  {selectedDay.main.humidity}%
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Wind
                </p>
                <p className="font-bold">
                  {selectedDay.wind.speed} m/s
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Forecast;