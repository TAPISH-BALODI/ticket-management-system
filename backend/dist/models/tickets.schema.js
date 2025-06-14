"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsSchema = void 0;
const mongoose = require("mongoose");
exports.TicketsSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    description: { type: String, required: true },
    dateCreated: { type: String, required: true },
    severity: { type: String, required: true },
    type: { type: String, required: true },
    assignedTo: { type: String, required: false },
    status: { type: String, required: true, default: 'New' },
    resolvedOn: { type: String, required: false }
});
//# sourceMappingURL=tickets.schema.js.map