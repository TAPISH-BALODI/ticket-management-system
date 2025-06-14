import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConnectOptions } from 'mongoose';
import {AgentsSchema} from './models/agent.schema';
import {TicketsSchema} from './models/tickets.schema';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Agents', schema: AgentsSchema },{ name: 'Tickets', schema: TicketsSchema }]), MongooseModule.forRoot('mongodb+srv://tapish26:Tapish%4026@cluster0.wm5qe.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
