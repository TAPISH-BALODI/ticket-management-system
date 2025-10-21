
export class Tickets {
   
 topic: String;
 description: String;
 dateCreated: Date;
 severity: String;
 type: String;
 assignedTo?: String; // Support Agent ID
 status: String; // To Do, In Progress, In Review, Done
 resolvedOn?: Date;
 
 // New fields for enhanced functionality
 priority: String; // Low, Medium, High, Urgent
 colorCode?: String; // Hex color for visual identification
 tags?: String[]; // Labels/categories
 estimatedHours?: Number;
 actualHours?: Number;
 sprint?: {
   id: String;
   name: String;
   startDate: Date;
   endDate: Date;
   type: String; // weekly, monthly, quarterly
 };
 position?: Number; // For drag-drop ordering
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
 watchers?: String[]; // Users following this ticket
 blockedBy?: String[]; // Ticket IDs blocking this one
 blocking?: String[]; // Ticket IDs this one is blocking

}