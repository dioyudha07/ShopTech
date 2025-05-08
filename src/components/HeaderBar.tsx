'use client';

import { mockData } from '@/lib/mockData';

const HeaderBar = () => {
  const userName = "DIO YUDHA";
  const downloadCSV = () => {
    const headers = [
      'ID', 'Name', 'Location', 'Price', 'Is Mall', 'Is Original', 'Rating',
      'Sales Total', 'Sales Last 30 Days', 'Sales Average Per Day',
      'Orders Total', 'Orders Last 30 Days', 'Orders Average Per Day',
      'Stock Current', 'Stock Initial', 'Growth', 'Created At'
    ];

    const rows = mockData.products.map(p => [
      p.id,
      `"${p.name}"`,
      `"${p.location}"`,
      p.price,
      p.isMall,
      p.isOriginal,
      p.rating,
      p.sales.total,
      p.sales.last30Days,
      p.sales.averagePerDay,
      p.orders.total,
      p.orders.last30Days,
      p.orders.averagePerDay,
      p.stock.current,
      p.stock.initial,
      p.growth,
      p.createdAt
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(r => r.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${userName}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <nav className="bg-[#ee4d2d] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-bold">Shopy Market</h1>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#" className="hover:opacity-80">Seller Centre</a>
              <a href="#" className="hover:opacity-80" onClick={downloadCSV} style={{cursor: 'pointer'}}>Download</a>
              <a href="#" className="hover:opacity-80">Follow us on</a>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <button className="hidden md:flex items-center space-x-2">
              <i className="fas fa-bell"></i>
              <span>Notifications</span>
            </button>
            <button className="hidden md:flex items-center space-x-2">
              <i className="fas fa-question-circle"></i>
              <span>Help</span>
            </button>
            <div className="hidden md:flex items-center space-x-2">
              <span>Bahasa Indonesia</span>
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
            <div className="flex items-center space-x-2">
              <img 
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" 
                alt="Profile" 
                className="w-6 h-6 rounded-full"
              />
              <span className="hidden md:inline">{userName}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderBar;
