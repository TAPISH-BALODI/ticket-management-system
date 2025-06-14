import React,{useEffect,useState} from 'react'
import * as moment from 'moment'
import {Table} from 'reactstrap'

import axios from 'axios'
import CreateAgent from './CreateAgent'
import './index.css'


export default function Agents() {

  const [agentsData,setAgentsData]=useState(null)

  const fetchAgents=async()=>{
    await axios.get(`${process.env.REACT_APP_BASE_URL}/api/all-agents`).then((res)=>{
      setAgentsData(res?.data)
      return res?.data
    }
      )
      .catch((err)=>{
        return err
      })
  }
  useEffect(()=>{
    fetchAgents();
  }
  ,[])


  return (
    <div className="containers">
      <h3>List of Agents</h3>
      <div style={{display:'flex',flexDirection: 'row',justifyContent:'space-between',marginTop:'2%'}}>
      <CreateAgent handler={fetchAgents}/>
     
      </div>

      <Table style={{marginTop:'2%'}}>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Description</th>
        </thead>
        <tbody>
         {agentsData?.map((item)=>{
           return <tr>
             <td>{item.name}</td>
             <td>{item.email}</td>
             <td>{item.phone}</td>
             <td>{item.description}</td>
             </tr>
         }) }
        </tbody>
      </Table>

    </div>
  )
}
