import React, { useState } from 'react'

const VideoTitle = ({original_title,overview}) => {

  const [showInfo,setShowInfo]=useState(true);

    
  return (
    <div className=' pt-[20%] w-full px-12 absolute aspect-video bg-gradient-to-r from-black'>
        <h1 className="text-6xl font-bold text-white" >{original_title}</h1>
        {showInfo &&< p className='py-6 text-lg w-1/3 text-white'>{overview}</p>
        }
        <div className="flex cursor-pointer gap-2 py-4">
            <button className='bg-slate-300 py-2 px-6  rounded-md font-bold hover:scale-105 duration-300 ' >▶️ Play</button>
            <button className='bg-slate-400 py-2 px-4  rounded-md font-semibold hover:scale-105 duration-300 '
            onClick={()=> setShowInfo(!showInfo)}
            > ℹ️ More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle;