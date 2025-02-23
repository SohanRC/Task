import React, { useEffect, useState } from 'react'
import companyService from '../Services/CompanyService';
import { useNavigate, useParams } from 'react-router-dom';

const EditCompany = () => {
  const [loading, setLoading] = useState();
  const { id } = useParams();
  const [company, setCompany] = useState(null)
  const navigate = useNavigate()

  const getCompany = async () => {
    try {
      if (!id) return;
      setLoading(true);
      const { data } = await companyService.getCompanyById(id);
      setCompany(data);
      console.log(data)
    } catch (error) {
      const { status, message } = error;
      console.log("Error ", message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setCompany(prev => {
      return ({
        ...prev,
        [e.target.name]: e.target.value
      })
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(company)
    try {
      const { data } = await companyService.editCompanyById(id, company);
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
      const { data } = await companyService.deleteCompany(id)
      navigate('/')
    } catch (error) {
      const { status, message } = error;
      console.log("Error ", message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCompany();
  }, [id])

  if (loading) return (
    <>
      <h1>Loading...</h1>
    </>
  )

  if (!company) return (
    <>
      <h1>No Such Company Found...</h1>
    </>
  )

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <form action="" onSubmit={handleSubmit} className='border-2 border-slate-700 flex flex-col items-center justify-center gap-2 p-5'>
        <label htmlFor="name" className='text-xl'>Company Name</label>
        <input type="text" name="name" id="name" value={company.name} required
          onChange={handleChange}
          className='border-2 border-slate-600 p-1'
        />
        <label htmlFor="startDate" className='text-xl'>Company StartDate : </label>
        <input type="date" name="startDate" id="startDate" value={new Date(company.startDate).toLocaleDateString("en-CA")} required
          onChange={handleChange}
          className='border-2 border-slate-600 p-1'
        />
        <label htmlFor="owner" className='text-xl'>Company Owner</label>
        <input type="text" name="owner" id="owner" value={company.owner} required
          onChange={handleChange}
          className='border-2 border-slate-600 p-1'
        />

        <label htmlFor="show" className='text-xl'>Show</label>
        <select name="show" id="show" onChange={(e) => {
          if (e.target.value == "false") setCompany(prev => ({ ...prev, show: false }))
          else setCompany(prev => ({ ...prev, show: true }))
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

export default EditCompany
