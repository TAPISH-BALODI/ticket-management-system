import * as mongoose from 'mongoose';

export const TicketsSchema=new mongoose.Schema({
    topic:{type:String,required:true},
    description:{type:String,required:true},
    dateCreated:{type:String, required: true},
    severity: {type:String, required: true},
    type : {type:String, required : true},
    assignedTo : {type:String, required : false},// Support Agent ID
    status : {type : String, required : true,default:'New'},// New, Assigned, Resolved
    resolvedOn : {type:String, required : false}
    

})
