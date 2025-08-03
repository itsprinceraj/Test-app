"use client";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { HeroImage } from "../components/HeroImage";
import { Navigation } from "../components/Navigation";
import { MainContent } from "../components/MainContent";

import React, { useState, useEffect } from "react";

// API Data Hook
const useStoreData = () => {
  const [storeData, setStoreData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await fetch(
          "https://api.hdsenterprise.com/api/v1/store/slug?slug=Apstore"
        );
        const result = await response.json();
        setStoreData(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching store data:", error);
        // setStoreData({
        //   name: "TONY the TAILOR ",
        //   tagline: "Quality Products for Kids",
        //   logo: "https://cdn.hdsenterprise.com/store_logo/67446534-df4b-4c54-ba72-ccf1d82cea3d.jpg",
        //   banner:
        //     "https://cdn.hdsenterprise.com/store_banner/39f566b8-0bef-41d7-a11c-fb224cf5bbdc.jpg",
        //   description: "Premium quality products",
        //   caterTo: "Kids",
        //   customerGender: "Female",
        //   mode: "Online",
        //   overallRating: 4,
        //   address: {
        //     details: "Kaithal, Haryana 136027, India",
        //     city: "Kaithal",
        //     state: "Haryana",
        //     pincode: "136027",
        //   },
        //   owner: {
        //     name: "anmolp",
        //     mobileNumber: "918888888888",
        //     whatsappNumber: "918888888888",
        //     email: "anmol.await@gmail.com",
        //   },
        //   products: [],
        //   collections: [],
        // });
      }
      setLoading(false);
    };

    fetchStoreData();
  }, []);

  return { storeData, loading };
};

const APStorePage = () => {
  const { storeData, loading } = useStoreData();
  const [activeTab, setActiveTab] = useState("Collections");

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading store data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Header storeData={storeData} />
        <HeroImage storeData={storeData} />
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <MainContent activeTab={activeTab} storeData={storeData} />
            </div>
            <div>
              <Sidebar storeData={storeData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APStorePage;
