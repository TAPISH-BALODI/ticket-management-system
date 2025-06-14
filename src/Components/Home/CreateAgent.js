import React from 'react'
import axios from'axios'

import { Modal,ModalHeader,ModalBody,ModalFooter,Button } from 'reactstrap'


export default function CreateAgent({handler}) {


  const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

  const [modal, setModal] = React.useState(false);
let date=new Date();
  const [agentData, setAgentData] = React.useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    dateCreated:date,
    active:true
  });

  const createAgent = async () => {
    if(validateEmail(agentData.email)&&agentData.phone.length===10&&agentData.name.length>0&&agentData.description.length>0)
    {
      try {
        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/support-agents`, agentData);
        console.log('Support Agent created successfully.');
      } catch (error) {
        console.error('Error creating Support Agent:', error);
      }

    }
    else
    {
      alert('Please do not leave any field empty and enter a valid email and phone number')
    }
  };
  return (
    <>
    <button className="submitButton" style={{marginLeft:'0%',padding:'1%'}} onClick={()=>setModal(true)}>Create Agent</button>
    <Modal size="lg" isOpen={modal} >
      <ModalHeader toggle={()=>setModal(false)}>Create Agent</ModalHeader>
      <ModalBody style={{display:'flex',justifyContent:'center'}}>
         <div className="InsideTabs">
    
      <div className="form">
        <label>Name:</label>
        <input type="text" value={agentData.name} onChange={(e) => setAgentData({ ...agentData, name: e.target.value })} />
      </div>
        <br />
      <div className="form">
        <label>Email:</label>
        <input type="text" value={agentData.email} onChange={(e) => setAgentData({ ...agentData, email: e.target.value })} />
        </div>
        <br />
      <div className="form">
        <label>Phone:</label>
        <input type="number" min={0} value={agentData.phone} onChange={(e) => setAgentData({ ...agentData, phone: e.target.value })} />
    </div>
        <br />
      <div className="form">
        <label>Description:</label>
        <input type="text" value={agentData.description} onChange={(e) => setAgentData({ ...agentData, description: e.target.value })} />
        </div>
        <br />
      </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={()=>{setModal(false);handler()}}>Cancel</Button>
        <Button color="primary" style={{backgroundColor:'#d32028',border:'none'}} onClick={()=>{createAgent();handler()}}>Create Agent</Button>{' '}
      </ModalFooter>
    </Modal>

      
   
   

    </>
  )
}
