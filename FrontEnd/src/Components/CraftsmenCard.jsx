import React from 'react'

const CraftsmenCard = () => {
    return (
        <div className='border-2 border-red-500 w-[24rem] p-2 rounded-md flex flex-col justify-center items-center gap-2 flex-wrap'>
            <h1 className='text-center text-3xl'>Craftsmen Name</h1>
            <h2 className='text-xl'>DOB : 20/12/2001</h2>
            <button className='text-xl mt-2 bg-slate-700 text-white px-2 py-1 rounded-md hover:bg-slate-600 transition-all'>Edit</button>
        </div>
    )
}

export default CraftsmenCard
