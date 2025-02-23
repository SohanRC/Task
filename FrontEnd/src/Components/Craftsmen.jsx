import React, { useState, useEffect} from 'react'
import CraftsmenCard from './CraftsmenCard'
import craftsmenService from '../Services/CraftsmenService.js';

const Craftsmen = () => {

    const [craftsMen, setCraftsMen] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchCraftsMen = async () => {
        setLoading(true)
        try {
            const { data } = await craftsmenService.getAllCraftsMen();
            setCraftsMen(data)
        } catch (error) {
            const { status, message } = error;
            console.log("Error : ", message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCraftsMen();
    }, [])

    if (loading) return (
        <div>
            Loading....
        </div>
    )

    return (
        <div className='h-screen w-screen border-2 border-red-500 flex flex-col items-center gap-2 p-5'>
            <h1 className='text-center text-4xl'>Craftsmen Page</h1>
            <h1 className='text-center text-4xl'>Here is the List Of Craftsmen : </h1>
            <div className='border-2 border-teal-500 h-screen w-[80vw] flex items-center justify-center flex-wrap gap-5'>
                {
                    craftsMen.map((craftsMen) => {
                        if (craftsMen.show)
                            return <CraftsmenCard key={craftsMen._id} craftsMen={craftsMen} />
                        return <></>
                    })
                }
                {/* <CraftsmenCard />
                <CraftsmenCard />
                <CraftsmenCard /> */}
            </div>
        </div>
    )
}

export default Craftsmen
