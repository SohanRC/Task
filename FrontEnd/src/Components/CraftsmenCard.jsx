import React from 'react'

const CraftsmenCard = ({ craftsMen }) => {
    return (
        <div className='border-2 border-red-500 w-[24rem] p-2 rounded-md flex flex-col justify-center items-center gap-2 flex-wrap'>
            <h1 className='text-center text-3xl'>{craftsMen.name}</h1>
            <h2 className='text-xl'>DOB : {craftsMen.dob}</h2>
            <button className='text-xl mt-2 bg-slate-700 text-white px-2 py-1 rounded-md hover:bg-slate-600 transition-all'>Edit</button>
        </div>
    )
}

export default CraftsmenCard
