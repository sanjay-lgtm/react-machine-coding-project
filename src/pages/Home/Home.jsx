import React, { useState } from 'react'
import "./Home.css"
import axios from 'axios'
import { useEffect } from 'react';
import FormTable from '../Form/FormTable';

axios.defaults.baseURL = "http://localhost:8080/"

const Home = () => {
  const [addsection, setAddsection] = useState(false);
  const [editSection, setEditsection] = useState(false)
  const [formdata, setFormData] = useState({
    projectname: "",
    authername: "",
    visitURL:""
  })

  const [formdataedit, setFormDataEdit] = useState({
    projectname: "",
    authername: "",
    visitURL:"",
    _id: ""
  })
  const [datalist, setDatalist] = useState([])
  const handleOnChange = (e) => {
    const { value, name } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/create", formdata)
    console.log(data)
    if (data.data.success) {
      setAddsection(false)
      alert(data.data.message)
      getFetchData();
      setFormData({
        projectname: "",
        authername: "",
        visitURL:""
      })
    }
  }

  const getFetchData = async () => {
    const data = await axios.get("/")
    console.log(data)
    if (data.data.success) {
      setDatalist(data.data.data)
      // alert(data.data.message)

    }
  }

  useEffect(() => {
    getFetchData();
  }, [])

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id)
    if (data.data.success) {
      getFetchData();
      alert(data.data.message)
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put("/update/", formdataedit)
    if (data.data.success) {
      getFetchData();
      alert(data.data.message)
      setEditsection(false)
    }
  }

  const handleEditOnChange = async (e) => {
    const { value, name } = e.target
    setFormDataEdit((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleEdit = (el) => {
    setFormDataEdit(el)
    setEditsection(true)
  }

  return (
    <div className='container'>
      <button className='btn btn-add' onClick={ () => setAddsection(true) }>Add</button>
      {
        addsection && (
          <FormTable
            handleSubmit={ handleSubmit }
            handleOnChange={ handleOnChange }
            handleClose={ () => setAddsection(false) }
            rest={ formdata }
          />
        )
      }
      {
        editSection && (
          <FormTable
            handleSubmit={ handleUpdate }
            handleOnChange={ handleEditOnChange }
            handleClose={ () => setAddsection(false) }
            rest={ formdataedit }
          />
        )
      }

      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Auther Name</th>
              <th>Link</th>
              <th>

              </th>
            </tr>
          </thead>
          <tbody>
            { datalist[0] ? (
              datalist.map((el) => {
                return (
                  <tr>
                    <td>{ el.projectname }</td>
                    <td>{ el.authername }</td>
                    <td>{ el.visitURL }</td>
                    <td>
                      <button className='btn btn-edit' onClick={ () => handleEdit(el) }>Edit</button>
                      <button className='btn btn-delete' onClick={ () => handleDelete(el._id) }>Delete</button>
                    </td>
                  </tr>
                )
              }))
              : (
                <p style={ { textAlign: "center" } } >No Data</p>
              )
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Home
