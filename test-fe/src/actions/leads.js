// Actions for all the leads
import axios from 'axios'
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types'

// action method: getLeads
export const getLeads = () => dispatch => {
  axios('http://localhost:8000/api/leads/')
  .then(res => dispatch({type: GET_LEADS, payload: res.data}))
  .catch(err => console.log(err))
  
}

export const addLead = (lead) => dispatch => {
  axios
    .post("http://localhost:8000/api/leads/", lead)
    .then(res => dispatch({type: ADD_LEAD, payload: res.data}))
    .catch(err => console.log(err))
}

export const deleteLead = (id) => dispatch => {
  axios
    .delete(`http://localhost:8000/api/leads/${id}`)
    .then(() => dispatch({type: DELETE_LEAD, payload: id}))
    .catch(err => console.log(err))
}