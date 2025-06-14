import * as mongoose from 'mongoose';

export const AgentsSchema=new mongoose.Schema({
    name : {type:String, required : true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    description:{type:String, required: true},
    active: {type:Boolean, required: true},
    dateCreated : {type:String, required : true},
    ticketCount: { type: Number, default: 0 },
  

})
