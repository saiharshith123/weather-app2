import {
  Droplets,
  Wind,
  Gauge,
  Eye,
  Sunrise,
  Sunset,
} from "lucide-react";

function WeatherDetails({ weather }) {
  const sunrise = new Date(
    weather.sys.sunrise * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(
    weather.sys.sunset * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const details = [
    {
      label: "Humidity",
      value: `${weather.main.humidity}%`,
      icon: Droplets,
    },
    {
      label: "Wind Speed",
      value: `${weather.wind.speed} m/s`,
      icon: Wind,
    },
    {
      label: "Pressure",
      value: `${weather.main.pressure} hPa`,
      icon: Gauge,
    },
    {
      label: "Visibility",
      value: `${(
        weather.visibility / 1000
      ).toFixed(1)} km`,
      icon: Eye,
    },
    {
      label: "Sunrise",
      value: sunrise,
      icon: Sunrise,
    },
    {
      label: "Sunset",
      value: sunset,
      icon: Sunset,
    },
  ];

  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
      {details.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3 transition group-hover:bg-blue-100">
                <Icon
                  size={21}
                  className="text-blue-600"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500">
                  {item.label}
                </p>
                <p className="truncate font-bold text-gray-800">
                  {item.value}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WeatherDetails;