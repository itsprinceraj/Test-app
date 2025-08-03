"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Star } from "lucide-react";

export const ReviewSection = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border">
        <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
        <div className="flex items-center gap-4 mb-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">4.5</div>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 mt-1">Based on 127 reviews</div>
          </div>
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-3 mb-2">
                <span className="text-sm w-8">{rating}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{
                      width: `${
                        rating === 5
                          ? 65
                          : rating === 4
                          ? 25
                          : rating === 3
                          ? 8
                          : 2
                      }%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 w-8">
                  {rating === 5 ? 82 : rating === 4 ? 32 : rating === 3 ? 10 : 3}
                </span>
              </div>
            ))}
          </div>
        </div>
  
        <div className="space-y-4">
          {[
            {
              name: "Priya Sharma",
              rating: 5,
              comment:
                "Excellent quality products! My daughter loves the clothes from here. Great customer service too.",
              date: "2 days ago",
              verified: true,
            },
            {
              name: "Rajesh Kumar",
              rating: 4,
              comment:
                "Good variety and reasonable prices. Delivery was on time. Will definitely order again.",
              date: "1 week ago",
              verified: true,
            },
            {
              name: "Sneha Patel",
              rating: 5,
              comment:
                "Amazing store! The kids collection is fantastic. Highly recommended for quality children's wear.",
              date: "2 weeks ago",
              verified: false,
            },
          ].map((review, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-medium">
                      {review.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.name}</span>
                      {review.verified && (
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
  
        <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
          Write a Review
        </button>
      </div>
    </div>
  );