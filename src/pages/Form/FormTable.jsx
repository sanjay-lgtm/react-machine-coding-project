import React from 'react'
import '../Home/Home.css'
import { IoClose } from 'react-icons/io5'
const FormTable = ({handleSubmit,handleOnChange,handleClose,rest}) => {
  return (
    <div className='addContainer'>

    <form onSubmit={ handleSubmit }>
      <div className='close-btn' onClick={handleClose}><IoClose /></div>
      <label htmlFor='projectname'>Project Name</label>
      <input type='text' id='projectname' name='projectname' placeholder='enter project name' required onChange={ handleOnChange } value={rest.projectname}/>

      <label htmlFor='visitURL'>Link</label>
      <input type='text' id='visitURL' name='visitURL' placeholder='enter visitURL name' required onChange={ handleOnChange } value={rest.visitURL}/>

      <label htmlFor='authername'>Auher Name</label>
      <input type='text' id='authername' name='authername' placeholder='enter auther name' required onChange={ handleOnChange } value={rest.authername} />

      <button className='btn'>Submit</button>
    </form>

  </div>
  )
}

export default FormTable
