import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiClock, FiUser, FiAlertCircle, FiCheckCircle, 
  FiEdit, FiTrash2, FiPlus, FiFilter 
} from 'react-icons/fi';
import { BsKanban } from 'react-icons/bs';
import axios from 'axios';
import TicketDetailModal from './TicketDetailModal';
import CreateTicketModal from './CreateTicketModal';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState({
    'To Do': [],
    'In Progress': [],
    'In Review': [],
    'Done': []
  });
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    priority: '',
    assignedTo: '',
    sprint: ''
  });
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetchTickets();
    fetchAgents();
  }, [filters]);

  const fetchTickets = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/all-tickets`, {
        params: filters
      });
      
      // Organize tickets by status
      const organized = {
        'To Do': [],
        'In Progress': [],
        'In Review': [],
        'Done': []
      };
      
      response.data.forEach(ticket => {
        if (organized[ticket.status]) {
          organized[ticket.status].push(ticket);
        }
      });
      
      setTickets(organized);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const fetchAgents = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/all-agents`);
      setAgents(response.data);
    } catch (error) {
      console.error('Error fetching agents:', error);
    }
  };

  const onDragEnd = async (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceColumn = Array.from(tickets[source.droppableId]);
    const destColumn = Array.from(tickets[destination.droppableId]);
    const [movedTicket] = sourceColumn.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceColumn.splice(destination.index, 0, movedTicket);
      setTickets({ ...tickets, [source.droppableId]: sourceColumn });
    } else {
      destColumn.splice(destination.index, 0, movedTicket);
      setTickets({
        ...tickets,
        [source.droppableId]: sourceColumn,
        [destination.droppableId]: destColumn
      });

      // Update ticket status on backend
      try {
        await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/api/tickets/${movedTicket._id}/position`,
          {
            status: destination.droppableId,
            position: destination.index
          }
        );
      } catch (error) {
        console.error('Error updating ticket:', error);
      }
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'To Do': return <FiAlertCircle className="text-gray-500" />;
      case 'In Progress': return <FiClock className="text-blue-500" />;
      case 'In Review': return <FiEdit className="text-purple-500" />;
      case 'Done': return <FiCheckCircle className="text-green-500" />;
      default: return <FiAlertCircle />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'To Do': return 'bg-gray-400';
      case 'In Progress': return 'bg-primary-600';
      case 'In Review': return 'bg-yellow-500';
      case 'Done': return 'bg-gray-700';
      default: return 'bg-gray-400';
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
              <BsKanban className="text-3xl text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-primary-600">
                Kanban Board
              </h1>
              <p className="text-gray-600 mt-1">Drag and drop tickets to manage workflow</p>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCreateModalOpen(true)}
            className="btn-primary flex items-center gap-2"
          >
            <FiPlus className="text-xl" />
            New Ticket
          </motion.button>
        </div>

        {/* Filters */}
        <div className="glass-card p-4 flex gap-4 items-center">
          <FiFilter className="text-gray-500 text-xl" />
          
          <select 
            className="input-field text-sm"
            value={filters.priority}
            onChange={(e) => setFilters({...filters, priority: e.target.value})}
          >
            <option value="">All Priorities</option>
            <option value="Urgent">Urgent</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <select 
            className="input-field text-sm"
            value={filters.assignedTo}
            onChange={(e) => setFilters({...filters, assignedTo: e.target.value})}
          >
            <option value="">All Assignees</option>
            {agents.map(agent => (
              <option key={agent._id} value={agent.name}>{agent.name}</option>
            ))}
          </select>

          {filters.priority || filters.assignedTo ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setFilters({ priority: '', assignedTo: '', sprint: '' })}
              className="btn-ghost text-sm"
            >
              Clear Filters
            </motion.button>
          ) : null}
        </div>
      </motion.div>

      {/* Kanban Columns */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6">
          {Object.keys(tickets).map((status) => (
            <motion.div
              key={status}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="kanban-column"
            >
              {/* Column Header */}
              <div className={`${getStatusColor(status)} text-white rounded-lg p-4 mb-4 shadow-md`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(status)}
                    <h3 className="font-bold text-lg">{status}</h3>
                  </div>
                  <span className="bg-white/30 rounded-full px-3 py-1 text-sm font-semibold">
                    {tickets[status].length}
                  </span>
                </div>
              </div>

              {/* Droppable Area */}
              <Droppable droppableId={status}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`flex-1 space-y-3 min-h-[400px] p-2 rounded-lg transition-all ${
                      snapshot.isDraggingOver ? 'bg-primary-50 border-2 border-dashed border-primary-500' : ''
                    } scrollbar-thin overflow-y-auto`}
                  >
                    <AnimatePresence>
                      {tickets[status].map((ticket, index) => (
                        <Draggable
                          key={ticket._id}
                          draggableId={ticket._id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <motion.div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => setSelectedTicket(ticket)}
                              className={`ticket-card ${snapshot.isDragging ? 'shadow-2xl rotate-3' : ''}`}
                              style={{
                                borderLeft: `4px solid ${ticket.colorCode || '#6366f1'}`
                              }}
                            >
                              {/* Priority Badge */}
                              <div className="flex items-center justify-between mb-2">
                                <span className={`badge badge-priority-${ticket.priority?.toLowerCase() || 'medium'}`}>
                                  {ticket.priority || 'Medium'}
                                </span>
                                <div className={`w-2 h-2 rounded-full ${getPriorityColor(ticket.priority)}`} />
                              </div>

                              {/* Ticket Title */}
                              <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                                {ticket.topic}
                              </h4>

                              {/* Ticket Description */}
                              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                {ticket.description}
                              </p>

                              {/* Tags */}
                              {ticket.tags && ticket.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mb-3">
                                  {ticket.tags.slice(0, 3).map((tag, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-primary-100 text-primary-700 rounded-md text-xs">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* Footer */}
                              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <FiUser className="text-xs" />
                                  <span className="truncate max-w-[120px]">{ticket.assignedTo || 'Unassigned'}</span>
                                </div>
                                
                                {ticket.estimatedHours && (
                                  <div className="flex items-center gap-1 text-sm text-gray-600">
                                    <FiClock className="text-xs" />
                                    <span>{ticket.estimatedHours}h</span>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </Draggable>
                      ))}
                    </AnimatePresence>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </motion.div>
          ))}
        </div>
      </DragDropContext>

      {/* Modals */}
      {selectedTicket && (
        <TicketDetailModal
          ticket={selectedTicket}
          isOpen={!!selectedTicket}
          onClose={() => setSelectedTicket(null)}
          onUpdate={fetchTickets}
          agents={agents}
        />
      )}

      {isCreateModalOpen && (
        <CreateTicketModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onSuccess={fetchTickets}
          agents={agents}
        />
      )}
    </div>
  );
};

export default KanbanBoard;

