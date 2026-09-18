import {
  Search,
  MapPin,
} from "lucide-react";

function SearchBar({
  city,
  setCity,
  onSearch,
  onCurrentLocation,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <div className="w-full max-w-3xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city..."
            className="h-12 w-full rounded-2xl border border-gray-200 bg-white px-12 text-base shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="h-12 rounded-2xl bg-blue-600 px-7 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg active:scale-95"
        >
          Search
        </button>
        <button
          type="button"
          onClick={onCurrentLocation}
          title="Use my current location"
          className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 active:scale-95"
        >
          <MapPin size={19} />
          <span className="hidden sm:inline">
            Location
          </span>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;