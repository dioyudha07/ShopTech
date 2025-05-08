'use client';

import React from 'react';
import HeaderBar from '@/components/HeaderBar';
import StatsCard from '@/components/StatsCard';
import FilterBar from '@/components/FilterBar';
import ProductCard from '@/components/ProductCard';
import { mockData } from '@/lib/mockData';

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('id-ID').format(num);
};

const formatCurrency = (num: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);
};

const Home: React.FC = () => {
  console.log("run this project...")
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <HeaderBar 
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          <StatsCard
            title="Total Items"
            value={mockData.summary.totalItems}
            icon="fas fa-box"
            iconBgColor="bg-blue-100"
            iconColor="text-blue-500"
          />
          <StatsCard
            title="Total Sales"
            value={formatNumber(mockData.summary.totalSales)}
            icon="fas fa-shopping-cart"
            iconBgColor="bg-purple-100"
            iconColor="text-purple-500"
          />
          <StatsCard
            title="Total Revenue"
            value={formatCurrency(mockData.summary.totalRevenue)}
            icon="fas fa-dollar-sign"
            iconBgColor="bg-yellow-100"
            iconColor="text-yellow-500"
          />
          <StatsCard
            title="Avg Revenue/Month"
            value={formatCurrency(mockData.summary.averageRevenue)}
            icon="fas fa-chart-line"
            iconBgColor="bg-red-100"
            iconColor="text-red-500"
          />
          <StatsCard
            title="30 Days Revenue"
            value={formatCurrency(mockData.summary.monthlyRevenue)}
            icon="fas fa-calendar"
            iconBgColor="bg-green-100"
            iconColor="text-green-500"
          />
          <StatsCard
            title="Growth"
            value={`${mockData.summary.growthPercentage}%`}
            icon="fas fa-arrow-trend-up"
            iconBgColor="bg-blue-100"
            iconColor="text-blue-500"
            trend={{
              value: mockData.summary.growthPercentage,
              isPositive: true
            }}
          />
        </div>

        {/* Filters */}
        <FilterBar />

        {/* Product List */}
        <div className="space-y-4">
          {mockData.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
