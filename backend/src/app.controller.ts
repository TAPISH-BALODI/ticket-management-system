import { Controller, Get,Post,Body,Res,Req } from '@nestjs/common';
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


  @Post('support-tickets')
 async createTicket(@Body() input:Tickets,@Res() res,@Req() req) {

    try {
        let result=await this.appService.createTicket(input);
        res.send(result);
    } catch (error) {
      res.send({status:'failed',error});
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


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
