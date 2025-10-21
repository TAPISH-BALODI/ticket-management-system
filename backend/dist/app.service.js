"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AppService = class AppService {
    constructor(agentModel, ticketModel) {
        this.agentModel = agentModel;
        this.ticketModel = ticketModel;
    }
    async createAgents(agent) {
        return await this.agentModel.create(agent);
    }
    async getNextAgent(agents) {
        const agentWithLeastLoad = agents.reduce((minAgent, curAgent) => {
            return curAgent.ticketCount < minAgent.ticketCount ? curAgent : minAgent;
        }, agents[0]);
        return agentWithLeastLoad;
    }
    async createTicket(ticket) {
        let availableAgents = await this.agentModel.find({ active: true });
        if (availableAgents.length > 0) {
            const assignedAgent = await this.getNextAgent(availableAgents);
            await this.agentModel.findOneAndUpdate({ email: assignedAgent.email }, { $inc: { ticketCount: 1 } });
            ticket.assignedTo = assignedAgent.name;
            if (!ticket.status || ticket.status === 'New' || ticket.status === 'Assigned') {
                ticket.status = "To Do";
            }
            return await this.ticketModel.create(ticket);
        }
        else {
            if (!ticket.status || ticket.status === 'New') {
                ticket.status = "To Do";
            }
            return await this.ticketModel.create(ticket);
        }
    }
    async getAgents() {
        return await this.agentModel.find();
    }
    async getTickets(req, page = 1, pageSize = 10) {
        const { status, assignedTo, severity, type, sortBy, sprint, priority } = req.query;
        let query = {};
        if (status)
            query.status = status;
        if (assignedTo)
            query.assignedTo = assignedTo;
        if (severity)
            query.severity = severity;
        if (type)
            query.type = type;
        if (priority)
            query.priority = priority;
        if (sprint)
            query['sprint.id'] = sprint;
        const sortOptions = {
            dateCreated: 1,
            resolvedOn: 1,
            priority: 1,
            position: 1
        };
        if (sortBy && sortOptions[sortBy]) {
            sortOptions[sortBy] = 'asc';
        }
        const skip = (page - 1) * pageSize;
        console.log(query, "QUERY");
        if (Object.keys(query).length > 0) {
            const supportTickets = await this.ticketModel.find(query)
                .skip(skip)
                .limit(pageSize)
                .sort(sortOptions[sortBy] = 'asc')
                .exec();
            return supportTickets;
        }
        else {
            const supportTickets = await this.ticketModel.find()
                .skip(skip)
                .limit(pageSize)
                .sort(sortBy ? sortOptions[sortBy] = 'asc' : 'asc')
                .exec();
            console.log(supportTickets, "TICK");
            return supportTickets;
        }
    }
    async getTicketById(id) {
        return await this.ticketModel.findById(id).exec();
    }
    async updateTicket(id, updates) {
        updates['lastModified'] = new Date();
        return await this.ticketModel.findByIdAndUpdate(id, updates, { new: true }).exec();
    }
    async updateTicketPosition(id, status, position) {
        return await this.ticketModel.findByIdAndUpdate(id, { status, position, lastModified: new Date() }, { new: true }).exec();
    }
    async addComment(id, comment) {
        return await this.ticketModel.findByIdAndUpdate(id, {
            $push: { comments: { ...comment, createdAt: new Date() } },
            lastModified: new Date()
        }, { new: true }).exec();
    }
    async migrateTicketStatuses() {
        const statusMapping = {
            'New': 'To Do',
            'Assigned': 'In Progress',
            'Resolved': 'Done'
        };
        let migratedCount = 0;
        for (const [oldStatus, newStatus] of Object.entries(statusMapping)) {
            const result = await this.ticketModel.updateMany({ status: oldStatus }, { $set: { status: newStatus } }).exec();
            migratedCount += result.modifiedCount || 0;
        }
        return {
            success: true,
            message: `Migrated ${migratedCount} tickets to new status values`,
            migratedCount
        };
    }
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Agents')),
    __param(1, (0, mongoose_1.InjectModel)('Tickets')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], AppService);
//# sourceMappingURL=app.service.js.map