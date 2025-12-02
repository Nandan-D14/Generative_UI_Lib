import React, { useState } from 'react';
import {   
  Home, LayoutDashboard, Folder, BarChart2, Mail, PieChart,   
  Settings, Bell, Search, Moon, Sun, Monitor, MoreVertical,   
  ChevronDown, Heart, MessageSquare, Share2, Filter,
  DollarSign, Users, Repeat, Wallet, CreditCard, Package, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area 
} from 'recharts';
import { cn } from '../../utils/cn';
import { Input } from './Input';
import { Button } from './Button';
import { Card } from './Card';
import { Progress } from './Progress';
import { Badge } from './Badge';

// --- Mock Data ---
const chartData = [
  { name: 'Jan 1', value: 2000 },
  { name: 'Jan 5', value: 2200 },
  { name: 'Jan 10', value: 4500 },
  { name: 'Jan 15', value: 4200 },
  { name: 'Jan 20', value: 5500 },
  { name: 'Jan 25', value: 4800 },
  { name: 'Jan 30', value: 7500 },
];

const activities = [
  { id: 1, name: 'MrFarahzad', action: 'Followed', time: '9 January 2022', avatar: 'https://i.pravatar.cc/150?u=1', isFollowing: true },
  { id: 2, name: 'Amin.masih...', action: 'Follow', time: '8 January 2022', avatar: 'https://i.pravatar.cc/150?u=2', isFollowing: false },
  { id: 3, name: 'Bvedone', action: 'Followed', time: '7 January 2022', avatar: 'https://i.pravatar.cc/150?u=3', isFollowing: true },
  { id: 4, name: 'Ghalameom', action: 'Followed', time: '6 January 2022', avatar: 'https://i.pravatar.cc/150?u=4', isFollowing: true },
  { id: 5, name: 'Idanyabiyan', action: 'Followed', time: '5 January 2022', avatar: 'https://i.pravatar.cc/150?u=5', isFollowing: true },
];

const posts = [
  { id: 1, title: 'Binance coin app', subtitle: 'HyperApp', budget: '1,200', spent: '800', color: 'from-blue-600 to-purple-600' },
  { id: 2, title: 'Crypto Wallet', subtitle: 'DeFi Pro', budget: '3,500', spent: '1,200', color: 'from-indigo-600 to-pink-600' },
  { id: 3, title: 'NFT Marketplace', subtitle: 'ArtChain', budget: '8,000', spent: '4,500', color: 'from-purple-600 to-rose-600' },
];

// --- Components ---

const StatCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}> = ({ icon, title, value, change, changeType }) => {
  return (
    <div className="bg-[#151925] p-6 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
          {icon}
        </div>
        <div className={cn(
          "flex items-center gap-1 text-sm font-medium",
          changeType === 'increase' ? 'text-green-500' : 'text-red-500'
        )}>
          {changeType === 'increase' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {change}
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-1">{title}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
};

const ActivityItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  time: string;
  amount?: string;
  status?: 'success' | 'failed';
}> = ({ icon, title, time, amount, status }) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#1E2332] transition-colors">
      <div className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
        status === 'success' ? 'bg-green-500/10 text-green-500' :
        status === 'failed' ? 'bg-red-500/10 text-red-500' :
        'bg-gray-800 text-gray-400'
      )}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white truncate">{title}</p>
        <p className="text-xs text-gray-500 mt-0.5">{time}</p>
      </div>
      {amount && (
        <span className={cn(
          "text-sm font-medium shrink-0",
          status === 'success' ? 'text-green-500' : 'text-red-500'
        )}>
          {amount}
        </span>
      )}
    </div>
  );
};

export const GandomDashboard: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const sidebarItems = [
    { icon: Home, label: 'Home' },
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Folder, label: 'Projects' },
    { icon: BarChart2, label: 'All Stats' },
    { icon: Mail, label: 'Messages' },
    { icon: PieChart, label: 'Statistics' },
  ];

  const stats = [
    { icon: <DollarSign size={20} />, title: 'Total Revenue', value: '$45,231', change: '12.5%', changeType: 'increase' as const },
    { icon: <Users size={20} />, title: 'New Customers', value: '1,234', change: '8.1%', changeType: 'increase' as const },
    { icon: <Repeat size={20} />, title: 'Conversion Rate', value: '4.8%', change: '1.2%', changeType: 'decrease' as const },
    { icon: <Wallet size={20} />, title: 'Net Profit', value: '$18,765', change: '15.3%', changeType: 'increase' as const },
  ];

  const recentActivities = [
    { icon: <Wallet size={18} />, title: 'Payment received from Jane Doe', time: '2 hours ago', amount: '+$250.00', status: 'success' as const },
    { icon: <CreditCard size={18} />, title: 'Credit card transaction', time: '5 hours ago', amount: '-$50.00', status: 'failed' as const },
    { icon: <Package size={18} />, title: 'New product added: Pro Plan', time: '1 day ago' },
    { icon: <Users size={18} />, title: 'New user registration', time: '2 days ago' },
  ];


  return (
    <div className="flex h-[800px] w-full bg-[#0F121C] text-white font-sans overflow-hidden rounded-xl border border-gray-800 shadow-2xl">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="hidden md:flex flex-col w-64 bg-[#0F121C] border-r border-gray-800 p-6"
      >
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-orange-400 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-rose-500/20">G</div>
          <h1 className="text-xl font-bold tracking-wide">GANDOM</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item, index) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group",
                item.active 
                  ? "bg-[#1E2332] text-rose-500 shadow-inner" 
                  : "text-gray-400 hover:text-white hover:bg-[#1E2332]"
              )}
            >
              <item.icon size={20} className={item.active ? "text-rose-500" : "group-hover:text-white"} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Dark Mode Toggle */}
        <div className="mt-auto pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4 px-2">Theme</p>
          <div className="space-y-1">
            <button 
              onClick={() => setDarkMode(false)}
              className={cn("w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors", !darkMode ? "bg-[#1E2332] text-rose-500" : "text-gray-400 hover:text-white")}
            >
              <Sun size={18} /> <span>Light</span>
            </button>
            <button 
              onClick={() => setDarkMode(true)}
              className={cn("w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors", darkMode ? "bg-[#1E2332] text-rose-500" : "text-gray-400 hover:text-white")}
            >
              <Moon size={18} /> <span>Dark</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#0F121C]">
        {/* Top Header */}
        <header className="h-20 flex items-center justify-between px-8 border-b border-gray-800">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-[#1E2332] text-white pl-10 pr-4 py-2.5 rounded-xl border-none focus:ring-2 focus:ring-rose-500/50 placeholder:text-gray-600"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white">Nanda</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <img 
                src="https://i.pravatar.cc/150?u=nanda" 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-gray-800"
              />
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {/* Welcome Section */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#151925] p-6 rounded-3xl border border-gray-800 mb-8 flex flex-col sm:flex-row items-center justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Welcome back, Nanda!</h2>
              <p className="text-gray-400">Here's an overview of your activity today.</p>
            </div>
            <Button variant="default" className="mt-4 sm:mt-0 bg-rose-500 hover:bg-rose-600">
              New Report <ChevronDown size={16} />
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </div>

          {/* Main Chart and Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Chart Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-[#151925] p-6 rounded-3xl border border-gray-800 lg:col-span-2"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Sales Overview</h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs font-medium rounded-lg bg-rose-500 text-white">Weekly</button>
                  <button className="px-3 py-1 text-xs font-medium rounded-lg bg-[#1E2332] text-gray-400 hover:text-white">Monthly</button>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#F43F5E" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#6B7280" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                    <YAxis stroke="#6B7280" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                    <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" vertical={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1E2332', borderColor: '#374151', borderRadius: '8px', color: '#fff' }}
                      labelStyle={{ color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#F43F5E" fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Recent Activity Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-[#151925] p-6 rounded-3xl border border-gray-800 flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Recent Activity</h3>
                <button className="p-2 rounded-lg hover:bg-[#1E2332] transition-colors"><Filter size={18} className="text-gray-400" /></button>
              </div>

              <div className="flex-1 space-y-4">
                {recentActivities.map((activity, index) => (
                  <ActivityItem key={index} {...activity} />
                ))}
              </div>
              <Button variant="link" className="self-start mt-6 text-rose-500 hover:text-rose-400">
                View All Activity <ChevronDown size={16} />
              </Button>
            </motion.div>
          </div>

          {/* Projects/Posts Grid */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-xl font-bold">Active Projects</h3>
              <button className="text-sm text-rose-500 hover:text-rose-400">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {posts.map((post) => (
                <motion.div 
                  key={post.id}
                  whileHover={{ y: -5 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * post.id + 1 }}
                  className="bg-[#151925] p-5 rounded-3xl border border-gray-800 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${post.color} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-opacity group-hover:opacity-20`} />
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center text-white`}>
                      <Folder size={20} />
                    </div>
                    <button className="text-gray-500 hover:text-white"><MoreVertical size={16} /></button>
                  </div>
                  
                  <h4 className="font-bold text-white text-lg mb-1">{post.title}</h4>
                  <p className="text-sm text-gray-500 mb-4">{post.subtitle}</p>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Budget: <span className="text-white">${post.budget}</span></span>
                    <span className="text-rose-500">-${post.spent}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};