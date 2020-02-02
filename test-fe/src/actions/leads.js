// Actions for all the leads
import axios from 'axios'
import { GET_LEADS, DELETE_LEAD } from './types'

// action method: getLeads
export const getLeads = () => dispatch => {
  axios('http://localhost:8000/api/leads/')
  .then(res => dispatch({type: GET_LEADS, payload: res.data}))
  .catch(err => console.log(err))
  
}

export const deleteLead = (id) => dispatch => {
  axios
    .delete(`http://localhost:8000/api/leads/${id}`)
    .then(() => dispatch({type: DELETE_LEAD, payload: id}))
    .catch(err => console.log(err))
}