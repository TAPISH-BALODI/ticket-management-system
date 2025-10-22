import { AppService } from './app.service';
import { Agents } from './types/Agents';
import { Tickets } from './types/Tickets';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createAgent(input: Agents, res: any, req: any): Promise<void>;
    updateAgent(id: string, input: Partial<Agents>, res: any, req: any): Promise<void>;
    deleteAgent(id: string, res: any, req: any): Promise<void>;
    createTicket(input: Tickets, res: any, req: any): Promise<void>;
    updateTicket(id: string, input: Partial<Tickets>, res: any, req: any): Promise<void>;
    updateTicketPosition(id: string, body: {
        status: string;
        position: number;
    }, res: any): Promise<void>;
    addComment(id: string, comment: any, res: any): Promise<void>;
    getAgents(res: any, req: any): Promise<void>;
    getTickets(res: any, req: any): Promise<void>;
    getTicketById(id: string, res: any): Promise<void>;
    migrateTicketStatuses(res: any): Promise<void>;
    getHello(): string;
}
