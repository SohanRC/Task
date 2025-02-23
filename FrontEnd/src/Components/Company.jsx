import React from 'react'
import CompanyCard from './CompanyCard'

const Company = () => {
    return (
        <div className='h-screen w-screen border-2 border-red-500 flex flex-col items-center gap-2 p-5'>
            <h1 className='text-center text-4xl'>Company Page</h1>
            <h1 className='text-center text-4xl'>Here is the List Of Companies : </h1>
            <div className='border-2 border-teal-500 h-screen w-[80vw] flex items-center justify-center flex-wrap gap-5'>
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
            </div>
        </div>
    )
}

export default Company
