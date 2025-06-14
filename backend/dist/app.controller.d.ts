import { AppService } from './app.service';
import { Agents } from './types/Agents';
import { Tickets } from './types/Tickets';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createAgent(input: Agents, res: any, req: any): Promise<void>;
    createTicket(input: Tickets, res: any, req: any): Promise<void>;
    getAgents(res: any, req: any): Promise<void>;
    getTickets(res: any, req: any): Promise<void>;
    getHello(): string;
}
