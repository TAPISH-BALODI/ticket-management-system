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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const Agents_1 = require("./types/Agents");
const Tickets_1 = require("./types/Tickets");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async createAgent(input, res, req) {
        try {
            let result = await this.appService.createAgents(input);
            res.send(result);
        }
        catch (error) {
            res.send({ status: 'failed', error });
        }
    }
    async createTicket(input, res, req) {
        try {
            let result = await this.appService.createTicket(input);
            res.send(result);
        }
        catch (error) {
            res.send({ status: 'failed', error });
        }
    }
    async updateTicket(id, input, res, req) {
        try {
            let result = await this.appService.updateTicket(id, input);
            res.send(result);
        }
        catch (error) {
            res.send({ status: 'failed', error });
        }
    }
    async updateTicketPosition(id, body, res) {
        try {
            let result = await this.appService.updateTicketPosition(id, body.status, body.position);
            res.send(result);
        }
        catch (error) {
            res.send({ status: 'failed', error });
        }
    }
    async addComment(id, comment, res) {
        try {
            let result = await this.appService.addComment(id, comment);
            res.send(result);
        }
        catch (error) {
            res.send({ status: 'failed', error });
        }
    }
    async getAgents(res, req) {
        try {
            let result = await this.appService.getAgents();
            res.send(result);
        }
        catch (error) {
            res.send({ status: 'failed', error });
        }
    }
    async getTickets(res, req) {
        try {
            console.log(req.query);
            let result = await this.appService.getTickets(req, req.query.page, req.query.pageSize);
            res.send(result);
        }
        catch (error) {
            res.send({ status: 'failed', error });
        }
    }
    async getTicketById(id, res) {
        try {
            let result = await this.appService.getTicketById(id);
            res.send(result);
        }
        catch (error) {
            res.send({ status: 'failed', error });
        }
    }
    async migrateTicketStatuses(res) {
        try {
            let result = await this.appService.migrateTicketStatuses();
            res.send(result);
        }
        catch (error) {
            res.send({ status: 'failed', error });
        }
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)('support-agents'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Agents_1.Agents, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createAgent", null);
__decorate([
    (0, common_1.Post)('support-tickets'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Tickets_1.Tickets, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createTicket", null);
__decorate([
    (0, common_1.Put)('tickets/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateTicket", null);
__decorate([
    (0, common_1.Patch)('tickets/:id/position'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateTicketPosition", null);
__decorate([
    (0, common_1.Post)('tickets/:id/comments'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addComment", null);
__decorate([
    (0, common_1.Get)('all-agents'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAgents", null);
__decorate([
    (0, common_1.Get)('all-tickets'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTickets", null);
__decorate([
    (0, common_1.Get)('tickets/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTicketById", null);
__decorate([
    (0, common_1.Post)('migrate-ticket-statuses'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "migrateTicketStatuses", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map