export declare class Tickets {
    topic: String;
    description: String;
    dateCreated: Date;
    severity: String;
    type: String;
    assignedTo?: String;
    status: String;
    resolvedOn?: Date;
    priority: String;
    colorCode?: String;
    tags?: String[];
    estimatedHours?: Number;
    actualHours?: Number;
    sprint?: {
        id: String;
        name: String;
        startDate: Date;
        endDate: Date;
        type: String;
    };
    position?: Number;
    comments?: Array<{
        author: String;
        content: String;
        createdAt: Date;
    }>;
    attachments?: Array<{
        name: String;
        url: String;
        uploadedAt: Date;
    }>;
    lastModified?: Date;
    createdBy?: String;
    watchers?: String[];
    blockedBy?: String[];
    blocking?: String[];
}
