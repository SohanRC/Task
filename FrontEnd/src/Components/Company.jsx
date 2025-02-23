import React, { useEffect, useState } from 'react'
import CompanyCard from './CompanyCard'
import companyService from '../Services/CompanyService.js';

const Company = () => {

    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchCompanies = async () => {
        setLoading(true)
        try {
            const { data } = await companyService.getAllCompanies();
            setCompanies(data)
        } catch (error) {
            const { status, message } = error;
            console.log("Error : ", message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCompanies();
    }, [])

    if (loading) return (
        <div>
            Loading....
        </div>
    )

    return (
        <div className='h-screen w-screen border-2 border-red-500 flex flex-col items-center gap-2 p-5'>
            <h1 className='text-center text-4xl'>Company Page</h1>
            <h1 className='text-center text-4xl'>Here is the List Of Companies : </h1>
            <div className='border-2 border-teal-500 h-screen w-[80vw] flex items-center justify-center flex-wrap gap-5'>
                {
                    companies.map((comp) => {
                        if(comp.show) 
                            return <CompanyCard key={comp._id} company={comp} />
                        return <></>
                    })
                }
            </div>
        </div>
    )
}

export default Company
