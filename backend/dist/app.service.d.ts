/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Agents } from './types/Agents';
import { Tickets } from './types/Tickets';
export declare class AppService {
    private agentModel;
    private ticketModel;
    constructor(agentModel: Model<Agents>, ticketModel: Model<Tickets>);
    createAgents(agent: Agents): Promise<import("mongoose").Document<unknown, {}, Agents> & Agents & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getNextAgent(agents: Agents[]): Promise<Agents>;
    createTicket(ticket: Tickets): Promise<(import("mongoose").Document<unknown, {}, Tickets> & Tickets & {
        _id: import("mongoose").Types.ObjectId;
    }) | {
        error: string;
    }>;
    getAgents(): Promise<(import("mongoose").Document<unknown, {}, Agents> & Agents & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getTickets(req: any, page?: number, pageSize?: number): Promise<(import("mongoose").Document<unknown, {}, Tickets> & Tickets & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getHello(): string;
}
