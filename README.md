🌦️ Weather App 2

A responsive and interactive weather dashboard built with React,
JavaScript, Tailwind CSS, and the OpenWeatherMap REST API.

The application allows users to search for cities, view real-time
weather information and forecasts, save favorite cities, access recent
searches, switch temperature units, use their current location, refresh
weather data, and toggle between light and dark themes.

📌 Project Overview

Project Name: weather-app2

Project Type: React Frontend Web Application

Primary Goal: Demonstrate React Hooks, state management, REST
API integration, reusable components, asynchronous JavaScript,
browser APIs, local storage, and responsive Tailwind CSS design.

✨ Features

🔍 Search weather by city name

🌡️ Real-time temperature and feels-like temperature

🌤️ Current weather condition and icon

📊 Minimum and maximum temperature

💧 Humidity

💨 Wind speed

⏱️ Atmospheric pressure

👁️ Visibility

🌅 Sunrise and 🌇 sunset

📅 5-day weather forecast

🖱️ Interactive forecast cards

⭐ Favorite cities

🕘 Recent searches

🌡️ Celsius / Fahrenheit switching

🔄 Refresh weather data

📍 Current-location weather

🌙 Dark mode / ☀️ light mode

⏳ Loading states

❌ Error handling

📱 Responsive mobile, tablet, and desktop UI

🛠️ Technology Stack

Technology           Purpose

React                Frontend UI
JavaScript           Application logic
Vite                 Development and build tool
Tailwind CSS         Responsive styling
OpenWeatherMap API   Weather and forecast data
Fetch API            REST API communication
React Hooks          State and lifecycle management
Lucide React         UI icons
Local Storage        Favorites and recent searches
Geolocation API      Current-location weather

🏗️ Project Structure

weather-app2/
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
├── package-lock.json
└── vite.config.js

🔄 Application Flow

User
 │
 ▼
Search City
 │
 ▼
SearchBar Component
 │
 ▼
App.jsx
 │
 ▼
weatherApi.js
 │
 ├───────────────┐
 ▼               ▼
Current API   Forecast API
 │               │
 └───────┬───────┘
         ▼
    React State
         │
 ┌───────┼────────────┐
 ▼       ▼            ▼
Weather Details   Forecast
Card
 │
 ▼
Responsive Tailwind UI

⚛️ React Concepts Demonstrated

useState

Used to manage city, weather, forecast, loading, error, temperature
unit, theme, favorites, recent searches, and selected forecast state.

Example:

const [city, setCity] = useState("");
const [weather, setWeather] = useState(null);
const [forecast, setForecast] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [unit, setUnit] = useState("C");
const [darkMode, setDarkMode] = useState(false);

useEffect

Used for the initial weather request and client-side persistence.

useEffect(() => {
  fetchWeather("Hyderabad");
}, []);

🌐 API Integration

The application uses the OpenWeatherMap API.

Main requests:

GET /weather?q={city}
GET /forecast?q={city}
GET /weather?lat={latitude}&lon={longitude}
GET /forecast?lat={latitude}&lon={longitude}

API communication is centralized in:

src/services/weatherApi.js

Promise.all() is used to request current weather and forecast data
together.

🔐 Environment Variables

Create a .env file in the project root:

VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE

Get an API key from:

https://openweathermap.org/

Important: Never commit your API key to GitHub.

Add this to .gitignore:

.env

🚀 Installation

1. Clone the repository

git clone https://github.com/YOUR_USERNAME/weather-app2.git

2. Enter the project

cd weather-app2

3. Install dependencies

npm install

4. Configure the API key

Create .env:

VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE

5. Start the development server

npm run dev

Open:

http://localhost:5173

📦 Important Packages

npm install lucide-react
npm install -D tailwindcss @tailwindcss/vite

🧩 Component Responsibilities

Component                           Responsibility

App.jsx                           State management, API
orchestration, event handling,
composition

Header.jsx                        Theme, unit switch, refresh

SearchBar.jsx                     City search and current-location
action

QuickCities.jsx                   Recent and favorite city shortcuts

WeatherCard.jsx                   Main current weather

WeatherDetails.jsx                Humidity, wind, pressure,
visibility, sunrise, sunset

Forecast.jsx                      5-day forecast and selected-day
details

Loading.jsx                       Loading state

weatherApi.js                     REST API service layer

🎨 UI/UX

The UI uses Tailwind CSS for:

Responsive layouts

Flexbox and CSS Grid

Cards and spacing

Hover and active states

Loading animations

Light/dark themes

Mobile-friendly controls

⭐ Favorite Cities

Users can add or remove a city using the star button.

Favorites are stored in browser localStorage, allowing them to remain
available after a refresh.

🕘 Recent Searches

Recently searched cities are displayed as quick-search buttons.

Example:

[Hyderabad] [Mumbai] [Delhi]
[Chennai]   [Bengaluru]

🌡️ Celsius / Fahrenheit

The application supports:

°C
°F

Celsius-to-Fahrenheit conversion:

F = C * 9 / 5 + 32;

The conversion is handled on the frontend without another API request.

📍 Current Location

The browser Geolocation API provides latitude and longitude:

navigator.geolocation.getCurrentPosition(...)

Flow:

Browser
   ↓
Location permission
   ↓
Latitude + Longitude
   ↓
Weather API
   ↓
WeatherNow Dashboard

🔄 Refresh

The refresh button requests the latest weather information for the
current city and shows a loading animation while the request is running.

🌙 Dark Mode

Users can switch between light and dark themes using the header control
and Tailwind dark-mode classes.

⏳ Loading and Error Handling

The application handles:

Empty city input

City not found

Invalid API key

API failures

Location permission denial

Unsupported geolocation

Loading states

🧪 Testing Checklist

Search a valid city

Search an invalid city

Submit an empty search

Switch °C / °F

Refresh weather

Add/remove favorite

Search multiple cities

Use quick-search buttons

Refresh browser and verify saved favorites/recent searches

Use current location

Test denied location permission

Click forecast cards

Test loading state

Test API error state

Test light/dark mode

Test mobile, tablet, and desktop layouts

Verify .env is excluded from Git

📈 Future Enhancements

🔎 City autocomplete

📊 Temperature charts

🌧️ Hourly precipitation charts

🌬️ Air-quality information

🗺️ Weather map

🌍 More detailed international city support

🔔 Weather alerts

🎨 Weather-condition-based backgrounds

🧪 Unit and component tests

⚡ AbortController request cancellation

♻️ Custom useWeather() hook

🚀 CI/CD deployment workflow

💼 Skills Demonstrated

HTML
CSS
JavaScript
React
React Hooks
State Management
Component Architecture
REST APIs
API Integration
Async/Await
Promise.all()
Conditional Rendering
List Rendering
Props
Event Handling
Tailwind CSS
Responsive Design
Local Storage
Browser Geolocation
Error Handling
Loading States
Git & GitHub

📝 Resume Description

Real-Time Weather Dashboard | React, JavaScript, REST API, Tailwind CSS

Developed a responsive weather dashboard using React Hooks
(useState, useEffect) and reusable components. Integrated
OpenWeatherMap REST APIs to fetch real-time weather and multi-day
forecast data, implementing asynchronous API handling, loading/error
states, city search, current-location weather, favorites, recent
searches, Celsius/Fahrenheit conversion, dark mode, and interactive
forecast cards with responsive Tailwind CSS.

🎤 Interview Explanation

I developed Weather App 2, a responsive weather dashboard using React,
JavaScript, Tailwind CSS, and the OpenWeatherMap REST API. I divided
the application into reusable components such as SearchBar,
WeatherCard, WeatherDetails, Forecast, and Header. I used useState for
weather, forecast, loading, error, unit, theme, favorites, and
recent-search state, while useEffect handles the initial API request
and persistence. I integrated the REST API using async/await and
Promise.all. I also implemented browser geolocation,
Celsius/Fahrenheit conversion, localStorage-based favorites and recent
searches, refresh functionality, dark mode, and interactive forecast
cards.

📷 Screenshots

After uploading a screenshot to your repository, use:

![Weather App Screenshot](screenshots/weather-app.png)

Recommended structure:

weather-app2/
└── screenshots/
    └── weather-app.png

📤 GitHub Commands

git init
git add .
git commit -m "Initial commit - Weather App 2"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/weather-app2.git
git push -u origin main

🔒 Security Note

Never commit .env or expose your API key in the repository.

Before pushing:

git status

Confirm that .env is not tracked.

For production, review your weather provider's API-key restrictions and
consider a backend/proxy architecture when appropriate.

📄 License

This project is intended for educational, portfolio, and demonstration
purposes.

You may add an MIT License if you want to publish it as an open-source
project.

👨‍💻 Author

Bachina Sai Harshith

GitHub: https://github.com/saiharshith123
