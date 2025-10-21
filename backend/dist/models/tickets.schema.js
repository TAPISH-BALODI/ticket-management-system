"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsSchema = void 0;
const mongoose = require("mongoose");
exports.TicketsSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    description: { type: String, required: true },
    dateCreated: { type: Date, required: true, default: Date.now },
    severity: { type: String, required: true },
    type: { type: String, required: true },
    assignedTo: { type: String, required: false },
    status: { type: String, required: true, default: 'To Do' },
    resolvedOn: { type: Date, required: false },
    priority: { type: String, required: true, default: 'Medium' },
    colorCode: { type: String, required: false },
    tags: [{ type: String }],
    estimatedHours: { type: Number, required: false },
    actualHours: { type: Number, required: false },
    sprint: {
        id: { type: String },
        name: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        type: { type: String }
    },
    position: { type: Number, default: 0 },
    comments: [{
            author: { type: String },
            content: { type: String },
            createdAt: { type: Date, default: Date.now }
        }],
    attachments: [{
            name: { type: String },
            url: { type: String },
            uploadedAt: { type: Date, default: Date.now }
        }],
    lastModified: { type: Date, default: Date.now },
    createdBy: { type: String },
    watchers: [{ type: String }],
    blockedBy: [{ type: String }],
    blocking: [{ type: String }]
});
//# sourceMappingURL=tickets.schema.js.map