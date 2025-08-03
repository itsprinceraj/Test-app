export const CollectionCard = ({
    title,
    description = "",
    bgColor = "bg-gray-200",
    itemCount = 0,
  }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <div
        className={`h-48 ${bgColor} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="text-center text-white z-10">
          <div className="w-20 h-20 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-3xl">📦</span>
          </div>
          <h3 className="text-xl font-bold drop-shadow-lg">{title}</h3>
          <p className="text-sm opacity-90 mt-1">{itemCount} items</p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-center text-lg mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 text-center">{description}</p>
        )}
        <button className="w-full mt-3 bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 py-2 px-4 rounded-lg font-medium transition-colors">
          Explore Collection
        </button>
      </div>
    </div>
  );