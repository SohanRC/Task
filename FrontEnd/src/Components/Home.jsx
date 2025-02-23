import React from 'react'
import Card from './Card.jsx'

const Home = () => {
  return (
      <div className='h-screen w-screen border-2 border-red-500 flex flex-col justify-center items-center gap-2'>
          <h1 className='text-6xl'>Welcome Admin</h1>
          <h2 className='text-2xl'>Sections</h2>
          <div className='flex justify-center items-center gap-2 flex-wrap '>
              <Card title="Company Page" link="/company" />
              <Card title="Interior Designer Page" link="/interior-design" />
              <Card title="Craftsmen Page" link="/craftsmen" />
          </div>
    </div>
  )
}

export default Home
