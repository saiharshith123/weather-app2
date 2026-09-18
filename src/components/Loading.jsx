function Loading() {

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-600" />
      </div>
      <p className="mt-5 font-medium text-gray-600">
        Fetching latest weather...
      </p>
      <p className="mt-1 text-sm text-gray-400">
        Please wait a moment
      </p>
    </div>
  );
}

export default Loading;