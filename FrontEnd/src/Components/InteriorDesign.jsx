import React, { useState, useEffect} from 'react'
import InteriorDesignCard from './InteriorDesignCard'
import interiorDesignerService from '../Services/InteriorDesignerService.js';

const InteriorDesign = () => {

    const [interiorDesigners, setInteriorDesigners] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchInteriorDesigners = async () => {
        setLoading(true)
        try {
            const { data } = await interiorDesignerService.getAllInteriorDesigner();
            setInteriorDesigners(data)
        } catch (error) {
            const { status, message } = error;
            console.log("Error : ", message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchInteriorDesigners();
    }, [])

    if (loading) return (
        <div>
            Loading....
        </div>
    )

    return (
        <div className='h-screen w-screen border-2 border-red-500 flex flex-col items-center gap-2 p-5'>
            <h1 className='text-center text-4xl'>Interior Designer Page</h1>
            <h1 className='text-center text-4xl'>Here is the List Of Interior Designers : </h1>
            <div className='border-2 border-teal-500 h-screen w-[80vw] flex items-center justify-center flex-wrap gap-5'>
                {
                    interiorDesigners.map((designer) => {
                        if (designer.show)
                            return <InteriorDesignCard key={designer._id} designer={designer} />
                        return <></>
                    })
                }
                {/* <InteriorDesignCard />
                <InteriorDesignCard />
                <InteriorDesignCard /> */}
            </div>
        </div>
    )
}

export default InteriorDesign
