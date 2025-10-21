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
import * as mongoose from 'mongoose';
export declare const TicketsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    description: string;
    dateCreated: Date;
    topic: string;
    severity: string;
    type: string;
    status: string;
    priority: string;
    tags: string[];
    position: number;
    comments: mongoose.Types.DocumentArray<{
        createdAt: Date;
        author?: string;
        content?: string;
    }>;
    attachments: mongoose.Types.DocumentArray<{
        uploadedAt: Date;
        name?: string;
        url?: string;
    }>;
    lastModified: Date;
    watchers: string[];
    blockedBy: string[];
    blocking: string[];
    assignedTo?: string;
    resolvedOn?: Date;
    colorCode?: string;
    estimatedHours?: number;
    actualHours?: number;
    sprint?: {
        type?: string;
    };
    createdBy?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    description: string;
    dateCreated: Date;
    topic: string;
    severity: string;
    type: string;
    status: string;
    priority: string;
    tags: string[];
    position: number;
    comments: mongoose.Types.DocumentArray<{
        createdAt: Date;
        author?: string;
        content?: string;
    }>;
    attachments: mongoose.Types.DocumentArray<{
        uploadedAt: Date;
        name?: string;
        url?: string;
    }>;
    lastModified: Date;
    watchers: string[];
    blockedBy: string[];
    blocking: string[];
    assignedTo?: string;
    resolvedOn?: Date;
    colorCode?: string;
    estimatedHours?: number;
    actualHours?: number;
    sprint?: {
        type?: string;
    };
    createdBy?: string;
}>> & mongoose.FlatRecord<{
    description: string;
    dateCreated: Date;
    topic: string;
    severity: string;
    type: string;
    status: string;
    priority: string;
    tags: string[];
    position: number;
    comments: mongoose.Types.DocumentArray<{
        createdAt: Date;
        author?: string;
        content?: string;
    }>;
    attachments: mongoose.Types.DocumentArray<{
        uploadedAt: Date;
        name?: string;
        url?: string;
    }>;
    lastModified: Date;
    watchers: string[];
    blockedBy: string[];
    blocking: string[];
    assignedTo?: string;
    resolvedOn?: Date;
    colorCode?: string;
    estimatedHours?: number;
    actualHours?: number;
    sprint?: {
        type?: string;
    };
    createdBy?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
