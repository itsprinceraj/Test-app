"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Heart } from "lucide-react";

export const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {product.productImages && product.productImages[0] ? (
          <img
            src={product.productImages[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-400 flex items-center justify-center">
            <span className="text-purple-700 font-medium text-lg">
              {product.name}
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 flex gap-2">
          {product.isRental && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Rental
            </span>
          )}
          <button className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition-colors">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-2 capitalize text-lg">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-purple-600">
              ₹{product.mrp}
            </span>
            {product.costPrice && product.costPrice !== product.mrp && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ₹{product.costPrice}
              </span>
            )}
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Stock</div>
            <div className="font-medium text-gray-700">
              {product.totalStock} {product.unit}s
            </div>
          </div>
        </div>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
  