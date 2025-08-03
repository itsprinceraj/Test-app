export const Navigation = ({ activeTab, setActiveTab }) => {
    const tabs = ["Collections", "Products", "Gallery", "Reviews", "Location"];
  
    return (
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 font-medium transition-all relative ${
                activeTab === tab
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              } ${index === 0 && activeTab === tab ? "rounded-tr-xl" : ""}`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-400"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };