const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getCurrentWeather(city) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("City not found. Please check the city name.");
    }
    if (response.status === 401) {
      throw new Error("Invalid weather API key.");
    }
    throw new Error("Unable to fetch weather information.");
  }
  return response.json();
}

export async function getForecast(city) {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("Unable to fetch forecast.");
  }
  return response.json();
}

export async function getCurrentWeatherByCoords(
  latitude,
  longitude
) {
  const response = await fetch(
    `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("Unable to fetch current location weather.");
  }
  return response.json();
}

export async function getForecastByCoords(
  latitude,
  longitude
) {
  const response = await fetch(
    `${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("Unable to fetch forecast.");
  }
  return response.json();
}