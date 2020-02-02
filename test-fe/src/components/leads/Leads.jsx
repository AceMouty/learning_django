import React from 'react'
import { connect } from "react-redux"
// import PropTypes from 'prop-types'
import { getLeads } from '../../actions/leads'

function Leads(props){
  React.useEffect(() => {
    console.log("IN THE USE EFFECT")
    props.getLeads()
  }, [])
  
 if (!props.leads) return <h1>Loading..</h1>

  return(
    <> 
      <h2>Leads</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {props.leads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td><button className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
          )) }
        </tbody>
      </table>
    </>
  )
}

const mapStateToProps = state => ({
  leads: state.leads.leads
})

export default connect(mapStateToProps, {getLeads})(Leads)