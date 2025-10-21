import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSave, FiTag, FiUser, FiAlertCircle, FiClock } from 'react-icons/fi';
import axios from 'axios';

const CreateTicketModal = ({ isOpen, onClose, onSuccess, agents }) => {
  const [ticketData, setTicketData] = useState({
    topic: '',
    description: '',
    severity: 'mid',
    type: 'Bug',
    priority: 'Medium',
    estimatedHours: '',
    tags: [],
    assignedTo: '',
    dateCreated: new Date(),
    status: 'To Do'
  });
  const [newTag, setNewTag] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!ticketData.topic.trim()) newErrors.topic = 'Title is required';
    if (!ticketData.description.trim()) newErrors.description = 'Description is required';
    if (!ticketData.type.trim()) newErrors.type = 'Type is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/support-tickets`, ticketData);
      onSuccess();
      onClose();
      
      // Reset form
      setTicketData({
        topic: '',
        description: '',
        severity: 'mid',
        type: 'Bug',
        priority: 'Medium',
        estimatedHours: '',
        tags: [],
        assignedTo: '',
        dateCreated: new Date(),
        status: 'To Do'
      });
    } catch (error) {
      console.error('Error creating ticket:', error);
      alert('Failed to create ticket. Please try again.');
    }
  };

  const addTag = () => {
    if (!newTag.trim() || ticketData.tags.includes(newTag)) return;
    setTicketData({
      ...ticketData,
      tags: [...ticketData.tags, newTag.trim()]
    });
    setNewTag('');
  };

  const removeTag = (tagToRemove) => {
    setTicketData({
      ...ticketData,
      tags: ticketData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const ticketTypes = ['Bug', 'Feature', 'Improvement', 'Task', 'Story', 'Epic'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card-strong max-w-3xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin"
          >
            {/* Header */}
            <div className="bg-primary-600 text-white p-6 rounded-t-xl">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Create New Ticket</h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-white hover:bg-white/20 rounded-lg p-2 transition-all"
                >
                  <FiX className="text-2xl" />
                </motion.button>
              </div>
              <p className="text-primary-100 mt-2">Fill in the details to create a new ticket</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={ticketData.topic}
                  onChange={(e) => setTicketData({...ticketData, topic: e.target.value})}
                  className={`input-field ${errors.topic ? 'border-red-500' : ''}`}
                  placeholder="Enter ticket title..."
                />
                {errors.topic && <p className="text-red-500 text-sm mt-1">{errors.topic}</p>}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={ticketData.description}
                  onChange={(e) => setTicketData({...ticketData, description: e.target.value})}
                  className={`input-field min-h-[120px] ${errors.description ? 'border-red-500' : ''}`}
                  placeholder="Describe the ticket in detail..."
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>

              {/* Two Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Priority */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FiAlertCircle /> Priority
                  </label>
                  <select
                    value={ticketData.priority}
                    onChange={(e) => setTicketData({...ticketData, priority: e.target.value})}
                    className="input-field"
                  >
                    <option value="Low">🟢 Low</option>
                    <option value="Medium">🟡 Medium</option>
                    <option value="High">🟠 High</option>
                    <option value="Urgent">🔴 Urgent</option>
                  </select>
                </div>

                {/* Type */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FiTag /> Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={ticketData.type}
                    onChange={(e) => setTicketData({...ticketData, type: e.target.value})}
                    className={`input-field ${errors.type ? 'border-red-500' : ''}`}
                  >
                    {ticketTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Severity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Severity
                  </label>
                  <select
                    value={ticketData.severity}
                    onChange={(e) => setTicketData({...ticketData, severity: e.target.value})}
                    className="input-field"
                  >
                    <option value="low">Low</option>
                    <option value="mid">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                {/* Estimated Hours */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FiClock /> Estimated Hours
                  </label>
                  <input
                    type="number"
                    value={ticketData.estimatedHours}
                    onChange={(e) => setTicketData({...ticketData, estimatedHours: e.target.value})}
                    className="input-field"
                    placeholder="0"
                    min="0"
                  />
                </div>

                {/* Assignee */}
                <div className="md:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FiUser /> Assign To
                  </label>
                  <select
                    value={ticketData.assignedTo}
                    onChange={(e) => setTicketData({...ticketData, assignedTo: e.target.value})}
                    className="input-field"
                  >
                    <option value="">Auto-assign to available agent</option>
                    {agents.map(agent => (
                      <option key={agent._id} value={agent.name}>
                        {agent.name} - {agent.email}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FiTag /> Tags
                </label>
                
                {/* Tag Display */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {ticketData.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm flex items-center gap-2"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="hover:text-red-200 transition-colors"
                      >
                        <FiX />
                      </button>
                    </motion.span>
                  ))}
                </div>

                {/* Tag Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    className="input-field flex-1"
                    placeholder="Add tags (press Enter)..."
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={addTag}
                    className="btn-secondary"
                  >
                    Add Tag
                  </motion.button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  <FiSave /> Create Ticket
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="btn-secondary"
                >
                  Cancel
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CreateTicketModal;

