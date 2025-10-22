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
      const ticketDate = moment(ticket.dateCreated);
      return ticketDate.isBetween(sprint.startDate, sprint.endDate, null, '[]');
    });
  };

  const getSprintStats = (sprint) => {
    const sprintTickets = getSprintTickets(sprint);
    const total = sprintTickets.length;
    const completed = sprintTickets.filter(t => t.status === 'Done').length;
    const inProgress = sprintTickets.filter(t => t.status === 'In Progress').length;
    const todo = sprintTickets.filter(t => t.status === 'To Do').length;
    const inReview = sprintTickets.filter(t => t.status === 'In Review').length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    // Calculate velocity (tickets completed per day)
    const sprintDuration = moment(sprint.endDate).diff(moment(sprint.startDate), 'days');
    const velocity = sprintDuration > 0 ? Math.round((completed / sprintDuration) * 10) / 10 : 0;
    
    // Calculate priority distribution
    const urgent = sprintTickets.filter(t => t.priority === 'Urgent').length;
    const high = sprintTickets.filter(t => t.priority === 'High').length;
    const medium = sprintTickets.filter(t => t.priority === 'Medium').length;
    const low = sprintTickets.filter(t => t.priority === 'Low').length;
    
    // Calculate estimated vs actual hours
    const estimatedHours = sprintTickets.reduce((sum, t) => sum + (t.estimatedHours || 0), 0);
    const actualHours = sprintTickets.reduce((sum, t) => sum + (t.actualHours || 0), 0);
    
    // Calculate burndown (how many tickets should be done by now)
    const now = moment();
    const sprintProgress = now.isAfter(sprint.endDate) ? 1 : 
                          now.isBefore(sprint.startDate) ? 0 : 
                          now.diff(sprint.startDate, 'days') / sprintDuration;
    const expectedCompletion = Math.round(total * sprintProgress);
    const burndownStatus = completed >= expectedCompletion ? 'on-track' : 'behind';

    return { 
      total, 
      completed, 
      inProgress, 
      todo,
      inReview,
      completionRate, 
      velocity,
      urgent,
      high,
      medium,
      low,
      estimatedHours,
      actualHours,
      expectedCompletion,
      burndownStatus
    };
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

      {/* Sprint Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sprint Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {(() => {
              const allSprintTickets = tickets.filter(ticket => {
                const ticketDate = moment(ticket.dateCreated);
                return sprints.some(sprint => 
                  ticketDate.isBetween(sprint.startDate, sprint.endDate, null, '[]')
                );
              });
              
              const totalTickets = allSprintTickets.length;
              const completedTickets = allSprintTickets.filter(t => t.status === 'Done').length;
              const activeSprints = sprints.filter(s => s.isActive).length;
              const avgCompletion = totalTickets > 0 ? Math.round((completedTickets / totalTickets) * 100) : 0;
              
              return (
                <>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{totalTickets}</div>
                    <div className="text-sm text-gray-600">Total Sprint Tickets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{completedTickets}</div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{activeSprints}</div>
                    <div className="text-sm text-gray-600">Active Sprints</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{avgCompletion}%</div>
                    <div className="text-sm text-gray-600">Avg Completion</div>
                  </div>
                </>
              );
            })()}
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
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 text-center">
                  <FiList className="mx-auto mb-1 text-blue-600" />
                  <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
                  <div className="text-xs text-gray-600">Total Tickets</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 text-center">
                  <FiCheckCircle className="mx-auto mb-1 text-green-600" />
                  <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
                  <div className="text-xs text-gray-600">Completed</div>
                </div>
              </div>

              {/* Status Breakdown */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="bg-gray-100 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-gray-700">{stats.todo}</div>
                  <div className="text-xs text-gray-600">To Do</div>
                </div>
                <div className="bg-yellow-100 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-yellow-700">{stats.inProgress}</div>
                  <div className="text-xs text-gray-600">In Progress</div>
                </div>
                <div className="bg-blue-100 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-blue-700">{stats.inReview}</div>
                  <div className="text-xs text-gray-600">In Review</div>
                </div>
                <div className="bg-green-100 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-green-700">{stats.completed}</div>
                  <div className="text-xs text-gray-600">Done</div>
                </div>
              </div>

              {/* Priority Distribution */}
              {stats.total > 0 && (
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Priority Breakdown</div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-red-100 rounded p-2 text-center">
                      <div className="text-sm font-bold text-red-700">{stats.urgent}</div>
                      <div className="text-xs text-gray-600">Urgent</div>
                    </div>
                    <div className="bg-orange-100 rounded p-2 text-center">
                      <div className="text-sm font-bold text-orange-700">{stats.high}</div>
                      <div className="text-xs text-gray-600">High</div>
                    </div>
                    <div className="bg-yellow-100 rounded p-2 text-center">
                      <div className="text-sm font-bold text-yellow-700">{stats.medium}</div>
                      <div className="text-xs text-gray-600">Medium</div>
                    </div>
                    <div className="bg-gray-100 rounded p-2 text-center">
                      <div className="text-sm font-bold text-gray-700">{stats.low}</div>
                      <div className="text-xs text-gray-600">Low</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Velocity & Hours */}
              {stats.total > 0 && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">{stats.velocity}</div>
                    <div className="text-xs text-gray-600">Velocity (tickets/day)</div>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-indigo-600">{stats.estimatedHours}h</div>
                    <div className="text-xs text-gray-600">Estimated Hours</div>
                  </div>
                </div>
              )}

              {/* Sprint Status & Burndown */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiClock />
                    <span>
                      {moment(sprint.endDate).diff(moment(), 'days')} days remaining
                    </span>
                  </div>
                  
                  {stats.total > 0 && (
                    <div className="flex items-center gap-1 text-sm">
                      <FiTrendingUp className={stats.burndownStatus === 'on-track' ? 'text-green-600' : 'text-red-600'} />
                      <span className={stats.burndownStatus === 'on-track' ? 'text-green-600' : 'text-red-600'}>
                        {stats.burndownStatus === 'on-track' ? 'On Track' : 'Behind Schedule'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Burndown Chart */}
                {stats.total > 0 && (
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Expected: {stats.expectedCompletion}</span>
                      <span>Actual: {stats.completed}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                        style={{ width: `${Math.min((stats.completed / Math.max(stats.expectedCompletion, 1)) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Completion Status */}
                <div className="text-center">
                  <span className={`text-sm font-semibold ${
                    stats.completionRate >= 75 ? 'text-green-600' : 
                    stats.completionRate >= 50 ? 'text-yellow-600' : 
                    'text-red-600'
                  }`}>
                    {stats.completionRate >= 75 ? '🎉 Excellent Progress!' : 
                     stats.completionRate >= 50 ? '👍 Good Progress' : 
                     stats.completionRate > 0 ? '⚠️ Needs Attention' : 
                     '📋 No tickets yet'}
                  </span>
                </div>
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

