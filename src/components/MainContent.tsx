import { MapPin } from "lucide-react";
import { CollectionCard } from "./CollectionCard";
import { GallerySection } from "./GallerySection";
import { ReviewSection } from "./ReviewSection";
import { ProductCard } from "./ProductCard";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export const MainContent = ({ activeTab, storeData }) => {
    const renderContent = () => {
      switch (activeTab) {
        case "Collections":
          if (storeData?.collections && storeData.collections.length > 0) {
            return (
              <div className="grid grid-cols-2 gap-8">
                {storeData.collections.map((collection, index) => (
                  <CollectionCard
                    key={index}
                    title={collection.name || `Collection ${index + 1}`}
                    description={collection.description}
                    itemCount={
                      collection.itemCount || Math.floor(Math.random() * 50) + 10
                    }
                    bgColor={`bg-gradient-to-br from-${
                      ["blue", "purple", "green", "amber", "red", "indigo"][
                        index % 6
                      ]
                    }-400 to-${
                      ["blue", "purple", "green", "amber", "red", "indigo"][
                        index % 6
                      ]
                    }-600`}
                  />
                ))}
              </div>
            );
          }
          return (
            <div className="grid grid-cols-2 gap-8">
              <CollectionCard
                title="WINTER COLLECTION"
                description="Warm and cozy winter wear for kids"
                itemCount={24}
                bgColor="bg-gradient-to-br from-blue-400 to-blue-600"
              />
              <CollectionCard
                title="WESTERN WEAR"
                description="Trendy western outfits"
                itemCount={18}
                bgColor="bg-gradient-to-br from-amber-400 to-orange-600"
              />
              <CollectionCard
                title="ETHNIC WEAR"
                description="Traditional ethnic clothing"
                itemCount={15}
                bgColor="bg-gradient-to-br from-green-400 to-emerald-600"
              />
              <CollectionCard
                title="PARTY COLLECTION"
                description="Special occasion outfits"
                itemCount={12}
                bgColor="bg-gradient-to-br from-purple-400 to-purple-600"
              />
            </div>
          );
  
        case "Products":
          if (storeData?.products && storeData.products.length > 0) {
            return (
              <div className="grid grid-cols-2 gap-8">
                {storeData.products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            );
          }
          return (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No Products Available
              </h3>
              <p className="text-gray-500">
                Products will be displayed here once added to the store.
              </p>
            </div>
          );
  
        case "Gallery":
          return <GallerySection />;
  
        case "Reviews":
          return <ReviewSection />;
  
        case "Location":
          return (
            <div className="bg-white rounded-xl p-6 border">
              <h3 className="text-xl font-semibold mb-4">Store Location</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium">{storeData?.address?.details}</p>
                    <p className="text-gray-600">
                      {storeData?.address?.city}, {storeData?.address?.state} -{" "}
                      {storeData?.address?.pincode}
                    </p>
                    <p className="text-gray-600">{storeData?.address?.country}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <div className=" bg-gray-200 rounded-lg flex items-center justify-center">
                    <MapView />
                  </div>
                </div>
              </div>
            </div>
          );
  
        default:
          return null;
      }
    };
  
    return <div>{renderContent()}</div>;
  };