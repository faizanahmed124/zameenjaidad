import React, { useState } from 'react';

const CirclesDivs = () => {
  const [activeStatus, setActiveStatus] = useState('rent');

  return (
    <div className="flex justify-center items-center min-h-96">
      <div className="w-full max-w-6xl mx-auto my-2 p-2 bg-white rounded-lg shadow-md">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Status */}
          <div className="flex items-center space-x-3">
            <span className="font-medium text-lg">Status:</span>
            <button 
              className={`px-6 py-2 rounded-md text-lg font-medium transition-colors ${
                activeStatus === 'rent' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveStatus('rent')}
            >
              For Rent
            </button>
            <button 
              className={`px-6 py-2 rounded-md text-lg font-medium transition-colors ${
                activeStatus === 'sale' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveStatus('sale')}
            >
              For Sale
            </button>
          </div>

          {/* Property Type */}
          <div className="flex items-center space-x-3">
            <span className="font-medium text-lg">Type:</span>
            <select className="p-2 border border-gray-300 rounded-md text-lg w-40">
              <option>All Types</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-3">
            <span className="font-medium text-lg">City:</span>
            <select className="p-2 border border-gray-300 rounded-md text-lg w-40">
              <option>All Cities</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div className="flex items-center space-x-3">
            <span className="font-medium text-lg">Beds:</span>
            <select className="p-2 border border-gray-300 rounded-md text-lg w-24">
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-3">
            <span className="font-medium text-lg">Max Price:</span>
            <input 
              type="text" 
              placeholder="$" 
              className="w-32 p-2 border border-gray-300 rounded-md text-lg"
            />
          </div>

          {/* Search Button */}
          <button className="px-8 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default CirclesDivs;