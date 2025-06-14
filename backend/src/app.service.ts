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
      ticket.status="Assigned"
      return await this.ticketModel.create(ticket)
    }
    else
    {
      return { error: 'No active agents available' };
    }
   
  }

  async getAgents() {
    return await this.agentModel.find()
  }

  async getTickets(req:any, page: number = 1, pageSize: number = 10) {

   const { status, assignedTo, severity, type, sortBy } = req.query;
    let query={} as Tickets;

    if (status) query.status = status
    if (assignedTo) query.assignedTo = assignedTo
    if (severity) query.severity = severity
    if (type) query.type = type

    const sortOptions = {
      dateCreated: 1, // Default sorting by dateCreated in ascending order
      resolvedOn: 1,
    }
    if (sortBy && sortOptions[sortBy]) {
      sortOptions[sortBy] = 'asc'
    }
    const skip = (page - 1) * pageSize;
    console.log(query,"UQERY")
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



   getHello():string {
    return 'Hello World!';
  }
}
