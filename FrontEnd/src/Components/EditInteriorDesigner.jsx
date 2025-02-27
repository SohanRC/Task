import React, { useEffect, useState } from 'react'
import interiorDesignerService from "../Services/InteriorDesignerService"
import { useNavigate, useParams } from 'react-router-dom';

const EditInteriorDesigner = () => {
  const [loading, setLoading] = useState();
  const { id } = useParams();
  const [interiorDesigner, setInteriorDesigner] = useState(null)
  const navigate = useNavigate()

  const getInteriorDesigner = async () => {
    try {
      if (!id) return;
      setLoading(true);
      const { data } = await interiorDesignerService.getInteriorDesignerById(id)
      setInteriorDesigner(data);
      console.log(data)
    } catch (error) {
      const { status, message } = error;
      console.log("Error ", message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setInteriorDesigner(prev => {
      return ({
        ...prev,
        [e.target.name]: e.target.value
      })
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await interiorDesignerService.editInteriorDesignerById(id, interiorDesigner);
      navigate('/');
    } catch (error) {
      const { status, message } = error;
      console.log("Error, ", message)
    }
  }

  const handleDelete = async (e) => {
    try {
      if (!id) return;
      setLoading(true);
      const { data } = await interiorDesignerService.deleteInteriorDesigner(id)
      navigate('/')
    } catch (error) {
      const { status, message } = error;
      console.log("Error ", message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getInteriorDesigner();
  }, [id])

  if (loading) return (
    <>
      <h1>Loading...</h1>
    </>
  )

  if (!interiorDesigner) return (
    <>
      <h1>No Such Interior Designer Found...</h1>
    </>
  )

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <form action="" onSubmit={handleSubmit} className='border-2 border-slate-700 flex flex-col items-center justify-center gap-2 p-5'>
        <label htmlFor="name" className='text-xl'>Interior Designer Name</label>
        <input type="text" name="name" id="name" value={interiorDesigner.name} required
          onChange={handleChange}
          className='border-2 border-slate-600 p-1'
        />
        <label htmlFor="dob" className='text-xl'>Interior Designer DOB : </label>
        <input type="date" name="dob" id="dob" value={new Date(interiorDesigner.dob).toLocaleDateString("en-CA")} required
          onChange={handleChange}
          className='border-2 border-slate-600 p-1'
        />
        <label htmlFor="address" className='text-xl'>Interior Designer Address</label>
        <input type="text" name="address" id="address" value={interiorDesigner.address} required
          onChange={handleChange}
          className='border-2 border-slate-600 p-1'
        />

        <label htmlFor="show" className='text-xl'>Show</label>
        <select name="show" id="show" onChange={(e) => {
          if (e.target.value == "false") setInteriorDesigner(prev => ({ ...prev, show: false }))
          else setCraftsmen(prev => ({ ...prev, show: true }))
        }} className='border-2 border-slate-600 p-1'>
          <option value="">Select One</option>
          <option value="false">False</option>
          <option value="true">True</option>
        </select>

        <button type='submit' className='text-xl mt-2 bg-slate-700 text-white px-2 py-1 rounded-md hover:bg-slate-600 transition-all'>Edit Details</button>
        <button type='button' onClick={handleDelete} className='text-xl mt-2 bg-slate-700 text-white px-2 py-1 rounded-md hover:bg-slate-600 transition-all'>Delete</button>
      </form>
    </div>

  )
}

export default EditInteriorDesigner
