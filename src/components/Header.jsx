import {
  CloudSun,
  Moon,
  Sun,
  RefreshCw,
} from "lucide-react";

function Header({
  darkMode,
  setDarkMode,
  unit,
  setUnit,
  onRefresh,
  loading,
}) {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2 text-white">
            <CloudSun size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              WeatherNow
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Real-time weather dashboard
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
            <button
              type="button"
              onClick={() => setUnit("C")}
              className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                unit === "C"
                  ? "bg-white text-blue-600 shadow-sm dark:bg-gray-700"
                  : "text-gray-500"
              }`}
            >
              °C
            </button>
            <button
              type="button"
              onClick={() => setUnit("F")}
              className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                unit === "F"
                  ? "bg-white text-blue-600 shadow-sm dark:bg-gray-700"
                  : "text-gray-500"
              }`}
            >
              °F
            </button>
          </div>

          <button
            type="button"
            onClick={onRefresh}
            disabled={loading}
            className="rounded-xl border border-gray-200 bg-white p-3 text-gray-600 transition hover:bg-gray-50 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            title="Refresh weather"
          >
            <RefreshCw
              size={19}
              className={
                loading
                  ? "animate-spin"
                  : ""
              }
            />
          </button>

          <button
            type="button"
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className="rounded-xl border border-gray-200 bg-white p-3 text-gray-600 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            title="Toggle theme"
          >
            {darkMode ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;