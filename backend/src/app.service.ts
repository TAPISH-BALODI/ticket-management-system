import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';

import {Agents} from './types/Agents';
import {Tickets} from './types/Tickets'


@Injectable(
  
)
export class AppService {

  constructor(
      @InjectModel('Agents') private agentModel :  Model<Agents>,
        @InjectModel('Tickets') private ticketModel :  Model<Tickets>,
  ){}

  async createAgents(agent:Agents) {
    return await this.agentModel.create(agent)
  }

async getNextAgent(agents:Agents[]) {
  // Find the agent with the least load (minimum ticketCount)
  const agentWithLeastLoad = agents.reduce((minAgent, curAgent) => {
    return curAgent.ticketCount < minAgent.ticketCount ? curAgent : minAgent;
  }, agents[0]);

  return agentWithLeastLoad;
}
  async createTicket(ticket:Tickets) {
    let availableAgents = await this.agentModel.find({active:true})
    if(availableAgents.length > 0) {
       const assignedAgent = await this.getNextAgent(availableAgents) as Agents;
    await this.agentModel.findOneAndUpdate({email:assignedAgent.email}, { $inc: { ticketCount: 1 } });
      ticket.assignedTo=assignedAgent.name
      // Set to "In Progress" if assigned, or keep status from frontend
      if(!ticket.status || ticket.status === 'New' || ticket.status === 'Assigned') {
        ticket.status = "To Do" as any;
      }
      return await this.ticketModel.create(ticket)
    }
    else
    {
      // If no agents available, keep as "To Do"
      if(!ticket.status || ticket.status === 'New') {
        ticket.status = "To Do" as any;
      }
      return await this.ticketModel.create(ticket);
    }
   
  }

  async getAgents() {
    return await this.agentModel.find()
  }

  async getTickets(req:any, page: number = 1, pageSize: number = 10) {

   const { status, assignedTo, severity, type, sortBy, sprint, priority } = req.query;
    let query={} as any;

    if (status) query.status = status
    if (assignedTo) query.assignedTo = assignedTo
    if (severity) query.severity = severity
    if (type) query.type = type
    if (priority) query.priority = priority
    if (sprint) query['sprint.id'] = sprint

    const sortOptions = {
      dateCreated: 1, // Default sorting by dateCreated in ascending order
      resolvedOn: 1,
      priority: 1,
      position: 1
    }
    if (sortBy && sortOptions[sortBy]) {
      sortOptions[sortBy] = 'asc'
    }
    const skip = (page - 1) * pageSize;
    console.log(query,"QUERY")
    if(Object.keys(query).length>0)
    {

      const supportTickets = await this.ticketModel.find(query)
      .skip(skip)
        .limit(pageSize)
        .sort(sortOptions[sortBy]='asc')
        .exec()
       
  return supportTickets;

    }
    else
    {
      const supportTickets = await this.ticketModel.find()
      .skip(skip)
        .limit(pageSize)
        .sort(sortBy?sortOptions[sortBy]='asc':'asc')
        .exec()
        console.log(supportTickets,"TICK")

  return supportTickets;

    }

  }

  async getTicketById(id: string) {
    return await this.ticketModel.findById(id).exec();
  }

  async updateTicket(id: string, updates: Partial<Tickets>) {
    updates['lastModified'] = new Date() as any;
    return await this.ticketModel.findByIdAndUpdate(id, updates, { new: true }).exec();
  }

  async updateTicketPosition(id: string, status: string, position: number) {
    return await this.ticketModel.findByIdAndUpdate(
      id, 
      { status, position, lastModified: new Date() as any }, 
      { new: true }
    ).exec();
  }

  async addComment(id: string, comment: any) {
    return await this.ticketModel.findByIdAndUpdate(
      id,
      { 
        $push: { comments: { ...comment, createdAt: new Date() } },
        lastModified: new Date() as any
      },
      { new: true }
    ).exec();
  }

  async migrateTicketStatuses() {
    // Migrate old status values to new ones
    // Old: New, Assigned, Resolved
    // New: To Do, In Progress, In Review, Done
    
    const statusMapping = {
      'New': 'To Do',
      'Assigned': 'In Progress',
      'Resolved': 'Done'
    };

    let migratedCount = 0;

    for (const [oldStatus, newStatus] of Object.entries(statusMapping)) {
      const result = await this.ticketModel.updateMany(
        { status: oldStatus },
        { $set: { status: newStatus } }
      ).exec();
      migratedCount += result.modifiedCount || 0;
    }

    return { 
      success: true, 
      message: `Migrated ${migratedCount} tickets to new status values`,
      migratedCount 
    };
  }

   getHello():string {
    return 'Hello World!';
  }
}
