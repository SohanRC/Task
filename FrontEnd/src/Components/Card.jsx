import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ title, link }) => {
    const navigate = useNavigate();
    return (
        <div className='h-[15rem] w-[15rem] border-2 border-teal-600 flex flex-col items-center justify-center gap-3 rounded-md'>
            <h1 className='text-center text-3xl'>{title}</h1>
            <button onClick={() => {
                navigate(link)
            }} className='text-2xl mt-2 bg-slate-700 text-white p-2 rounded-md hover:bg-slate-600 transition-all'>Explore</button>
        </div>
    )
}

export default Card
