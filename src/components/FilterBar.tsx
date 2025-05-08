'use client';

import React from 'react';

const FilterBar: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-sm shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* Name Filter */}
        <div className="relative">
          <select className="w-full border border-gray-200 rounded px-3 py-2 appearance-none text-sm focus:outline-none focus:border-[#ee4d2d] bg-white">
            <option>Name</option>
            <option>Price: High to Low</option>
            <option>Price: Low to High</option>
            <option>Sales: High to Low</option>
            <option>Sales: Low to High</option>
          </select>
          <i className="fas fa-chevron-down absolute right-3 top-3 text-gray-400 pointer-events-none"></i>
        </div>

        {/* Sales 30D Filter */}
        <div className="relative">
          <select className="w-full border border-gray-200 rounded px-3 py-2 appearance-none text-sm focus:outline-none focus:border-[#ee4d2d] bg-white">
            <option>Sales 30D ▼</option>
            <option>High to Low</option>
            <option>Low to High</option>
          </select>
          <i className="fas fa-chevron-down absolute right-3 top-3 text-gray-400 pointer-events-none"></i>
        </div>

        {/* Value Filter */}
        <div className="relative">
          <select className="w-full border border-gray-200 rounded px-3 py-2 appearance-none text-sm focus:outline-none focus:border-[#ee4d2d] bg-white">
            <option>Value</option>
            <option>High to Low</option>
            <option>Low to High</option>
          </select>
          <i className="fas fa-chevron-down absolute right-3 top-3 text-gray-400 pointer-events-none"></i>
        </div>

        {/* Stock Filter */}
        <div className="relative">
          <select className="w-full border border-gray-200 rounded px-3 py-2 appearance-none text-sm focus:outline-none focus:border-[#ee4d2d] bg-white">
            <option>Stock</option>
            <option>In Stock</option>
            <option>Out of Stock</option>
            <option>Low Stock</option>
          </select>
          <i className="fas fa-chevron-down absolute right-3 top-3 text-gray-400 pointer-events-none"></i>
        </div>

        {/* Checkboxes */}
        <div className="col-span-2 flex items-center space-x-6">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              className="form-checkbox h-4 w-4 text-[#ee4d2d] rounded border-gray-300 focus:ring-[#ee4d2d]"
            />
            <span className="text-sm text-gray-600">Shopee Mall</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              className="form-checkbox h-4 w-4 text-[#ee4d2d] rounded border-gray-300 focus:ring-[#ee4d2d]"
            />
            <span className="text-sm text-gray-600">Star/Non-Star</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
