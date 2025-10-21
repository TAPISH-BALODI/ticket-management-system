import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiHome, FiGrid, FiUsers, FiCalendar, FiSettings,
  FiMenu, FiX, FiSun, FiMoon
} from 'react-icons/fi';
import { BsKanban, BsLightningChargeFill } from 'react-icons/bs';
import axios from 'axios';

const QuickStats = ({ onViewChange }) => {
  const [stats, setStats] = useState({
    active: 0,
    thisWeek: 0,
    completed: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/all-tickets`);
      const tickets = response.data;
      
      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      
      setStats({
        active: tickets.filter(t => t.status !== 'Done').length,
        thisWeek: tickets.filter(t => new Date(t.dateCreated) >= weekAgo).length,
        completed: tickets.filter(t => t.status === 'Done').length
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200"
    >
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Stats</h3>
      <div className="space-y-2">
        <button
          onClick={() => onViewChange('kanban')}
          className="w-full flex justify-between text-sm hover:bg-primary-100 p-2 rounded transition-colors"
        >
          <span className="text-gray-600">Active Tickets</span>
          <span className="font-bold text-primary-600">{stats.active}</span>
        </button>
        <button
          onClick={() => onViewChange('kanban')}
          className="w-full flex justify-between text-sm hover:bg-primary-100 p-2 rounded transition-colors"
        >
          <span className="text-gray-600">This Week</span>
          <span className="font-bold text-primary-600">{stats.thisWeek}</span>
        </button>
        <button
          onClick={() => onViewChange('kanban')}
          className="w-full flex justify-between text-sm hover:bg-primary-100 p-2 rounded transition-colors"
        >
          <span className="text-gray-600">Completed</span>
          <span className="font-bold text-primary-600">{stats.completed}</span>
        </button>
      </div>
    </motion.div>
  );
};

const Layout = ({ children, currentView, onViewChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FiHome />, color: 'bg-primary-600' },
    { id: 'kanban', label: 'Kanban Board', icon: <BsKanban />, color: 'bg-primary-600' },
    { id: 'sprints', label: 'Sprints', icon: <BsLightningChargeFill />, color: 'bg-primary-600' },
    { id: 'agents', label: 'Agents', icon: <FiUsers />, color: 'bg-primary-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="glass-card-strong fixed top-0 left-0 right-0 z-40 px-6 py-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isSidebarOpen ? <FiX className="text-2xl text-gray-700" /> : <FiMenu className="text-2xl text-gray-700" />}
            </motion.button>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                <BsKanban className="text-xl text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary-600">
                  TicketFlow
                </h1>
                <p className="text-xs text-gray-600">Modern Ticket Management</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                U
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-gray-800">User</p>
                <p className="text-xs text-gray-600">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar */}
      <AnimatePresence>
        {(isSidebarOpen || window.innerWidth >= 1024) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed left-0 top-20 bottom-0 w-72 glass-card-strong p-6 z-30 overflow-y-auto scrollbar-thin"
          >
            <nav className="space-y-2">
              {menuItems.map((item, index) => {
                const isActive = currentView === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onViewChange(item.id);
                      if (window.innerWidth < 1024) setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg font-semibold transition-all ${
                      isActive
                        ? `${item.color} text-white shadow-md`
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Quick Stats */}
            <QuickStats onViewChange={onViewChange} />

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 p-6 bg-primary-600 rounded-xl text-white text-center shadow-lg"
            >
              <BsLightningChargeFill className="text-3xl mx-auto mb-2" />
              <p className="text-sm font-semibold">Stay Productive!</p>
              <p className="text-xs opacity-90 mt-1">Manage tickets efficiently</p>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`pt-20 transition-all duration-300 ${isSidebarOpen ? 'lg:pl-72' : ''}`}>
        <motion.div
          key={currentView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && window.innerWidth < 1024 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 lg:hidden"
        />
      )}
    </div>
  );
};

export default Layout;

