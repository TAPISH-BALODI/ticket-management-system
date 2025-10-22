import { Controller, Get, Post, Put, Patch, Delete, Body, Res, Req, Param } from '@nestjs/common';
import { AppService } from './app.service';

import {Agents} from './types/Agents';
import {Tickets} from './types/Tickets'

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('support-agents')
   async createAgent(@Body() input:Agents,@Res() res,@Req() req){

    try {
      let result=await this.appService.createAgents(input);
      res.send(result);
    } catch (error) {
      res.send({status:'failed',error})
    }
    
  }

  @Put('support-agents/:id')
  async updateAgent(@Param('id') id: string, @Body() input: Partial<Agents>, @Res() res, @Req() req) {
    try {
      let result = await this.appService.updateAgent(id, input);
      res.send(result);
    } catch (error) {
      res.send({status:'failed', error});
    }
  }

  @Delete('support-agents/:id')
  async deleteAgent(@Param('id') id: string, @Res() res, @Req() req) {
    try {
      let result = await this.appService.deleteAgent(id);
      res.send(result);
    } catch (error) {
      res.send({status:'failed', error});
    }
  }


  @Post('support-tickets')
 async createTicket(@Body() input:Tickets,@Res() res,@Req() req) {

    try {
        let result=await this.appService.createTicket(input);
        res.send(result);
    } catch (error) {
      res.send({status:'failed',error});
    }
  }

  @Put('tickets/:id')
  async updateTicket(@Param('id') id: string, @Body() input: Partial<Tickets>, @Res() res, @Req() req) {
    try {
      let result = await this.appService.updateTicket(id, input);
      res.send(result);
    } catch (error) {
      res.send({status:'failed', error});
    }
  }

  @Patch('tickets/:id/position')
  async updateTicketPosition(@Param('id') id: string, @Body() body: {status: string, position: number}, @Res() res) {
    try {
      let result = await this.appService.updateTicketPosition(id, body.status, body.position);
      res.send(result);
    } catch (error) {
      res.send({status:'failed', error});
    }
  }

  @Post('tickets/:id/comments')
  async addComment(@Param('id') id: string, @Body() comment: any, @Res() res) {
    try {
      let result = await this.appService.addComment(id, comment);
      res.send(result);
    } catch (error) {
      res.send({status:'failed', error});
    }
  }

  @Get('all-agents')
 async getAgents(@Res() res,@Req() req) {

    try {
      
      let result=await this.appService.getAgents();
      res.send(result);

    } catch (error) { 
      res.send({status:'failed',error})
    }
   
  }

  @Get('all-tickets')
 async getTickets(@Res() res,@Req() req) {

  try {

    console.log(req.query)
    let result=await this.appService.getTickets(req,req.query.page,req.query.pageSize);
    res.send(result);

  } catch (error) {
    res.send({status:'failed',error})
  }  
  
  }

  @Get('tickets/:id')
  async getTicketById(@Param('id') id: string, @Res() res) {
    try {
      let result = await this.appService.getTicketById(id);
      res.send(result);
    } catch (error) {
      res.send({status:'failed', error});
    }
  }

  @Post('migrate-ticket-statuses')
  async migrateTicketStatuses(@Res() res) {
    try {
      let result = await this.appService.migrateTicketStatuses();
      res.send(result);
    } catch (error) {
      res.send({status:'failed', error});
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
