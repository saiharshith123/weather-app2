import {
  MapPin,
  Star,
  Thermometer,
} from "lucide-react";

function WeatherCard({
  weather,
  unit,
  isFavorite,
  onFavorite,
}) {

  const condition = weather.weather[0];
  const temperature =
    unit === "C"
      ? Math.round(weather.main.temp)
      : Math.round(
          weather.main.temp * 9 / 5 + 32
        );
  const feelsLike =
    unit === "C"
      ? Math.round(weather.main.feels_like)
      : Math.round(
          weather.main.feels_like * 9 / 5 + 32
        );

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-7 text-white shadow-xl">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
      <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-white/10" />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin size={20} />
          <div>
            <h2 className="text-xl font-bold">
              {weather.name}
            </h2>
            <p className="text-sm text-blue-100">
              {weather.sys.country}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onFavorite}
          className="rounded-full bg-white/10 p-3 transition hover:bg-white/20 active:scale-90"
          title={
            isFavorite
              ? "Remove favorite"
              : "Add favorite"
          }
        >
          <Star
            size={22}
            fill={
              isFavorite
                ? "currentColor"
                : "none"
            }
          />
        </button>
      </div>

      <div className="relative mt-7 text-center">
        <img
          src={`https://openweathermap.org/img/wn/${condition.icon}@4x.png`}
          alt={condition.description}
          className="mx-auto h-32 w-32 drop-shadow-lg"
        />
        <div className="text-7xl font-bold tracking-tight">
          {temperature}°{unit}
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 text-blue-100">
          <Thermometer size={19} />
          <span>
            Feels like {feelsLike}°{unit}
          </span>

        </div>
        <p className="mt-3 text-lg capitalize text-white">
          {condition.description}
        </p>
      </div>

      <div className="relative mt-7 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm">
          <p className="text-sm text-blue-100">
            Minimum
          </p>
          <p className="mt-1 text-xl font-bold">
            {Math.round(weather.main.temp_min)}
            °{unit}
          </p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm">
          <p className="text-sm text-blue-100">
            Maximum
          </p>
          <p className="mt-1 text-xl font-bold">
            {Math.round(weather.main.temp_max)}
            °{unit}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;