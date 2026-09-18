import {
  useEffect,
  useState,
} from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import QuickCities from "./components/QuickCities";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import Loading from "./components/Loading";

import {
  getCurrentWeather,
  getForecast,
  getCurrentWeatherByCoords,
  getForecastByCoords,
} from "./services/weatherApi";

function App() {
  const [city, setCity] =
    useState("");
  const [weather, setWeather] =
    useState(null);
  const [forecast, setForecast] =
    useState(null);
  const [loading, setLoading] =
    useState(false);
  const [error, setError] =
    useState("");
  const [unit, setUnit] =
    useState("C");
  const [darkMode, setDarkMode] =
    useState(false);
  const [favoriteCities, setFavoriteCities] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "favoriteCities"
        );
      return saved
        ? JSON.parse(saved)
        : [];
    });

  const [recentCities, setRecentCities] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "recentCities"
        );
      return saved
        ? JSON.parse(saved)
        : [];
    });
  useEffect(() => {
    localStorage.setItem(
      "favoriteCities",
      JSON.stringify(favoriteCities)
    );
  }, [favoriteCities]);
  useEffect(() => {
    localStorage.setItem(
      "recentCities",
      JSON.stringify(recentCities)
    );
  }, [recentCities]);

  const fetchWeather = async (
    searchCity
  ) => {
    try {
      setLoading(true);
      setError("");
      const [
        weatherData,
        forecastData,
      ] = await Promise.all([
        getCurrentWeather(searchCity),
        getForecast(searchCity),
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
      setCity(weatherData.name);
      setRecentCities((previous) => {
        const filtered =
          previous.filter(
            (item) =>
              item.toLowerCase() !==
              weatherData.name.toLowerCase()
          );
        return [
          weatherData.name,
          ...filtered,
        ].slice(0, 6);
      });
    } catch (err) {
      setError(
        err.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWeather("Hyderabad");
  }, []);
  const handleSearch = (searchCity) => {
    if (!searchCity.trim()) {
      setError(
        "Please enter a city name."
      );
      return;
    }
    fetchWeather(searchCity);
  };
  const handleRefresh = () => {
    if (weather) {
      fetchWeather(weather.name);
    }
  };

  const toggleFavorite = () => {
    if (!weather) return;
    const currentCity =
      weather.name;
    setFavoriteCities((previous) => {
      if (
        previous.includes(currentCity)
      ) {
        return previous.filter(
          (city) =>
            city !== currentCity
        );
      }
      return [
        ...previous,
        currentCity,
      ];
    });
  };

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError(
        "Geolocation is not supported by your browser."
      );
      return;
    }
    setLoading(true);
    setError("");
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const {
            latitude,
            longitude,
          } = position.coords;
          const [
            weatherData,
            forecastData,
          ] = await Promise.all([
            getCurrentWeatherByCoords(
              latitude,
              longitude
            ),
            getForecastByCoords(
              latitude,
              longitude
            ),
          ]);
          setWeather(weatherData);
          setForecast(forecastData);
          setCity(weatherData.name);
        } catch (err) {
          setError(
            err.message ||
              "Unable to get your location weather."
          );
        } finally {

          setLoading(false);
        }
      },
      () => {
        setLoading(false);
        setError(
          "Location permission was denied."
        );
      }
    );
  };
  return (
    <div
      className={
        darkMode
          ? "dark"
          : ""
      }
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 transition-colors dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          unit={unit}
          setUnit={setUnit}
          onRefresh={handleRefresh}
          loading={loading}
        />
        <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <section className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-4xl">
              Check the weather
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Search any city and get real-time weather information.
            </p>
          </section>
          <div className="mb-4 flex justify-center">
            <SearchBar
              city={city}
              setCity={setCity}
              onSearch={handleSearch}
              onCurrentLocation={
                handleCurrentLocation
              }
            />
          </div>
          <div className="mb-8 flex justify-center">
            <QuickCities
              recentCities={recentCities}
              favoriteCities={
                favoriteCities
              }
              onCitySelect={
                handleSearch
              }
            />
          </div>

          {error && (
            <div className="mx-auto mb-6 max-w-2xl rounded-2xl border border-red-200 bg-red-50 p-4 text-center text-red-600 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
              <p className="font-medium">
                {error}
              </p>
              <button
                type="button"
                onClick={() =>
                  setError("")
                }
                className="mt-2 text-sm underline"
              >
                Dismiss
              </button>
            </div>
          )}
          {loading && <Loading />}
          {!loading && weather && (
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 lg:grid-cols-2">
                <WeatherCard
                  weather={weather}
                  unit={unit}
                  isFavorite={
                    favoriteCities.includes(
                      weather.name
                    )
                  }
                  onFavorite={
                    toggleFavorite
                  }
                />
                <div className="flex items-center">
                  <WeatherDetails
                    weather={weather}
                  />
                </div>
              </div>
              {forecast && (
                <section className="mt-8">
                  <Forecast
                    forecast={forecast}
                    unit={unit}
                  />
                </section>
              )}
            </div>
          )}
        </main>
        <footer className="border-t border-gray-200 py-6 text-center dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            WeatherNow • Built with ❤️ React + Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;