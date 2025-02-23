import React from 'react'
import CraftsmenCard from './CraftsmenCard'

const Craftsmen = () => {
    return (
        <div className='h-screen w-screen border-2 border-red-500 flex flex-col items-center gap-2 p-5'>
            <h1 className='text-center text-4xl'>Craftsmen Page</h1>
            <h1 className='text-center text-4xl'>Here is the List Of Craftsmen : </h1>
            <div className='border-2 border-teal-500 h-screen w-[80vw] flex items-center justify-center flex-wrap gap-5'>
                <CraftsmenCard />
                <CraftsmenCard />
                <CraftsmenCard />
            </div>
        </div>
    )
}

export default Craftsmen
