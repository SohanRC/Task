import React from 'react'
import { useNavigate } from 'react-router-dom'

const CompanyCard = ({ company }) => {
  const navigate = useNavigate();
  return (
    <div className='border-2 border-red-500 w-[24rem] p-2 rounded-md flex flex-col justify-center items-center gap-2 flex-wrap'>
      <h1 className='text-center text-3xl'>{company.name}</h1>
      <h2 className='text-xl'>Start Date : {company.startDate}</h2>
      <h2 className='text-xl'>Owner Name : {company.owner}</h2>
      <button className='text-xl mt-2 bg-slate-700 text-white px-2 py-1 rounded-md hover:bg-slate-600 transition-all'
        onClick={() => {
          navigate(`/edit/company/${company._id}`)
        }}
      >Edit</button>
    </div>
  )
}

export default CompanyCard
