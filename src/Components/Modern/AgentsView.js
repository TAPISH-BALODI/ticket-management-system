import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiUsers, FiPlus, FiMail, FiPhone, FiEdit, FiTrash2,
  FiCheckCircle, FiActivity
} from 'react-icons/fi';
import axios from 'axios';

const AgentsView = () => {
  const [agents, setAgents] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [agentData, setAgentData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    active: true,
    dateCreated: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
  });

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      console.log('Fetching agents from:', `${process.env.REACT_APP_BASE_URL}/api/all-agents`);
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/all-agents`);
      console.log('Agents response:', response.data);
      setAgents(response.data);
    } catch (error) {
      console.error('Error fetching agents:', error);
    }
  };

  const handleCreateAgent = async () => {
    if (!agentData.name || !agentData.email || !agentData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/support-agents`, agentData);
      setIsCreateModalOpen(false);
      setAgentData({ 
        name: '', 
        email: '', 
        phone: '', 
        description: '',
        active: true,
        dateCreated: new Date().toISOString().split('T')[0]
      });
      fetchAgents();
    } catch (error) {
      console.error('Error creating agent:', error);
      alert('Failed to create agent');
    }
  };

  const handleEditAgent = (agent) => {
    console.log('Editing agent:', agent);
    setSelectedAgent(agent);
    setAgentData({
      name: agent.name,
      email: agent.email,
      phone: agent.phone,
      description: agent.description || '',
      active: agent.active,
      dateCreated: agent.dateCreated ? agent.dateCreated.split('T')[0] : new Date().toISOString().split('T')[0]
    });
    setIsEditModalOpen(true);
  };

  const handleUpdateAgent = async () => {
    if (!agentData.name || !agentData.email || !agentData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      console.log('Updating agent:', selectedAgent._id, agentData);
      const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/support-agents/${selectedAgent._id}`, agentData);
      console.log('Update response:', response.data);
      setIsEditModalOpen(false);
      setSelectedAgent(null);
      setAgentData({ 
        name: '', 
        email: '', 
        phone: '', 
        description: '',
        active: true,
        dateCreated: new Date().toISOString().split('T')[0]
      });
      fetchAgents();
      alert('Agent updated successfully!');
    } catch (error) {
      console.error('Error updating agent:', error);
      alert(`Failed to update agent: ${error.response?.data?.error?.message || error.message}`);
    }
  };

  const handleDeleteAgent = async (agent) => {
    if (!window.confirm(`Are you sure you want to delete ${agent.name}? This action cannot be undone.`)) {
      return;
    }

    try {
      console.log('Deleting agent:', agent._id);
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/support-agents/${agent._id}`);
      console.log('Delete response:', response.data);
      fetchAgents();
      alert('Agent deleted successfully');
    } catch (error) {
      console.error('Error deleting agent:', error);
      alert(`Failed to delete agent: ${error.response?.data?.error?.message || error.message}`);
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
              <FiUsers className="text-3xl text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-primary-600">
                Agents
              </h1>
              <p className="text-gray-600 mt-1">Manage your support team</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCreateModalOpen(true)}
            className="btn-primary flex items-center gap-2"
          >
            <FiPlus className="text-xl" />
            Add Agent
          </motion.button>
        </div>
      </motion.div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent, index) => (
          <motion.div
            key={agent._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6 cursor-pointer"
          >
            {/* Agent Avatar & Name */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md">
                {agent.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-gray-800 truncate">{agent.name}</h3>
                <div className={`flex items-center gap-2 text-sm ${
                  agent.active ? 'text-green-600' : 'text-red-600'
                }`}>
                  <FiCheckCircle />
                  <span>{agent.active ? 'Active' : 'Inactive'}</span>
                </div>
              </div>
            </div>

            {/* Agent Details */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-sm">
                <FiMail className="text-gray-500 flex-shrink-0" />
                <span className="text-gray-700 truncate">{agent.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FiPhone className="text-gray-500 flex-shrink-0" />
                <span className="text-gray-700">{agent.phone}</span>
              </div>
            </div>

            {/* Description */}
            {agent.description && (
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {agent.description}
              </p>
            )}

            {/* Additional Info */}
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Status:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  agent.active 
                    ? 'bg-green-100 text-green-700 border border-green-300' 
                    : 'bg-red-100 text-red-700 border border-red-300'
                }`}>
                  {agent.active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Created:</span>
                <span className="text-gray-700">
                  {new Date(agent.dateCreated).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
              <div className="bg-primary-50 p-3 rounded-lg text-center border border-primary-200">
                <div className="text-2xl font-bold text-primary-600">{agent.ticketCount || 0}</div>
                <div className="text-xs text-gray-600">Tickets</div>
              </div>
              <div className={`p-3 rounded-lg text-center border ${
                agent.active 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
              }`}>
                <div className={`text-2xl font-bold ${
                  agent.active ? 'text-green-600' : 'text-red-600'
                }`}>
                  {agent.active ? '✓' : '✗'}
                </div>
                <div className={`text-xs ${
                  agent.active ? 'text-green-600' : 'text-red-600'
                }`}>
                  {agent.active ? 'Active' : 'Inactive'}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleEditAgent(agent)}
                className="flex-1 btn-secondary text-sm flex items-center justify-center gap-2"
              >
                <FiEdit /> Edit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDeleteAgent(agent)}
                className="btn-ghost text-sm text-red-600 hover:bg-red-50"
              >
                <FiTrash2 />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {agents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass-card p-12 text-center"
        >
          <FiUsers className="text-6xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No agents yet</h3>
          <p className="text-gray-600 mb-6">Get started by adding your first team member</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCreateModalOpen(true)}
            className="btn-primary"
          >
            <FiPlus className="inline mr-2" />
            Add First Agent
          </motion.button>
        </motion.div>
      )}

      {/* Create Agent Modal */}
      <AnimatePresence>
        {isCreateModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsCreateModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card-strong max-w-2xl w-full p-8"
            >
              {/* Modal Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  Add New Agent
                </h2>
                <p className="text-gray-600">Fill in the details to add a new team member</p>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={agentData.name}
                    onChange={(e) => setAgentData({ ...agentData, name: e.target.value })}
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={agentData.email}
                    onChange={(e) => setAgentData({ ...agentData, email: e.target.value })}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={agentData.phone}
                    onChange={(e) => setAgentData({ ...agentData, phone: e.target.value })}
                    className="input-field"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={agentData.description}
                    onChange={(e) => setAgentData({ ...agentData, description: e.target.value })}
                    className="input-field min-h-[100px]"
                    placeholder="Brief description about the agent..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Active Status
                    </label>
                    <select
                      value={agentData.active}
                      onChange={(e) => setAgentData({ ...agentData, active: e.target.value === 'true' })}
                      className="input-field"
                    >
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date Created
                    </label>
                    <input
                      type="date"
                      value={agentData.dateCreated}
                      onChange={(e) => setAgentData({ ...agentData, dateCreated: e.target.value })}
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCreateAgent}
                  className="btn-primary flex-1"
                >
                  Create Agent
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setIsCreateModalOpen(false);
                    setAgentData({ 
                      name: '', 
                      email: '', 
                      phone: '', 
                      description: '',
                      active: true,
                      dateCreated: new Date().toISOString().split('T')[0]
                    });
                  }}
                  className="btn-secondary"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Agent Modal */}
      <AnimatePresence>
        {isEditModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsEditModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card-strong max-w-2xl w-full p-8"
            >
              {/* Modal Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  Edit Agent
                </h2>
                <p className="text-gray-600">Update the agent's information</p>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={agentData.name}
                    onChange={(e) => setAgentData({ ...agentData, name: e.target.value })}
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={agentData.email}
                    onChange={(e) => setAgentData({ ...agentData, email: e.target.value })}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={agentData.phone}
                    onChange={(e) => setAgentData({ ...agentData, phone: e.target.value })}
                    className="input-field"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={agentData.description}
                    onChange={(e) => setAgentData({ ...agentData, description: e.target.value })}
                    className="input-field min-h-[100px]"
                    placeholder="Brief description about the agent..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Active Status
                    </label>
                    <select
                      value={agentData.active}
                      onChange={(e) => setAgentData({ ...agentData, active: e.target.value === 'true' })}
                      className="input-field"
                    >
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date Created
                    </label>
                    <input
                      type="date"
                      value={agentData.dateCreated}
                      onChange={(e) => setAgentData({ ...agentData, dateCreated: e.target.value })}
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleUpdateAgent}
                  className="btn-primary flex-1"
                >
                  Update Agent
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setSelectedAgent(null);
                    setAgentData({ 
                      name: '', 
                      email: '', 
                      phone: '', 
                      description: '',
                      active: true,
                      dateCreated: new Date().toISOString().split('T')[0]
                    });
                  }}
                  className="btn-secondary"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AgentsView;

