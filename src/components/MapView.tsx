"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const center = {
  lat: 28.6139,
  lng: 77.2090,
};

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function MapView() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  );
}
