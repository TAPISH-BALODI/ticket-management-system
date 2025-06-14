import React,{useEffect,useState} from 'react'
import * as moment from 'moment'

import {Table} from 'reactstrap'

import axios from 'axios'
import CreateTicket from './CreateTicket'
import './index.css'


export default function Tickets() {

const [ticketsData,setTicketsData]=useState(null)
const [agentSelection,setAgentsSelection]=useState(null)
const [status,setStatus]=useState('')
const [severity,setSeverity]=useState('')
const [assignedTo,setAssignedTo]=useState('')
const [sort,setSort]=useState('')

 const fetchAgents=async()=>{
    await axios.get(`${process.env.REACT_APP_BASE_URL}/api/all-agents`).then((res)=>{
      setAgentsSelection(res?.data)
      return res?.data
    }
      )
      .catch((err)=>{
        return err
      })
  }
 
const fetchTickets= async ()=>{
  
  await axios.get(`${process.env.REACT_APP_BASE_URL}/api/all-tickets?status=${status}&severity=${severity}&assignedTo=${assignedTo}&sortBy=${sort}`).then((res)=>{
        
        setTicketsData(res?.data)
        return res;
    })
      .catch((err)=>{
        return err
      })
}
  useEffect(()=>{
    fetchTickets()
    fetchAgents();
  }
  ,[status,severity,assignedTo,sort])


  return (
    <div className="containers">
      <h3>List of Tickets</h3>
      <div style={{display:'flex',flexDirection: 'row',justifyContent:'space-between',marginTop:'2%'}}>
      <CreateTicket handler={fetchTickets}/>
       <div style={{display:"flex",justifyContent:'space-around',gap:'8%'}}>
        <select onChange={(e)=>setStatus(e.target.value)} style={{width:'10em'}} name="Status" id="status">
        <option value="">Status</option>
        <option value="New">New</option>
        <option value="Resolved">Resolved</option>
        <option value="Assigned">Assigned</option>
      </select>
        <select onChange={(e)=>setSeverity(e.target.value)} style={{width:'10em'}} name="Severity" id="severity">
        <option value="">Severity</option>
        <option value="low">Low</option>
        <option value="mid">Mid</option>
        <option value="high">High</option>
      </select>
        <select onChange={(e)=>setAssignedTo(e.target.value)} style={{width:'10em'}} name="AssignedTo" id="assignedTo">
        <option value="">Assigned To</option>
       { agentSelection?.map((item,idx)=>{
       return(
       <option value={item.name}>{item.name}</option>
       )
       }
       )
       }
      </select>
        <select onChange={(e)=>setSort(e.target.value)} style={{width:'10em'}} name="Sort" id="sort">
        <option value="">Sort</option>
        <option value="dateCreated">Date Created</option>
        <option value="resolvedOn">Resolved On</option>
        
      </select>
      </div>
      </div>

      <Table style={{marginTop:'2%'}}>
        <thead>
          <th>Topic</th>
          <th>Description</th>
          <th>Date created</th>
          <th>Severity</th>
          <th>Type</th>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Resolved On</th>
        </thead>
        <tbody>
        { ticketsData?.map((item)=>{
          return(
            <tr>
            <td>{item.topic}</td>
            <td>{item.description}</td>
            <td>{moment(item.dateCreated).format("DD/MM/YYYY")}</td>
            <td>{item.severity}</td>
            <td>{item.type}</td>
            <td>{item.assignedTo}</td>
            <td>{item.status}</td>
            <td>{item.resolvedOn?item.resolvedOn:"Pending"}</td>
          </tr>
          )
        })  
        }
        </tbody>
      </Table>

    </div>
  )
}
