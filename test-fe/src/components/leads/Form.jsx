import React from 'react'
import { connect } from "react-redux"
import { addLead } from "../../actions/leads"

function Form(props){
  const {addLead} = props
  const [formState, setFormState] = React.useState({
    name: '',
    email:'',
    message:''
  })
  
  function onSubmit(e){
    e.preventDefault()
    addLead(formState)
    setFormState({
      name: '',
      email:'',
      message:''
    })
  }
  function onChange(e){
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  return(
    <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={(e) => onChange(e)}
              value={formState.name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={(e) => onChange(e)}
              value={formState.email}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={(e) => onChange(e)}
              value={formState.message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
  )
}



export default connect(null,{addLead})(Form)