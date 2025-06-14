import { combineReducers } from "redux";
import { createTicket } from "./createTicket.reducer";
import { createAgent } from "./createAgent.reducer";

 


const rootReducer = combineReducers({

  createAgent: createAgent,
  createTicket: createTicket,
  

 
});

export default rootReducer;