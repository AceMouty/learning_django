// Actions for all the leads
import axios from 'axios'
import { GET_LEADS } from './types'

// action method: getLeads
export const getLeads = () => dispatch => {
  axios('http://localhost:8000/api/leads/')
  .then(res => dispatch({type: GET_LEADS, payload: res.data}))
  .catch(err => console.log(err))
  
}