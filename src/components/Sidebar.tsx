import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export const Sidebar = ({ storeData }) => (
  <div className="space-y-6">
    {/* Store Info Card */}
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="text-center mb-6">
        <h4 className="font-semibold text-lg mb-2">Store Information</h4>
        <p className="text-sm text-gray-600">
          Cater to {storeData?.caterTo || "Everyone"} •{" "}
          {storeData?.customerGender || "All Genders"}
        </p>
      </div>

      <div className="h-36 bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="text-center z-10">
          <div className="grid grid-cols-6 gap-2 mb-4 opacity-60">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
            ))}
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-lg">
            Rate Card
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h5 className="font-medium text-gray-900 mb-3">Business Hours</h5>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Monday - Friday</span>
              <span className="font-medium">9:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saturday</span>
              <span className="font-medium">10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sunday</span>
              <span className="text-red-600 font-medium">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Contact Information */}
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
      <div className="border-b border-dotted border-gray-300 mb-6"></div>

      <div className="space-y-4 mb-6">
        <p className="text-sm text-gray-600 leading-relaxed">
          {storeData?.description ||
            "Premium quality store offering the best products for kids. We provide excellent customer service and high-quality products at affordable prices."}
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-purple-600" />
            <span className="text-gray-700">
              {storeData?.owner?.mobileNumber
                ? `+${storeData.owner.mobileNumber}`
                : "+91 9876543210"}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MessageCircle className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">
              {storeData?.owner?.whatsappNumber
                ? `+${storeData.owner.whatsappNumber}`
                : "+91 9876543210"}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700">
              {storeData?.owner?.email || "contact@store.com"}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-red-600" />
            <span className="text-gray-700">
              {storeData?.address?.city}, {storeData?.address?.state}
            </span>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
            <Facebook className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all">
            <Instagram className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 bg-black hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors">
            <span className="text-white text-sm font-bold">X</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);
