import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiCalendar, FiPlus, FiClock, FiCheckCircle, FiTrendingUp,
  FiFilter, FiList
} from 'react-icons/fi';
import { BsLightningChargeFill } from 'react-icons/bs';
import axios from 'axios';
import * as moment from 'moment';

const SprintManagement = () => {
  const [sprints, setSprints] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [selectedSprintType, setSelectedSprintType] = useState('weekly');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newSprint, setNewSprint] = useState({
    name: '',
    startDate: '',
    endDate: '',
    type: 'weekly'
  });

  useEffect(() => {
    fetchTickets();
    generateSprints();
  }, [selectedSprintType]);

  const fetchTickets = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/all-tickets`);
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const generateSprints = () => {
    const now = moment();
    const generated = [];

    if (selectedSprintType === 'weekly') {
      // Generate 4 weeks
      for (let i = 0; i < 4; i++) {
        const start = moment().add(i, 'weeks').startOf('week');
        const end = moment().add(i, 'weeks').endOf('week');
        generated.push({
          id: `week-${i}`,
          name: `Week ${i + 1} - ${start.format('MMM DD')}`,
          startDate: start.toDate(),
          endDate: end.toDate(),
          type: 'weekly',
          isActive: now.isBetween(start, end)
        });
      }
    } else if (selectedSprintType === 'monthly') {
      // Generate 3 months
      for (let i = 0; i < 3; i++) {
        const start = moment().add(i, 'months').startOf('month');
        const end = moment().add(i, 'months').endOf('month');
        generated.push({
          id: `month-${i}`,
          name: start.format('MMMM YYYY'),
          startDate: start.toDate(),
          endDate: end.toDate(),
          type: 'monthly',
          isActive: now.isBetween(start, end)
        });
      }
    } else if (selectedSprintType === 'quarterly') {
      // Generate 2 quarters
      for (let i = 0; i < 2; i++) {
        const start = moment().add(i * 3, 'months').startOf('quarter');
        const end = moment().add(i * 3, 'months').endOf('quarter');
        generated.push({
          id: `quarter-${i}`,
          name: `Q${start.quarter()} ${start.format('YYYY')}`,
          startDate: start.toDate(),
          endDate: end.toDate(),
          type: 'quarterly',
          isActive: now.isBetween(start, end)
        });
      }
    }

    setSprints(generated);
  };

  const getSprintTickets = (sprint) => {
    return tickets.filter(ticket => {
      if (!ticket.sprint || !ticket.sprint.id) return false;
      return ticket.sprint.id === sprint.id;
    });
  };

  const getSprintStats = (sprint) => {
    const sprintTickets = getSprintTickets(sprint);
    const total = sprintTickets.length;
    const completed = sprintTickets.filter(t => t.status === 'Done').length;
    const inProgress = sprintTickets.filter(t => t.status === 'In Progress').length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, inProgress, completionRate };
  };

  const getSprintTypeIcon = (type) => {
    switch (type) {
      case 'weekly': return '📅';
      case 'monthly': return '📆';
      case 'quarterly': return '🗓️';
      default: return '📋';
    }
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary-600 rounded-xl shadow-lg">
              <BsLightningChargeFill className="text-3xl text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-primary-600">
                Sprint Management
              </h1>
              <p className="text-gray-600 mt-1">Plan and track your team's sprints</p>
            </div>
          </div>
        </div>

        {/* Sprint Type Selector */}
        <div className="glass-card p-4 flex gap-4 items-center">
          <FiFilter className="text-gray-500 text-xl" />
          
          <div className="flex gap-2">
            {['weekly', 'monthly', 'quarterly'].map((type) => (
              <motion.button
                key={type}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSprintType(type)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedSprintType === type
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                {getSprintTypeIcon(type)} {type.charAt(0).toUpperCase() + type.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Sprints Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sprints.map((sprint, index) => {
          const stats = getSprintStats(sprint);
          
          return (
            <motion.div
              key={sprint.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-6 ${sprint.isActive ? 'ring-2 ring-blue-500 shadow-xl' : ''}`}
            >
              {/* Sprint Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{sprint.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCalendar />
                    <span>
                      {moment(sprint.startDate).format('MMM DD')} - {moment(sprint.endDate).format('MMM DD, YYYY')}
                    </span>
                  </div>
                </div>
                {sprint.isActive && (
                  <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-xs font-semibold animate-pulse">
                    Active
                  </span>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-bold text-blue-600">{stats.completionRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stats.completionRate}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-primary-600 rounded-full"
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-3 text-center">
                  <FiList className="mx-auto mb-1 text-blue-600" />
                  <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
                  <div className="text-xs text-gray-600">Total</div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg p-3 text-center">
                  <FiClock className="mx-auto mb-1 text-yellow-600" />
                  <div className="text-2xl font-bold text-yellow-600">{stats.inProgress}</div>
                  <div className="text-xs text-gray-600">In Progress</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-3 text-center">
                  <FiCheckCircle className="mx-auto mb-1 text-green-600" />
                  <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
                  <div className="text-xs text-gray-600">Done</div>
                </div>
              </div>

              {/* Days Remaining */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FiClock />
                  <span>
                    {moment(sprint.endDate).diff(moment(), 'days')} days remaining
                  </span>
                </div>
                
                {stats.total > 0 && (
                  <div className="flex items-center gap-1 text-sm">
                    <FiTrendingUp className={stats.completionRate >= 50 ? 'text-green-600' : 'text-orange-600'} />
                    <span className={stats.completionRate >= 50 ? 'text-green-600' : 'text-orange-600'}>
                      {stats.completionRate >= 75 ? 'Great!' : stats.completionRate >= 50 ? 'Good' : 'Behind'}
                    </span>
                  </div>
                )}
              </div>

              {/* View Details Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 btn-secondary text-sm"
              >
                View Sprint Details
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* Sprint Creation Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 glass-card p-6 text-center"
      >
        <BsLightningChargeFill className="text-4xl mx-auto mb-3 text-purple-500" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Manage Your Sprints Efficiently
        </h3>
        <p className="text-gray-600 mb-4">
          Assign tickets to sprints when creating or editing them to track progress across different time periods
        </p>
      </motion.div>
    </div>
  );
};

export default SprintManagement;

