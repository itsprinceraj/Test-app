import { Globe, Mail, MapPin, Phone, Star } from "lucide-react";

export const Header = ({ storeData }) => (
    <div className="bg-gray-100 p-6">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 bg-gray-300 rounded-3xl flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
          {storeData?.logo ? (
            <img
              src={storeData.logo}
              alt={storeData.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-400 rounded-lg"></div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
                {storeData?.name}
              </h1>
              <p className="text-gray-600 text-base mt-1">
                {storeData?.tagline || `Premium ${storeData?.caterTo} Store`}
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-500 mt-3">
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  www.{storeData?.name?.toLowerCase() || "apstore"}.com
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {storeData?.owner?.email || "contact@store.com"}
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {storeData?.owner?.mobileNumber
                    ? `+${storeData.owner.mobileNumber}`
                    : "+91 9876543210"}
                </span>
                <span className="">
                  #{storeData?.name} #{storeData?.caterTo}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < (storeData?.overallRating || 5)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                {storeData?.mode || "Online"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-1">
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="font-medium">Address:</span>
          <span className="ml-2">
            {storeData?.address?.details || "Location not specified"}
          </span>
          <div className="flex-1 border-b border-dotted border-gray-500 mx-4"></div>
        </div>
      </div>
    </div>
  );
