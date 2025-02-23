import React, { useEffect, useState } from 'react'
import craftsmenService from '../Services/CraftsmenService';
import { useNavigate, useParams } from 'react-router-dom';

const EditCraftsmen = () => {
  const [loading, setLoading] = useState();
  const { id } = useParams();
  const [craftsmen, setCraftsmen] = useState(null)
  const navigate = useNavigate()

  const getCraftsMen = async () => {
    try {
      if (!id) return;
      setLoading(true);
      const { data } = await craftsmenService.getCraftsMenById(id);
      setCraftsmen(data);
      console.log(data)
    } catch (error) {
      const { status, message } = error;
      console.log("Error ", message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setCraftsmen(prev => {
      return ({
        ...prev,
        [e.target.name]: e.target.value
      })
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await craftsmenService.editCraftsMenById(id, craftsmen);
      navigate('/');
    } catch (error) {
      const { status, message } = error;
      console.log("Error, ", message)
    }
  }

  useEffect(() => {
    getCraftsMen();
  }, [id])

  if (loading) return (
    <>
      <h1>Loading...</h1>
    </>
  )

  if (!craftsmen) return (
    <>
      <h1>No Such CraftsMen Found...</h1>
    </>
  )

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <form action="" onSubmit={handleSubmit} className='border-2 border-slate-700 flex flex-col items-center justify-center gap-2 p-5'>
        <label htmlFor="name" className='text-xl'>CraftsMen Name</label>
        <input type="text" name="name" id="name" value={craftsmen.name} required
          onChange={handleChange}
          className='border-2 border-slate-600 p-1'
        />
        <label htmlFor="dob" className='text-xl'>CraftsMen DOB : </label>
        <input type="date" name="dob" id="dob" value={new Date(craftsmen.dob).toLocaleDateString("en-CA")} required
          onChange={handleChange}
          className='border-2 border-slate-600 p-1'
        />

        <label htmlFor="show" className='text-xl'>Show</label>
        <select name="show" id="show" onChange={(e) => {
          if (e.target.value == "false") setCraftsmen(prev => ({ ...prev, show: false }))
          else setCraftsmen(prev => ({ ...prev, show: true }))
        }} className='border-2 border-slate-600 p-1'>
          <option value="">Select One</option>
          <option value="false">False</option>
          <option value="true">True</option>
        </select>

        <button type='submit' className='text-xl mt-2 bg-slate-700 text-white px-2 py-1 rounded-md hover:bg-slate-600 transition-all'>Edit Details</button>
      </form>
    </div>

  )
}

export default EditCraftsmen
