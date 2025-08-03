"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Camera } from "lucide-react";

export const GallerySection = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border">
        <h3 className="text-xl font-semibold mb-4">Store Gallery</h3>
        <div className="grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gradient-to-br from-purple-200 to-purple-400 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Camera className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors">
          View All Photos
        </button>
      </div>
    </div>
  );