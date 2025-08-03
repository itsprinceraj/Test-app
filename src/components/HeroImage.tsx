export const HeroImage = ({ storeData }) => (
  <div className="relative h-80 bg-gradient-to-r from-red-900 via-red-700 to-red-600 overflow-hidden">
    {storeData?.banner ? (
      <>
        <img
          src={storeData.banner}
          alt={`${storeData.name} banner`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </>
    ) : (
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-600"></div>
    )}

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        
      </div>
    </div>
    
  </div>
);
