'use client';

import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  iconBgColor: string;
  iconColor: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon, 
  iconBgColor, 
  iconColor, 
  trend 
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className={`w-10 h-10 rounded-full ${iconBgColor} flex items-center justify-center`}>
          <i className={`${icon} ${iconColor}`}></i>
        </div>
      </div>
      <div className="text-xl font-bold">{value}</div>
      {trend && (
        <p className={`text-sm mt-2 flex items-center ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
          <i className={`fas fa-arrow-${trend.isPositive ? 'up' : 'down'} mr-1`}></i>
          <span>{trend.value}% from last month</span>
        </p>
      )}
    </div>
  );
};

export default StatsCard;
