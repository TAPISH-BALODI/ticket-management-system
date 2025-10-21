import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, FiEdit3, FiSave, FiTrash2, FiUser, FiClock, 
  FiTag, FiAlertCircle, FiMessageSquare, FiCalendar,
  FiCheckCircle, FiLink
} from 'react-icons/fi';
import axios from 'axios';
import * as moment from 'moment';

const TicketDetailModal = ({ ticket, isOpen, onClose, onUpdate, agents }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTicket, setEditedTicket] = useState(ticket);
  const [newComment, setNewComment] = useState('');
  const [newTag, setNewTag] = useState('');

  const handleSave = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}/api/tickets/${ticket._id}`,
        editedTicket
      );
      setIsEditing(false);
      onUpdate();
      onClose();
    } catch (error) {
      console.error('Error updating ticket:', error);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/tickets/${ticket._id}/comments`,
        {
          author: editedTicket.assignedTo || 'Anonymous',
          content: newComment
        }
      );
      setNewComment('');
      onUpdate();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const addTag = () => {
    if (!newTag.trim()) return;
    setEditedTicket({
      ...editedTicket,
      tags: [...(editedTicket.tags || []), newTag]
    });
    setNewTag('');
  };

  const removeTag = (tagToRemove) => {
    setEditedTicket({
      ...editedTicket,
      tags: editedTicket.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'urgent': return 'border-red-500 bg-red-50';
      case 'high': return 'border-orange-500 bg-orange-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-green-500 bg-green-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card-strong max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin"
          >
            {/* Header */}
            <div className={`border-l-8 ${getPriorityColor(editedTicket.priority)} p-6 rounded-t-2xl`}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedTicket.topic}
                      onChange={(e) => setEditedTicket({...editedTicket, topic: e.target.value})}
                      className="input-field text-2xl font-bold mb-2"
                    />
                  ) : (
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{editedTicket.topic}</h2>
                  )}
                  
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className={`badge badge-priority-${editedTicket.priority?.toLowerCase() || 'medium'}`}>
                      <FiAlertCircle className="text-xs" />
                      {editedTicket.priority || 'Medium'}
                    </span>
                    <span className="badge bg-blue-100 text-blue-700 border border-blue-300">
                      {editedTicket.status}
                    </span>
                    <span className="text-sm text-gray-600">
                      Created {moment(editedTicket.dateCreated).fromNow()}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {isEditing ? (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSave}
                        className="btn-primary flex items-center gap-2"
                      >
                        <FiSave /> Save
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setIsEditing(false);
                          setEditedTicket(ticket);
                        }}
                        className="btn-secondary"
                      >
                        Cancel
                      </motion.button>
                    </>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsEditing(true)}
                      className="btn-secondary flex items-center gap-2"
                    >
                      <FiEdit3 /> Edit
                    </motion.button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="btn-ghost"
                  >
                    <FiX className="text-2xl" />
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FiMessageSquare /> Description
                </label>
                {isEditing ? (
                  <textarea
                    value={editedTicket.description}
                    onChange={(e) => setEditedTicket({...editedTicket, description: e.target.value})}
                    className="input-field min-h-[120px]"
                  />
                ) : (
                  <p className="text-gray-700 bg-gray-50 dark:bg-dark-200 p-4 rounded-xl">
                    {editedTicket.description}
                  </p>
                )}
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Assignee */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FiUser /> Assigned To
                  </label>
                  {isEditing ? (
                    <select
                      value={editedTicket.assignedTo || ''}
                      onChange={(e) => setEditedTicket({...editedTicket, assignedTo: e.target.value})}
                      className="input-field"
                    >
                      <option value="">Unassigned</option>
                      {agents.map(agent => (
                        <option key={agent._id} value={agent.name}>{agent.name}</option>
                      ))}
                    </select>
                  ) : (
                    <div className="glass-card p-3">
                      <span className="font-medium">{editedTicket.assignedTo || 'Unassigned'}</span>
                    </div>
                  )}
                </div>

                {/* Priority */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FiAlertCircle /> Priority
                  </label>
                  {isEditing ? (
                    <select
                      value={editedTicket.priority || 'Medium'}
                      onChange={(e) => setEditedTicket({...editedTicket, priority: e.target.value})}
                      className="input-field"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Urgent">Urgent</option>
                    </select>
                  ) : (
                    <div className="glass-card p-3">
                      <span className={`badge badge-priority-${editedTicket.priority?.toLowerCase() || 'medium'}`}>
                        {editedTicket.priority || 'Medium'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Type */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FiTag /> Type
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedTicket.type}
                      onChange={(e) => setEditedTicket({...editedTicket, type: e.target.value})}
                      className="input-field"
                    />
                  ) : (
                    <div className="glass-card p-3">
                      <span className="font-medium">{editedTicket.type}</span>
                    </div>
                  )}
                </div>

                {/* Severity */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FiAlertCircle /> Severity
                  </label>
                  {isEditing ? (
                    <select
                      value={editedTicket.severity}
                      onChange={(e) => setEditedTicket({...editedTicket, severity: e.target.value})}
                      className="input-field"
                    >
                      <option value="low">Low</option>
                      <option value="mid">Medium</option>
                      <option value="high">High</option>
                    </select>
                  ) : (
                    <div className="glass-card p-3">
                      <span className="font-medium capitalize">{editedTicket.severity}</span>
                    </div>
                  )}
                </div>

                {/* Estimated Hours */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FiClock /> Estimated Hours
                  </label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editedTicket.estimatedHours || ''}
                      onChange={(e) => setEditedTicket({...editedTicket, estimatedHours: e.target.value})}
                      className="input-field"
                      placeholder="0"
                    />
                  ) : (
                    <div className="glass-card p-3">
                      <span className="font-medium">{editedTicket.estimatedHours || 0} hours</span>
                    </div>
                  )}
                </div>

                {/* Actual Hours */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FiCheckCircle /> Actual Hours
                  </label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editedTicket.actualHours || ''}
                      onChange={(e) => setEditedTicket({...editedTicket, actualHours: e.target.value})}
                      className="input-field"
                      placeholder="0"
                    />
                  ) : (
                    <div className="glass-card p-3">
                      <span className="font-medium">{editedTicket.actualHours || 0} hours</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FiTag /> Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {(editedTicket.tags || []).map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm flex items-center gap-2"
                    >
                      {tag}
                      {isEditing && (
                        <button onClick={() => removeTag(tag)} className="hover:text-red-200">
                          <FiX />
                        </button>
                      )}
                    </motion.span>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addTag()}
                      className="input-field flex-1"
                      placeholder="Add a tag..."
                    />
                    <button onClick={addTag} className="btn-secondary">
                      Add
                    </button>
                  </div>
                )}
              </div>

              {/* Comments */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <FiMessageSquare /> Comments ({(editedTicket.comments || []).length})
                </label>
                
                <div className="space-y-3 mb-4 max-h-[300px] overflow-y-auto scrollbar-thin">
                  {(editedTicket.comments || []).map((comment, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="glass-card p-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-primary-600">{comment.author}</span>
                        <span className="text-xs text-gray-500">
                          {moment(comment.createdAt).fromNow()}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                    className="input-field flex-1"
                    placeholder="Add a comment..."
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddComment}
                    className="btn-primary"
                  >
                    Send
                  </motion.button>
                </div>
              </div>

              {/* Timestamps */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <span className="text-sm text-gray-600">Created</span>
                  <p className="font-medium">{moment(editedTicket.dateCreated).format('MMM DD, YYYY')}</p>
                </div>
                {editedTicket.resolvedOn && (
                  <div>
                    <span className="text-sm text-gray-600">Resolved</span>
                    <p className="font-medium">{moment(editedTicket.resolvedOn).format('MMM DD, YYYY')}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TicketDetailModal;

