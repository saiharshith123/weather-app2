function QuickCities({
  recentCities,
  favoriteCities,
  onCitySelect,
}) {

  const cities = [
    ...new Set([
      ...favoriteCities,
      ...recentCities,
    ]),
  ].slice(0, 6);
  if (cities.length === 0) {
    return null;
  }
  
  return (
    <div className="w-full max-w-3xl">
      <p className="mb-2 text-sm font-medium text-gray-500">
        Quick search
      </p>
      <div className="flex flex-wrap gap-2">
        {cities.map((city) => (
          <button
            type="button"
            key={city}
            onClick={() =>
              onCitySelect(city)
            }
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 active:scale-95"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickCities;