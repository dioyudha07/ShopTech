'use client';

import React from 'react';
import { Product } from '@/lib/mockData';

interface ProductCardProps {
  product: Product;
}

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

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-sm shadow-sm mb-4">
      <div className="grid grid-cols-12 gap-6 p-4">
        {/* Product Image and Basic Info */}
        <div className="col-span-12 md:col-span-3">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded"
            />
            {product.isMall && (
              <span className="absolute top-2 left-2 bg-[#ee4d2d] text-white px-2 py-1 rounded text-xs">
                Mall
              </span>
            )}
          </div>
          <div className="mt-3">
            <div className="text-sm text-gray-500">{product.location}</div>
            <div className="font-medium mt-1 text-sm">{product.name}</div>
            <div className="text-[#ee4d2d] font-bold mt-1">{formatCurrency(product.price)}</div>
          </div>
        </div>

        {/* Sales Data */}
        <div className="col-span-12 md:col-span-3">
          <div className="bg-gray-50 rounded p-3">
            <div className="text-sm text-gray-500 mb-3">Data Omset</div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Omset 30 hari</span>
                <span className="font-medium">{formatCurrency(product.sales.last30Days)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Rata² Omset per bulan</span>
                <span className="font-medium">{formatCurrency(product.sales.averagePerDay)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Omset total</span>
                <span className="font-medium">{formatCurrency(product.sales.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Data */}
        <div className="col-span-12 md:col-span-3">
          <div className="bg-gray-50 rounded p-3">
            <div className="text-sm text-gray-500 mb-3">Data Penjualan</div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Penjualan 30 hari</span>
                <span className="font-medium">{formatNumber(product.orders.last30Days)} pcs</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Rata² Penjualan per hari</span>
                <span className="font-medium">{formatNumber(product.orders.averagePerDay)} pcs</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Penjualan total</span>
                <span className="font-medium">{formatNumber(product.orders.total)} pcs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stock and Performance */}
        <div className="col-span-12 md:col-span-3">
          <div className="bg-gray-50 rounded p-3">
            <div className="text-sm text-gray-500 mb-3">Data Stok</div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Stok saat ini</span>
                <span className="font-medium">{formatNumber(product.stock.current)} pcs</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Stok awal</span>
                <span className="font-medium">{formatNumber(product.stock.initial)} pcs</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Tren</span>
                <span className="text-green-500">↑ {product.growth}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Dibuat</span>
                <span className="font-medium">{formatDate(product.createdAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
