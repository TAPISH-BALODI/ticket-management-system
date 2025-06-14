import React,{useEffect,useState} from 'react'
import axios from'axios'
import './index.css'

import { Modal,ModalHeader,ModalBody,ModalFooter,Button } from 'reactstrap'


export default function CreateTicket({handler}) {

  let date=new Date()
  const [ticketData, setTicketData] = useState({
    topic: '',
    description: '',
    severity: '',
    type: '',
    dateCreated: date,
    resolvedOn:''
  });
  const [modal, setModal] = React.useState(false);
 


   const createTicket = async () => {
    if(ticketData.topic.length>0 && ticketData.description.length>0 && ticketData.severity!==""&&ticketData.type.length>0)
    {
      try {
        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/support-tickets`, ticketData);
        console.log('Support Ticket created successfully.');
      } catch (error) {
        console.error('Error creating Support Ticket:', error);
      }
    }
    else{
      alert("Please do not leave any field empty and select severity level")
    }
  };

  useEffect(() => {
    


  }, [])
  
  return (
    <>
    <Modal size="lg" isOpen={modal} >
      <ModalHeader toggle={()=>setModal(false)}>Create Ticket</ModalHeader>
      <ModalBody style={{display:'flex',justifyContent:'center'}}>
    
      <div className="InsideTabs">
    

        <div className="form">
        <label>Topic:</label>
        <input type="text" value={ticketData.topic} onChange={(e) => setTicketData({ ...ticketData, topic: e.target.value })} />
        </div>
        <br />
        <div className="form">
        <label>Description:</label>
        <input type="text" value={ticketData.description} onChange={(e) => setTicketData({ ...ticketData, description: e.target.value })} />
        </div>
        <br />
        <div className="form">
        <label>Severity:</label>
         <select onChange={(e)=>setTicketData({ ...ticketData, severity: e.target.value })} style={{width:'14em',borderRadius:'10px',padding:'5px'}} name="Severity" id="severity">
        <option value="">Severity</option>
        <option value="low">Low</option>
        <option value="mid">Mid</option>
        <option value="high">High</option>
      </select>
        </div>
        {/* <div className="form">
        <label>Assigned To:</label>
        <input disabled type="text" value={ticketData.assignedTo} onChange={(e) => setTicketData({ ...ticketData, assignedTo: e.target.value })} />
       
        </div> */}
       
        <br />
        <div className="form">
        <label>Type:</label>
        <input type="text" value={ticketData.type} onChange={(e) => setTicketData({ ...ticketData, type: e.target.value })} />
        </div>

        <br />
       
      </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={()=>{setModal(false);handler()}}>Cancel</Button>
        <Button color="primary" style={{backgroundColor:'#d32028',border:'none'}} onClick={()=>{createTicket();handler()}}>Create Ticket</Button>{' '}
      </ModalFooter>
    </Modal>

    
      
      <button className="submitButton" style={{marginLeft:'0%',padding:'1%'}} onClick={()=>setModal(true)}>Create Ticket</button>
   
   

    </>
  )
}
