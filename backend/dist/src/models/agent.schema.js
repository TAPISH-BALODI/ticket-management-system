"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentsSchema = void 0;
const mongoose = require("mongoose");
exports.AgentsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: false, default: 'No description provided' },
    active: { type: Boolean, required: false, default: true },
    dateCreated: { type: String, required: false, default: () => new Date().toISOString() },
    ticketCount: { type: Number, default: 0 },
});
//# sourceMappingURL=agent.schema.js.map