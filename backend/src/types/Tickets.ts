
export class Tickets {
   
 topic: String;
 description: String;
 dateCreated: Date;
 severity: String;
 type: String;
 assignedTo?: String; // Support Agent ID
 status: String; // New, Assigned, Resolved
 resolvedOn?: Date;



}