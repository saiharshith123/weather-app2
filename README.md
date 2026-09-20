# 🌦️ WeatherNow -- React Weather App

A responsive and interactive weather dashboard built with **React,
JavaScript, Tailwind CSS, and the OpenWeatherMap REST API**.

## 📌 Project Overview

WeatherNow is a practical React frontend project that demonstrates
real-world API integration, React Hooks, state management, reusable
components, responsive UI, browser geolocation, and client-side
persistence.

### Resume Description

> Developed a responsive React application using JavaScript, React
> Hooks, state management, API integration, and Tailwind CSS to display
> real-time weather information.

## ✨ Features

-   🔍 Search weather by city
-   📍 Get weather using current browser location
-   🌡️ Celsius / Fahrenheit conversion
-   ⭐ Add and remove favorite cities
-   🕘 Recent city searches
-   🔄 Refresh current weather
-   🌙 Light / Dark mode
-   📅 Interactive 5-day forecast
-   💧 Humidity
-   💨 Wind speed
-   ⏱️ Atmospheric pressure
-   👁️ Visibility
-   🌅 Sunrise and sunset
-   ⏳ Loading state
-   ❌ API and validation error handling
-   📱 Responsive mobile, tablet, and desktop design

## 🛠️ Technologies Used

  Technology                Purpose
  ------------------------- --------------------------------
  React                     Frontend UI
  JavaScript                Application logic
  React Hooks               State and lifecycle management
  Tailwind CSS              Responsive styling
  OpenWeatherMap API        Weather and forecast data
  Fetch API                 REST API communication
  Lucide React              UI icons
  Vite                      Development and build tool
  Local Storage             Favorites and recent searches
  Browser Geolocation API   Current-location weather

## 🧠 React Concepts Demonstrated

### useState

Used for city, weather, forecast, loading, error, temperature unit, dark
mode, favorites, and recent searches.

``` javascript
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
```

### useEffect

Used for the initial weather request and client-side persistence.

``` javascript
useEffect(() => {
  fetchWeather("Hyderabad");
}, []);
```

### Props

Reusable components receive data and event handlers from `App.jsx`.

``` text
App
 ├── Header
 ├── SearchBar
 ├── QuickCities
 ├── WeatherCard
 ├── WeatherDetails
 └── Forecast
```

### Conditional Rendering

``` javascript
{loading && <Loading />}
```

``` javascript
{!loading && weather && (
  <WeatherCard weather={weather} />
)}
```

### List Rendering

``` javascript
details.map((item) => (
  <div key={item.label}>
    ...
  </div>
))
```

## 🌐 API Integration

The application uses the OpenWeatherMap REST API for:

-   Current weather by city
-   5-day forecast
-   Current weather by coordinates
-   Forecast by coordinates

Current weather and forecast requests are handled concurrently:

``` javascript
const [weatherData, forecastData] = await Promise.all([
  getCurrentWeather(searchCity),
  getForecast(searchCity),
]);
```

## 📂 Project Structure

``` text
weather-app/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── QuickCities.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── WeatherDetails.jsx
│   │   ├── Forecast.jsx
│   │   └── Loading.jsx
│   │
│   ├── services/
│   │   └── weatherApi.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### 1. Clone the repository

``` bash
git clone https://github.com/YOUR_USERNAME/weather-app.git
cd weather-app
```

### 2. Install dependencies

``` bash
npm install
```

If required:

``` bash
npm install lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

### 3. Configure the API key

Create a `.env` file in the project root:

``` env
VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
```

Get an API key from OpenWeatherMap:

https://openweathermap.org/

**Important:** Never commit your API key to GitHub. Add `.env` to
`.gitignore`.

### 4. Run the application

``` bash
npm run dev
```

Open the Vite URL shown in the terminal, normally:

``` text
http://localhost:5173
```

## 🖥️ Application Workflow

``` text
User
  ↓
Search City
  ↓
SearchBar
  ↓
App.jsx
  ↓
Weather API Service
  ├── Current Weather
  └── Forecast
  ↓
React State
  ↓
Reusable Components
  ↓
Responsive Tailwind UI
```

## ⭐ Favorite Cities

Users can add or remove a city using the star button.

Favorites are persisted with:

``` javascript
localStorage
```

## 🕘 Recent Searches

Recently searched cities are displayed as quick-search buttons so users
can search them again without retyping.

## 🌡️ Temperature Conversion

The UI supports Celsius and Fahrenheit.

``` text
°F = (°C × 9/5) + 32
```

The conversion is performed on the frontend, so changing units does not
require another API request.

## 📍 Current Location

The browser Geolocation API obtains latitude and longitude:

``` javascript
navigator.geolocation.getCurrentPosition(...)
```

The coordinates are then sent to the weather API.

## 🌙 Dark Mode

The application provides a light/dark theme toggle using Tailwind
dark-mode classes.

## 📅 Interactive Forecast

Users can click a forecast card to view additional information for the
selected day.

## ⚠️ Error Handling

The application handles:

-   Empty search
-   Invalid city
-   City not found
-   Invalid API key
-   API request failure
-   Location permission denied
-   Unsupported browser geolocation

Example:

``` javascript
try {
  // API request
} catch (error) {
  setError(error.message);
} finally {
  setLoading(false);
}
```

## 📱 Responsive Design

The UI uses Tailwind responsive utilities to adapt to:

``` text
Mobile → Tablet → Desktop
```

Examples include:

``` text
grid-cols-1
sm:grid-cols-2
lg:grid-cols-5
```

## 🧪 Testing Checklist

-   [ ] Search a valid city
-   [ ] Search an invalid city
-   [ ] Submit an empty search
-   [ ] Switch °C / °F
-   [ ] Add and remove favorites
-   [ ] Refresh the browser
-   [ ] Verify favorites persist
-   [ ] Test recent searches
-   [ ] Click a quick-search city
-   [ ] Click a forecast card
-   [ ] Refresh weather
-   [ ] Test current location
-   [ ] Test denied location permission
-   [ ] Test dark mode
-   [ ] Test loading state
-   [ ] Test mobile layout
-   [ ] Test desktop layout
-   [ ] Verify `.env` is excluded from Git

## 🔮 Future Improvements

-   City autocomplete
-   Hourly forecast
-   Temperature charts
-   Interactive weather map
-   Air quality information
-   Weather alerts
-   Multiple-language support
-   Better daily forecast aggregation
-   AbortController for cancelling stale requests
-   Unit and integration tests
-   Additional accessibility improvements
-   Production deployment

## 📚 Learning Outcomes

This project provides practical experience with:

-   React components
-   JSX
-   Props
-   State
-   useState
-   useEffect
-   Event handling
-   Conditional rendering
-   List rendering
-   REST API integration
-   Fetch API
-   Async/await
-   Promise.all()
-   Error handling
-   Local Storage
-   Browser Geolocation
-   Tailwind CSS
-   Responsive design
-   Component architecture
-   Environment variables
-   Vite

## 💼 Resume Project Entry

**Real-Time Weather Dashboard \| React, JavaScript, REST API, Tailwind
CSS**

> Developed a responsive weather dashboard using React Hooks
> (`useState`, `useEffect`) and reusable components. Integrated
> OpenWeatherMap REST APIs to fetch real-time weather and multi-day
> forecast data, implementing asynchronous API handling, loading/error
> states, city search, current-location weather, favorites, recent
> searches, Celsius/Fahrenheit conversion, dark mode, and interactive
> forecast cards with responsive Tailwind CSS.

## 👨‍💻 Author

**Bachina Sai Harshith**

-   GitHub: https://github.com/saiharshith123
-   LinkedIn:
    https://www.linkedin.com/in/bachina-sai-harshith-b06a50208/

## 📄 License

This project is intended for learning, portfolio, and educational
purposes.
