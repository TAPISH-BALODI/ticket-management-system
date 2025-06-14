import React,{useState} from 'react';
import axios from 'axios';
import './index.css'

import Agents from './Agents'
import Tickets from './Tickets'

export default function Index() {

  const [tab,setTab]=useState(0)

  const [agentData, setAgentData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });





 

  const getTickets = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/all-tickets`);

      console.log('Support Tickets retrieved successfully:', response.data);

    } catch (error) {
      console.error('Error retrieving Support Tickets:', error);
    }
  }

  React.useEffect(() => {
  
    
        getTickets();

  }, [])





  return (
    <>
      <div >
      <h1 style={{textAlign:'center',paddingTop:'2%'}}>Support Ticket Entry System</h1>
      <div style={{display:'flex',justifyContent:'center',paddingBottom: '5px',borderBottom:'2px solid #DbDBDb',marginTop:'5%'}}>
      <div style={{boxShadow:tab===1?'0px 0px 6px 0px rgb(0,0.2,0.5,0.5)':'',marginRight:'10px',padding:'10px',cursor:'pointer'}} className="Tabs" onClick={()=>setTab(1)}>
        Agents
      </div>
      <div style={{boxShadow:tab===-1?'0px 0px 6px 0px rgb(0,0.2,0.5,0.5)':'',marginLeft:'10px',padding:'10px',cursor:'pointer'}} className="Tabs" onClick={()=>setTab(-1)}>
         
         Tickets
      </div>
    </div>
     { tab===1?<Agents/>:
      tab===-1?
      <Tickets/>
       :
      <div style={{display:'flex',justifyContent:'center',alignItems: 'center',paddingTop:'10%'}}>
        <p>Click <span onClick={()=>setTab(1)} style={{color:'blue',fontSize:'18px'}}> Agents</span>/ <span style={{color:'blue',fontSize:'18px'}} onClick={()=>setTab(-1)}>Tickets</span>  to begin with !</p>
      </div>}
     
    </div>
      </>
  )
}
