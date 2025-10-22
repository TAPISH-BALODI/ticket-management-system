import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiTrendingUp, FiUsers, FiCheckCircle, FiClock,
  FiAlertCircle, FiActivity, FiPieChart, FiBarChart2
} from 'react-icons/fi';
import { BsGraphUpArrow } from 'react-icons/bs';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    inProgress: 0,
    todo: 0,
    urgent: 0,
    high: 0
  });
  const [percentageChanges, setPercentageChanges] = useState({
    total: 0,
    inProgress: 0,
    completed: 0,
    agents: 0
  });
  const [tickets, setTickets] = useState([]);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const calculatePercentageChange = (current, previous) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return Math.round(((current - previous) / previous) * 100);
  };

  const fetchData = async () => {
    try {
      const [ticketsRes, agentsRes] = await Promise.all([
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/all-tickets`),
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/all-agents`)
      ]);

      const ticketsData = ticketsRes.data;
      setTickets(ticketsData);
      setAgents(agentsRes.data);

      // Calculate current week and last week stats
      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

      const thisWeekTickets = ticketsData.filter(t => new Date(t.dateCreated) >= weekAgo);
      const lastWeekTickets = ticketsData.filter(t => 
        new Date(t.dateCreated) >= twoWeeksAgo && new Date(t.dateCreated) < weekAgo
      );

      const thisWeekCompleted = ticketsData.filter(t => 
        t.status === 'Done' && t.resolvedOn && new Date(t.resolvedOn) >= weekAgo
      ).length;
      const lastWeekCompleted = ticketsData.filter(t => 
        t.status === 'Done' && t.resolvedOn && 
        new Date(t.resolvedOn) >= twoWeeksAgo && new Date(t.resolvedOn) < weekAgo
      ).length;

      const thisWeekInProgress = ticketsData.filter(t => 
        t.status === 'In Progress' && new Date(t.dateCreated) >= weekAgo
      ).length;
      const lastWeekInProgress = ticketsData.filter(t => 
        t.status === 'In Progress' && 
        new Date(t.dateCreated) >= twoWeeksAgo && new Date(t.dateCreated) < weekAgo
      ).length;

      // Calculate stats
      setStats({
        total: ticketsData.length,
        completed: ticketsData.filter(t => t.status === 'Done').length,
        inProgress: ticketsData.filter(t => t.status === 'In Progress').length,
        todo: ticketsData.filter(t => t.status === 'To Do').length,
        urgent: ticketsData.filter(t => t.priority === 'Urgent').length,
        high: ticketsData.filter(t => t.priority === 'High').length
      });

      // Calculate percentage changes
      setPercentageChanges({
        total: calculatePercentageChange(thisWeekTickets.length, lastWeekTickets.length),
        inProgress: calculatePercentageChange(thisWeekInProgress, lastWeekInProgress),
        completed: calculatePercentageChange(thisWeekCompleted, lastWeekCompleted),
        agents: 0 // Agents don't change weekly, so 0
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getCompletionRate = () => {
    if (stats.total === 0) return 0;
    return Math.round((stats.completed / stats.total) * 100);
  };

  const getAgentWorkload = () => {
    const workload = {};
    agents.forEach(agent => {
      workload[agent.name] = tickets.filter(t => t.assignedTo === agent.name).length;
    });
    return workload;
  };

  const getPriorityDistribution = () => {
    return {
      Urgent: tickets.filter(t => t.priority === 'Urgent').length,
      High: tickets.filter(t => t.priority === 'High').length,
      Medium: tickets.filter(t => t.priority === 'Medium').length,
      Low: tickets.filter(t => t.priority === 'Low').length
    };
  };

  const StatCard = ({ title, value, icon, color, change, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass-card p-6 hover:shadow-card-hover transition-all"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
          <h3 className="text-4xl font-bold text-gray-800">{value}</h3>
        </div>
        <div className={`p-4 ${color} rounded-xl shadow-md`}>
          {icon}
        </div>
      </div>
      {change !== undefined && change !== 0 && (
        <div className={`flex items-center gap-1 text-sm ${change > 0 ? 'text-primary-600' : 'text-red-600'}`}>
          <FiTrendingUp className={change < 0 ? 'rotate-180' : ''} />
          <span>{change > 0 ? '+' : ''}{change}% from last week</span>
        </div>
      )}
      {change === 0 && (
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>No change from last week</span>
        </div>
      )}
    </motion.div>
  );

  const workload = getAgentWorkload();
  const priorityDist = getPriorityDistribution();

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
          <div className="flex items-center gap-4 mb-2">
            <div className="p-4 bg-primary-600 rounded-xl shadow-lg">
              <BsGraphUpArrow className="text-3xl text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-primary-600">
                Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Overview of your ticket management system</p>
            </div>
          </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Tickets"
          value={stats.total}
          icon={<FiPieChart className="text-2xl text-white" />}
          color="bg-primary-600"
          change={percentageChanges.total}
          delay={0.1}
        />
        <StatCard
          title="In Progress"
          value={stats.inProgress}
          icon={<FiClock className="text-2xl text-white" />}
          color="bg-yellow-500"
          change={percentageChanges.inProgress}
          delay={0.2}
        />
        <StatCard
          title="Completed"
          value={stats.completed}
          icon={<FiCheckCircle className="text-2xl text-white" />}
          color="bg-gray-700"
          change={percentageChanges.completed}
          delay={0.3}
        />
        <StatCard
          title="Active Agents"
          value={agents.length}
          icon={<FiUsers className="text-2xl text-white" />}
          color="bg-primary-600"
          change={percentageChanges.agents}
          delay={0.4}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Completion Rate */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <FiActivity className="text-2xl text-purple-600" />
            <h3 className="text-xl font-bold text-gray-800">Completion Rate</h3>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-48 h-48">
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                  fill="transparent"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 80}`}
                  strokeDashoffset={`${2 * Math.PI * 80 * (1 - getCompletionRate() / 100)}`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-600">
                  {getCompletionRate()}%
                </span>
              </div>
            </div>
          </div>

            <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FiCheckCircle className="text-white" />
                <span className="text-sm text-white">Completed</span>
              </div>
              <div className="text-2xl font-bold text-white">{stats.completed}</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FiAlertCircle className="text-gray-700" />
                <span className="text-sm text-gray-700">Remaining</span>
              </div>
              <div className="text-2xl font-bold text-gray-700">{stats.total - stats.completed}</div>
            </div>
          </div>
        </motion.div>

        {/* Priority Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <FiBarChart2 className="text-2xl text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Priority Distribution</h3>
          </div>

          <div className="space-y-4">
            {Object.entries(priorityDist).map(([priority, count], index) => {
              const maxCount = Math.max(...Object.values(priorityDist), 1);
              const percentage = (count / maxCount) * 100;
              const colors = {
                Urgent: 'from-red-500 to-red-600',
                High: 'from-orange-500 to-orange-600',
                Medium: 'from-yellow-500 to-yellow-600',
                Low: 'from-green-500 to-green-600'
              };

              return (
                <div key={priority}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{priority}</span>
                    <span className="text-sm font-bold text-gray-800">{count} tickets</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${colors[priority]} rounded-full`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Agent Workload */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <FiUsers className="text-2xl text-cyan-600" />
          <h3 className="text-xl font-bold text-gray-800">Agent Workload</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {agents.map((agent, index) => (
            <motion.div
              key={agent._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.05 }}
              className="bg-white p-4 rounded-lg border border-gray-200 shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {agent.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 truncate">{agent.name}</h4>
                  <p className="text-xs text-gray-600 truncate">{agent.email}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Assigned Tickets</span>
                <span className="text-2xl font-bold text-primary-600">
                  {workload[agent.name] || 0}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="glass-card p-6 mt-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <FiActivity className="text-2xl text-green-600" />
          <h3 className="text-xl font-bold text-gray-800">Recent Tickets</h3>
        </div>

        <div className="space-y-3">
          {tickets.slice(0, 5).map((ticket, index) => (
            <motion.div
              key={ticket._id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 + index * 0.05 }}
              className="flex items-center justify-between p-4 bg-white/50 dark:bg-dark-200/50 rounded-xl hover:bg-white dark:hover:bg-dark-200 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className={`w-2 h-2 rounded-full ${
                  ticket.priority === 'Urgent' ? 'bg-red-500' :
                  ticket.priority === 'High' ? 'bg-orange-500' :
                  ticket.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 truncate">{ticket.topic}</h4>
                  <p className="text-sm text-gray-600">{ticket.assignedTo || 'Unassigned'}</p>
                </div>
              </div>
              <span className={`badge badge-priority-${ticket.priority?.toLowerCase() || 'medium'}`} style={{color:"#000"}}>
                {ticket.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;

