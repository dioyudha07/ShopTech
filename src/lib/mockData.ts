export interface Product {
  id: number;
  name: string;
  location: string;
  image: string;
  price: number;
  isMall: boolean;
  isOriginal: boolean;
  rating: number;
  sales: {
    total: number;
    last30Days: number;
    averagePerDay: number;
  };
  orders: {
    total: number;
    last30Days: number;
    averagePerDay: number;
  };
  stock: {
    current: number;
    initial: number;
  };
  growth: number;
  createdAt: string;
}

export interface DashboardData {
  summary: {
    totalItems: number;
    totalSales: number;
    totalRevenue: number;
    averageRevenue: number;
    monthlyRevenue: number;
    growthPercentage: number;
  };
  products: Product[];
}

export const mockData: DashboardData = {
  summary: {
    totalItems: 60,
    totalSales: 90863,
    totalRevenue: 219823253744,
    averageRevenue: 7648375173,
    monthlyRevenue: 14867384308,
    growthPercentage: 94.39
  },
  products: [
    {
      id: 1,
      name: "Skanky Story Honjo ukuran 35-45 - Sepatu Sneakers",
      location: "Kab. Bandung",
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
      price: 298800,
      isMall: true,
      isOriginal: true,
      rating: 4.8,
      sales: {
        total: 4420832200,
        last30Days: 866520000,
        averagePerDay: 321380280
      },
      orders: {
        total: 16134,
        last30Days: 2900,
        averagePerDay: 1078
      },
      stock: {
        current: 500,
        initial: 20000
      },
      growth: 169.62,
      createdAt: "2023-07-07"
    },
    {
      id: 2,
      name: "Skanky Yuga Ikebana - Sepatu Sneakers Casual Sport",
      location: "Kab. Bandung",
      image: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg",
      price: 208800,
      isMall: true,
      isOriginal: true,
      rating: 4.9,
      sales: {
        total: 4856448800,
        last30Days: 366444000,
        averagePerDay: 205454296
      },
      orders: {
        total: 22301,
        last30Days: 1753,
        averagePerDay: 970
      },
      stock: {
        current: 300,
        initial: 25000
      },
      growth: 81.00,
      createdAt: "2022-11-19"
    },
    {
      id: 3,
      name: "Skanky Yuga Makie - Sepatu Sneakers Casual Sport",
      location: "Kab. Bandung",
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
      price: 208800,
      isMall: true,
      isOriginal: true,
      rating: 4.7,
      sales: {
        total: 8305286400,
        last30Days: 1415098000,
        averagePerDay: 444514520
      },
      orders: {
        total: 42205,
        last30Days: 7185,
        averagePerDay: 2129
      },
      stock: {
        current: 800,
        initial: 50000
      },
      growth: 203.33,
      createdAt: "2023-02-15"
    }
  ]
};
